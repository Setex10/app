

import {Fragment, useEffect} from 'react';

import styles from './Header.module.css'

import image from '../../Assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


const Header = (props) => {

    return (
        <Fragment>
            <header className={styles.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className={styles['main-image']}>
                <img src={image} alt="" />
            </div>
        </Fragment>
    )
}
export default Header