import React from 'react';
import clsx from 'clsx';

import style from './Navigation.module.css';
import Header from './Header';

function Navigation(props) {
    return (
        <div className={clsx(style.navigation)}>
            <Header />
        </div>
    );
}

export default Navigation;
