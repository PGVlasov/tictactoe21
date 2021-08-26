import React from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";

import classes from "./Uploader.module.css";

export default function Uploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
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
            &nbsp;
            {/* <Button type="error" onClick={onImageRemoveAll}>
              Remove all images
            </Button> */}
            {imageList.map((image, index) => (
              <div key={index} className={classes.PlayerPhoto}>
                <img src={image.data_url} alt="" width="100" />
                <div className={classes.ImageWrapper}>
                  <Button type="primary" onClick={onImageUpload} {...dragProps}>
                    Установить аватар
                  </Button>
                  <Button type="primary" onClick={() => onImageUpdate(index)}>
                    Обновить аватар
                  </Button>
                  <Button type="error" onClick={() => onImageRemove(index)}>
                    Удалить аватар
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
