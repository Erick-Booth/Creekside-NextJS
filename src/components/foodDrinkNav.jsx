import React from 'react';
import Link from 'next/link';

export default function FoodDrinkNav({ CurrentRoute }) {
    return (
        <nav id='FoodDrinkNav'>
            <span className='zoomieBar' data-route={ CurrentRoute.slice(CurrentRoute.indexOf('/') + 1) } />
            <Link href={ '/food' } className={ CurrentRoute.includes('/food') ? 'active' : undefined }>
                <iconify-icon icon="fa6-solid:utensils" />
                <p>Food</p>
            </Link>
            <Link href={ '/drinks' } className={ CurrentRoute.includes('/drinks') ? 'active' : undefined }>
                <iconify-icon icon="mingcute:glass-cup-fill" />
                <p>Drinks</p>
            </Link>
        </nav>
    );
}
