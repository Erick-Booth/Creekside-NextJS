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
      <title>Creekside Bar & Grille | Menu</title>
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
