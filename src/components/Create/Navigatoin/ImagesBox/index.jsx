import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

import style from './ImagesBox.module.css';
import DropBox from './DropBox';
import DropCard from './DropCard';
import ImageCard from './ImageCard';

function ImagesBox() {
    const [imageState, setImageState] = useState([]);
    return (
        <div className={clsx(style.imagesBox)}>
            <p className={clsx(style.imagesBox__header)}>Images</p>
            {imageState.length > 0 ? (
                <div className={clsx(style.imagesBox__content)}>
                    {imageState.map((img, index) => (
                        <ImageCard key={index} img={img} />
                    ))}
                    <DropCard setImagesState={setImageState} />
                </div>
            ) : (
                <DropBox setImagesState={setImageState} />
            )}
        </div>
    );
}

export default ImagesBox;
