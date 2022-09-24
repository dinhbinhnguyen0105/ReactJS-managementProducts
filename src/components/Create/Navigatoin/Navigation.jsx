import React from 'react';
import clsx from 'clsx';

import style from './Navigation.module.css';
import Header from './Header';
import ImagesBox from './ImagesBox';

function Navigation(props) {
    return (
        <div className={clsx(style.navigation)}>
            <Header />
            <ImagesBox />
        </div>
    );
}

export default Navigation;
