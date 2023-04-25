import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Privacy() {
    return (
        <>
            <Head><title>Disclaimer | Creekside Bar & Grille</title></Head>
            <div id="Privacy Policy" className={ 'policy' }>
                <header>
                    <Link href={ '/' }><Image src='/img/svg/Logo.svg' alt="Creekside Bar & Grille" height={ 250 } width={ 350 } /></Link>
                </header>
                <p>Revised 4/25/2023</p><br />
                <h1>Disclaimer</h1><br /><br />
                <p>The information provided by Creekside Bar & Grille (“we,” “us”, or “our”) on
                    creeksiderestaurant.netlify.app (the “Site”) and our mobile application is for general
                    informational purposes only. All information on the Site and our mobile application is provided
                    in good faith, however we make no representation or warranty of any kind, express or implied,
                    regarding the accuracy, adequacy, validity, reliability, availability or completeness of any
                    information on the Site or our mobile application.</p>
                <br />
                <p>UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR
                    DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR OUR MOBILE
                    APPLICATION OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE AND OUR
                    MOBILE APPLICATION. YOUR USE OF THE SITE AND OUR MOBILE APPLICATION AND YOUR
                    RELIANCE ON ANY INFORMATION ON THE SITE AND OUR MOBILE APPLICATION IS SOLELY
                    AT YOUR OWN RISK.</p>
                <br />
                <p>See also:</p>
                <Link href={ '/policy/terms' }>Terms of Use</Link><br />
                <Link href={ '/policy/privacy' }>Privacy Policy</Link>
            </div>
        </>
    );
}
