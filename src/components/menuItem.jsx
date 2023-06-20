import React from 'react';
import styles from '../styles/menu.module.scss';
import Image from 'next/image';

export default function MenuItem({ data }) {
    function getIcon(icon) {
        switch (icon) {
            case 'vegetarian':
                return 'bx:leaf';
            case 'vegan':
                return 'bxs:leaf';
            case 'pescatarian':
                return 'noto:fish';
            case 'hot':
                return 'noto:hot-pepper';
            case 'sweet':
                return 'noto:lollipop';
            case 'sour':
                return 'arcticons:lime';
            case 'strong':
                return 'mdi:arm-flex';
            case 'dry':
                return 'fluent-emoji-flat:cactus';
            default:
                break;
        }
    }

    return (
        <div className={ styles.menuItem }>
            { data.image_URL && <Image src={ data.image_URL } height={ 200 } width={ 150 } alt='' title={ data.name } /> }

            {
                (data.name || data.price) &&
                <div className={ styles.titleBox }>

                    <p className={ styles.title }>
                        { data.tags?.includes('seasonal') && <p className={ styles.seasonal }>Seasonal</p> }
                        <span>{ data.name }</span>
                        <span className={ styles.icons }>
                            { data.tags?.map((tag, i) => {
                                return <span key={ i }>
                                    <iconify-icon icon={ getIcon(tag) } title={ tag[0].toUpperCase() + tag.slice(1) } />
                                </span>;
                            }) }
                        </span>
                    </p>

                    { data.price && <p className={ styles.price }><span>{ data.price }</span></p> }
                </div>
            }

            <p className={ styles.desc }>{ data.desc }</p>
        </div>
    );
}
