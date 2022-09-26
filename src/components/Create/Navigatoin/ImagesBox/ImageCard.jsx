import React from 'react';

import clsx from 'clsx';
import style from './ImagesBox.module.css';

function ImageCard(props) {
    return (
        <div className={clsx(style.card)}>
            <img
                className={clsx(style.card__content, style.card__contentBorder)}
                src={URL.createObjectURL(props.img)}
                alt=""
                width="100%"
            />
        </div>
    );
}

export default ImageCard;
