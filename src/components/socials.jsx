import React from 'react';

export default function Socials() {
    const SOCIALS = [
        {
            name: 'Facebook',
            link: "https://www.facebook.com/SpringHillSuitesChattanoogaNE",
            icon: "brandico:facebook"
        },
        {
            name: 'Twitter',
            link: "https://twitter.com/SpringHillCHA",
            icon: "akar-icons:twitter-fill"
        },
        {
            name: 'Instagram',
            link: "https://www.instagram.com/springhillsuiteschattanoogane/",
            icon: "akar-icons:instagram-fill"
        },
        {
            name: 'LinkedIn',
            link: "https://www.linkedin.com/company/springhill-suites-chattanooga-north-ooltewah",
            icon: "akar-icons:linkedin-fill"
        },
        {
            name: 'Pinterest',
            link: "https://www.pinterest.com/SpringHillSuitesChattanoogaNE",
            icon: "cib:pinterest-p"
        },
    ];
    return (
        <div className='socials'>
            { SOCIALS.map((social, i) => {
                return <a href={ social.link } target={ '_blank' } rel="noreferrer" key={ i } title={ `Visit our ${social.name} page` }><iconify-icon icon={ social.icon } /></a>;
            }) }
        </div>
    );
}
