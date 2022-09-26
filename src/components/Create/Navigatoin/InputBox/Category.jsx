import React from 'react';
import clsx from 'clsx';
import style from './InputBox.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function Category(props) {
    return (
        <div className={clsx(style.category, style.inputField)}>
            <div className={clsx(style.category__title)}>
                <span>Category</span>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </div>
    );
}

export default Category;
