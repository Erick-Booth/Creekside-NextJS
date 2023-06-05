import Script from 'next/script';
import Head from 'next/head';
import '../styles/index.scss';
import { useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import FoodDrinkNav from '../components/foodDrinkNav';
import Footer from '../components/footer';
import MenuItems from '../scripts/menuItems'
import TopHeader from '@/components/topHeader';

export default function App({ Component, pageProps }) {
  const ROUTER = useRouter();

  useEffect(() => {
    document.body.focus();
    document.body.scrollTo(0, 0);
  }, [ROUTER.pathname, ROUTER.query]);

  return <>
    <Head>
      <title>Creekside Bar + Grille | Menu</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="author" content="Creekside" key={ 'author' } />
      <meta name="keywords" content="Creekside, bar, grille, ooltewah, food, menu, drinks, cocktails, entree, specials, chattanooga" key={ 'keywords' } />
      <meta name="description" content="One of Ooltewah's hidden gems, Creekside is an exceptional restaurant located on the first floor of SpringHill Suites in Ooltewah, TN." key={ 'desc' } />

      <meta property="og:description" content="One of Ooltewah's hidden gems, Creekside is an exceptional restaurant located on the first floor of SpringHill Suites in Ooltewah, TN." key={ 'og-desc' } />
      <meta property="og:title" content="Creekside Bar + Grille" key={ 'og-title' } />
      <meta property="og:image" content="https://www.creeksidebarandgrille.com/img/logos/orange_profile.png" key={ 'og-image' } />
      <meta property="og:image:alt" content="Creekside Bar + Grille Menu" />
      <meta property="og:type" content="website" key={ 'og-type' } />
      <meta property="og:url" content="https://www.creeksidebarandgrille.com" key={ 'og-url' } />
      <meta property='og:site_name' content={ `Creekside` } />

      <meta name="twitter:card" content="summary_large_image"></meta>

      <link rel='canonical' href='https://www.creeksidebarandgrille.com' />
      <link rel="shortcut icon" href="/img/logos/favicon.ico" type="image/x-icon" />
      <link rel='apple-touch-icon' href='/img/logos/apple-touch.png' />
      <link rel="icon" href="/img/logos/favicon.ico" />
    </Head>

    <Script src='https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js' />
    <TopHeader />

    {
      !ROUTER.pathname.includes('policy') &&
      <FoodDrinkNav CurrentRoute={ ROUTER.pathname } />
    }

    <Component { ...pageProps } menuItems={ MenuItems } />

    <Footer />
  </>;
}
