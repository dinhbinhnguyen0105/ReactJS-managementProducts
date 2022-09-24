import React, { useState } from 'react';
import clsx from 'clsx';

import style from './Header.module.css';

function index(props) {
    const currentTime = new Date();

    return (
        <div className={clsx(style.header)}>
            <h1>Create item</h1>
            <h3 className={clsx(style.header__currenttime)}>{currentTime.toLocaleDateString()}</h3>
        </div>
    );
}

export default index;
