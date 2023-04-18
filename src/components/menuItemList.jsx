import MenuItem from './menuItem';
import styles from '../styles/menu.module.scss';
import React from 'react';

export default function MenuItemList(props) {
    // Can be an array of MenuItems, or an array of categories such as 'draft' followed by the array of MenuItems

    return (
        <>
            <h2 className={ styles.categoryHeader }>{ props.header }</h2>
            {
                props.header == 'salads' && <h4 className={ styles.categoryDesc }>Ranch, Blue&nbsp;Cheese, Vinegarette, 1000&nbsp;Island, Italian, Honey&nbsp;Mustard</h4>
            }
            <div className={ styles.menuItems }>
                {
                    Array.isArray(props.list) && props.list.map((item, x) => {
                        return <>
                            <MenuItem key={ `menuItem_${x}` } data={ item } />
                        </>
                    })
                }
                {
                    // If there are categories to this list (i.e. it's an object instead of an array), map its children.
                    !Array.isArray(props.list) &&
                    Object.keys(props.list).map((key, k) => {
                        return <React.Fragment key={ k }>
                            <h3 className={ styles.subCategoryHeader } key={ k }>{ key }</h3>
                            {
                                props.header == 'wine' && <h4 className={ styles.subCategoryDesc } key={ `sizes_${k}` }>6oz / 8oz / Bottle</h4>
                            }

                            {
                                key.toLowerCase() == 'house' &&
                                <>

                                    <h4 className={ styles.subCategoryDesc } key={ `prices_${k}` }>$7 / $10 / $26</h4>
                                </>
                            }

                            {
                                props.list[key].map((item, i) => {
                                    return <MenuItem key={ `${k}-${i}` } data={ item } header={ key } />
                                })
                            }
                        </React.Fragment>
                    })

                }
            </div>

        </>
    );
}
