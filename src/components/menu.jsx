import MenuItemList from '../components/menuItemList';
import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/menu.module.scss';
import SpecialCard from '@/components/specialCard';
import Router, { useRouter } from 'next/router';

export default function Drinks(props) {
    // Receives either the 'Food' or 'Drink' Categories from the menuItems.js file.
    const [filter, setFilter] = useState(null);

    const CATEGORY_BTNS_DIV = useRef();
    const ROUTER = useRouter();

    let TIMEOUT;

    useEffect(() => {
        clearTimeout(TIMEOUT);
        if (ROUTER.query.filter) { setFilter(ROUTER.query.filter) }
        scrollCategoryButtons();
    }, [ROUTER.query]);

    function scrollCategoryButtons() {
        //Automatically scrolls the category buttons over and back, to show the user they can swipe left and right.
        if (CATEGORY_BTNS_DIV.current) {
            setTimeout(() => {
                // Scroll to the last element, then back
                CATEGORY_BTNS_DIV?.current.childNodes[Object.keys(props.menuItems).length - 1].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                TIMEOUT = setTimeout(() => {
                    CATEGORY_BTNS_DIV?.current.scrollTo({ left: 0, behavior: 'smooth' });
                }, 500);
            }, 300);
        }
    }

    function handleFilterChange(category, d) {
        clearTimeout(TIMEOUT);
        CATEGORY_BTNS_DIV?.current.childNodes[d].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        setFilter(category);
        document.body.scrollTo(0, 0);
    }

    return <>

        <div ref={ CATEGORY_BTNS_DIV } className={ styles.categoryButtons }>
            <button onClick={ () => handleFilterChange(null, 0) } style={ { display: filter ? 'block' : 'none' } }>All</button>
            { Object.keys(props.menuItems).map((category, d) => {
                return <button key={ d + 1 } className={ filter == category ? styles.active : null } onClick={ () => { handleFilterChange(category, d + 1); } }>{ category }</button>;
            }) }
        </div>

        <h1 className='centerHeading'>Creekside <span>{ props.dataCategory }</span> menu</h1>

        {
            props.dataCategory == 'drinks' &&
            <div className={ styles.iconPreviews }>
                <span><iconify-icon inline icon="noto:lollipop" />Sweet</span>
                <span><iconify-icon inline icon="arcticons:lime" />Sour</span>
                <span><iconify-icon inline icon="mdi:arm-flex" />Strong</span>
                <span><iconify-icon inline icon="fluent-emoji-flat:cactus" />Dry</span>
            </div>
        }

        {
            props.dataCategory == 'food' &&
            <div className={ styles.iconPreviews }>
                <span><iconify-icon inline icon="bx:leaf" />Vegetarian</span>
                <span><iconify-icon inline icon="bxs:leaf" />Vegan</span>
                <span><iconify-icon inline icon="noto:fish" />Pescatarian</span>
                <span><iconify-icon inline icon="noto:hot-pepper" />Hot</span>
            </div>
        }

        { Object.keys(props.menuItems).map((item, i) => {
            if (!filter || filter.toLowerCase() == item.toLowerCase()) {
                return <MenuItemList key={ i } list={ props.menuItems[item] } header={ item } />
            }
        }) }

        <div className='container'>
            <SpecialCard day={ new Date().getDay() } isToday={ true } />
        </div>

    </>;
}
