import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import clsx from 'clsx';
import style from './ImagesBox.module.css';

function MyDropzone() {
    const onDrop = useCallback((acceptedFiles) => {
        const a = URL.createObjectURL(acceptedFiles[0]);
        console.log(a);
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div {...getRootProps()} className={clsx(style.dropZone)}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <p>Drop the file here ...</p>
            ) : (
                <p>Drag 'n' drop sime files here, or click to select files</p>
            )}
        </div>
    );
}

function ImagesBox() {
    return (
        <div className={clsx(style.imagesBox)}>
            <p className={clsx(style.header)}>Images</p>
            <MyDropzone />
        </div>
    );
}

export default ImagesBox;
