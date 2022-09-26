import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import style from './ImagesBox.module.css';

function DropCard(props) {
    const onDrop = useCallback((acceptedFiles) => {
        props.setImagesState(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className={clsx(style.card)}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <div className={clsx(style.card__content)}></div>
            ) : (
                <div className={clsx(style.card__content)}>
                    <FontAwesomeIcon icon={faPlus} className={clsx(style.card__plusIcon)} />
                </div>
            )}
        </div>
    );
}

export default DropCard;
