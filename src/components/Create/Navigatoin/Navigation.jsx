import React from 'react';
import clsx from 'clsx';

import style from './Navigation.module.css';
import Header from './Header';
import ImagesBox from './ImagesBox';
import InputBox from './InputBox';

function Navigation(props) {
    return (
        <div className={clsx(style.navigation)}>
            <Header />
            <ImagesBox />
            <InputBox />
        </div>
    );
}

export default Navigation;
