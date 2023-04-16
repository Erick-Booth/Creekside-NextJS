import React from 'react';
import specials from '../scripts/specials';
import Link from 'next/link';

export default function SpecialCard({ day, isToday }) {
    if (day > 6) { day = 0 }
    const SPECIAL_DATA = specials[day];

    const FORMATED_DEALS = SPECIAL_DATA?.deals?.map((deal, i) => {
        if (deal.includes("$")) {
            return <h4 key={ i }>{ deal.slice(0, deal.indexOf("$")) }<span>{ deal.slice(deal.indexOf("$")) }</span></h4>;
        }
        return deal;
    });

    return (
        <>
            {
                day > 0 &&
                <div className='specialCard'>
                    { isToday &&
                        <span className="star"><iconify-icon className="star" icon={ "ic:outline-star" } /></span>
                    }

                    {
                        day > 0 &&
                        <>
                            <h2>{ isToday ? "Today's" : `${SPECIAL_DATA?.day}'s` } Special</h2>
                            <p>5 - 7 PM</p>
                        </>
                    }

                    <div className={ "icons" }>
                        { SPECIAL_DATA?.icons.map((icon, i) => {
                            return <iconify-icon key={ i } icon={ icon } />;
                        }) }
                    </div>

                    <h3>{ SPECIAL_DATA?.title }</h3>

                    <span className='separator' />

                    <div className='deals'>
                        { FORMATED_DEALS?.map((deal) => {
                            return deal;
                        }) }
                    </div>

                    <p className='desc'>{ SPECIAL_DATA?.description }</p>

                    { SPECIAL_DATA?.buttons.map((button, i) => {
                        return <Link key={ i } href={ button.link }>{ button.text }</Link>;
                    }) }
                </div>
            }

        </>

    );
}
