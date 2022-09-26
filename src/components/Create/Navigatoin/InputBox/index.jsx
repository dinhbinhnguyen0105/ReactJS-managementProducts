import React from 'react';
import clsx from 'clsx';

import style from './InputBox.module.css';
import Category from './Category';

function InputBox(props) {
    return (
        <div className={clsx(style.inputBox)}>
            <Category />
        </div>
    );
}

export default InputBox;
