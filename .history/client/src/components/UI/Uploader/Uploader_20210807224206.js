import React from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";

import classes from "./Uploader.module.css";

export default function Uploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data   for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <div className={classes.Uploader}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className={classes.PlayerPhoto}>
            <Button type="success" onClick={onImageUpload} {...dragProps}>
              Выберите фотографию
            </Button>
            &nbsp;
            {imageList.map((image, index) => (
              <div key={index} className={classes.PlayerPhoto}>
                <img src={image.data_url} alt="Аватара пока нет" width="100" />
                <div className={classes.ImageWrapper}>
                  <Button type="primary" onClick={() => onImageUpdate(index)}>
                    Обновить фотографию
                  </Button>
                  <Button type="error" onClick={() => onImageRemove(index)}>
                    Удалить фотографию
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
