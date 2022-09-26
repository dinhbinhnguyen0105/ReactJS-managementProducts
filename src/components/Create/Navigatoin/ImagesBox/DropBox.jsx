import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import clsx from 'clsx';
import style from './ImagesBox.module.css';

function DropBox(props) {
    const onDrop = useCallback((acceptedFiles) => {
        props.setImagesState(acceptedFiles);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className={clsx(style.dropZone)}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <div className={clsx(style.dropZone__msg)}>
                    <p>Drop the file here ...</p>
                </div>
            ) : (
                <div className={clsx(style.dropZone__msg)}>
                    <FontAwesomeIcon icon={faPlus} className={clsx(style.dropZone__plusIcon)} />
                    <p>Drag 'n' drop sime files here, or click to select files</p>
                </div>
            )}
        </div>
    );
}

export default DropBox;
