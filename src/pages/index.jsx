import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.scss';
import SpecialCard from '../components/specialCard';
import { useState } from 'react';

export default function Home() {
  const TODAY = new Date().getDay();
  const [querySpecial, setQuerySpecial] = useState(TODAY < 6 ? TODAY + 1 : 1); //Default to tomorrow, will update when user clicks a new DOTW.

  const SPECIAL_DAY_BUTTONS = [
    { name: 'Monday', day: 1 },
    { name: 'Tuesday', day: 2 },
    { name: 'Wednesday', day: 3 },
    { name: 'Thursday', day: 4 },
    { name: 'Friday', day: 5 },
    { name: 'Saturday', day: 6 },
  ];

  function handleSpecialQuery(day) {
    setQuerySpecial(day);
  }

  return (
    <>
      <Head>
        <title>Creekside Menu</title>
        <meta name="description" content="Creekside Bar & Grille Menu" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={ styles.welcomeBox }>
        <h1>Welcome to Creekside Bar & Grille, Springhill Suites Marriott</h1>
        <Image src="/img/svg/Welcome-MSG-2.svg" alt="Welcome to Creekside Bar & Grille, Springhill Suites Marriott" width={ 500 } height={ 350 } />
      </div>

      <main className={ styles.main }>

        <div className={ styles.foodDrinkBtns }>
          <Link href={ '/food' }><iconify-icon icon="noto:hamburger"></iconify-icon> Food Menu</Link>
          <Link href={ "/drinks" }><iconify-icon icon="fluent-emoji:tropical-drink"></iconify-icon> Drink Menu</Link>
        </div>

        <SpecialCard day={ TODAY } isToday={ true } />

        <h2 className='blueHeading'>{ TODAY == 0 && 'But ' }Check out our other daily specials <iconify-icon inline icon="emojione:face-savoring-food"></iconify-icon></h2>

        <div className={ styles.dayButtons }>
          <span className={ styles.sideLine } />
          { SPECIAL_DAY_BUTTONS.map((btn, i) => {
            return <button
              key={ i }
              onClick={ () => { handleSpecialQuery(btn.day) } }
              data-active={ querySpecial === btn.day }
              data-is-tomorrow={ TODAY + 1 === btn.day }>
              { btn.name }
            </button>;
          }) }
        </div>

        <SpecialCard day={ querySpecial } isToday={ false } />

      </main>
    </>
  );
}
