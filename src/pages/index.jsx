import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/home.module.scss';
import SpecialCard from '../components/specialCard';
import { useState, useEffect } from 'react';

export default function Home() {
  const [TODAY, setTODAY] = useState(new Date());
  const [querySpecial, setQuerySpecial] = useState(1);

  useEffect(() => {
    const DATE = new Date();
    setTODAY(DATE);
    setQuerySpecial(DATE.getDay() < 6 ? DATE.getDay() + 1 : 1);
  }, []);

  const SPECIAL_DAY_BUTTONS = [
    { name: 'Monday', day: 1 },
    { name: 'Tuesday', day: 2 },
    { name: 'Wednesday', day: 3 },
    { name: 'Thursday', day: 4 },
    { name: 'Friday', day: 5 },
    { name: 'Saturday', day: 6 },
  ];

  return (
    <>
      <div className={ styles.welcomeBox }>
        <h1>Welcome to Creekside Bar & Grille, Springhill Suites Marriott</h1>
        <Image src="/img/svg/Welcome-MSG-2.svg" alt="Welcome to Creekside Bar & Grille, Springhill Suites Marriott" width={ 500 } height={ 350 } />
      </div>

      <main className={ styles.main }>

        <div className={ styles.foodDrinkBtns }>
          <Link href={ '/food' }><iconify-icon icon="noto:hamburger"></iconify-icon> Food Menu</Link>
          <Link href={ "/drinks" }><iconify-icon icon="fluent-emoji:tropical-drink"></iconify-icon> Drink Menu</Link>
        </div>

        {
          TODAY < new Date(2023, 8, 30) && <>
            <div className="specialCard">
              <span className="star"><iconify-icon className="star" icon={ "twemoji:beach-with-umbrella" } /></span>
              <h2>{ `${new Date() < new Date(2023, 7, 31) ? 'New' : ''} Summer Cocktails` }</h2>
              <p>& Poolside Buckets</p>

              <span className='separator' />


              <p className='desc'>Try our limited-time drink specials!</p>

              <Link href={ '/drinks' }>View Drinks</Link>
            </div>
          </>
        }

        <SpecialCard day={ TODAY.getDay() } isToday={ true } />

        <h2 className='blueHeading'>{ TODAY == 0 && 'But ' }Check out our other daily specials <iconify-icon inline icon="emojione:face-savoring-food"></iconify-icon></h2>

        <div className={ styles.dayButtons }>
          <span className={ styles.sideLine } />
          { SPECIAL_DAY_BUTTONS.map((btn, i) => {
            return <button
              key={ i }
              onClick={ () => { setQuerySpecial(btn.day) } }
              data-active={ querySpecial === btn.day }
              data-is-tomorrow={ TODAY + 1 === btn.day }>
              { btn.name }
            </button>;
          }) }
        </div>

        <SpecialCard day={ querySpecial } isToday={ false } />

        <div className="specialCard">
          <span className="star"><iconify-icon className="star" icon={ "vscode-icons:file-type-coffeescript" } /></span>
          <h2>{ `Join us for Brunch` }</h2>
          <p>Saturdays from 11am - 3pm</p>
        </div>

      </main>
    </>
  );
}
