import React from 'react';
import Logo from '../../public/img/svg/Logo.svg';
import Image from 'next/image';
import Socials from './socials';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id='Footer'>
            <p>Warning: consuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of food-borne illness, especially if you have a certain medical condition.</p>
            <Link className='logo' href={ '/' }><Image src={ Logo } alt={ "Creekside Bar & Grille" } /></Link>

            <Socials />

            <div className='links'>
                <Link href={ '/policy/terms' } >Terms of Use</Link>
                <Link href={ '/policy/privacy' } >Privacy Policy</Link>
                <Link href={ '/policy/disclaimer' } >Disclaimer</Link>
            </div>

            <p>Copyright &copy; Creekside Bar & Grille. All Rights Reserved. A subsidiary of Springhill&nbsp;Suites, Ooltewah&nbsp;TN</p>

            <p className='credit'>Built with <iconify-icon inline icon="twemoji:red-heart" /> by <a href="https://www.erickbooth.com">Erick Booth</a></p>
        </footer>
    );
}
