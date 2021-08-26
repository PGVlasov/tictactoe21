import React, { Component } from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";
import classes from "./Uploader.module.css";
import axios from "axios";

export default class Uploader extends Component {
  state = {
    imageList: [],
    image: [],
    img: [],
  };

  onChange = (event, state) => {
    this.setState({});
    console.log(event.target.file[0]);
    console.log(this.state);
    // data   for submit
    // if (event.target.files && event.target.files[0]) {
    //   this.setState({
    // // image: URL.createObjectURL(event.target.files[0]),
    // img: event.target.files,
    //   });
    // const img = event.target.files;
    console.log(this.state.img);
    //return img;
    // }
    // const avatarFile = event.target.files;
    // console.log(avatarFile);
    // return avatarFile;
  };

  onImageUpdate() {}

  onImageRemove() {}

  addAvatar(avatarFile) {
    const fdata = new FormData();
    console.log(avatarFile);
    fdata.append("image", avatarFile);
    console.log(fdata);
    try {
      const config = { headers: { "Content-Type": false } };

      axios({
        method: "post",
        url: "/avatar",
        data: fdata,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (response) {
          console.log(response);
        });
    } catch (error) {
      console.log(error.response.data);
    }

    // // document.location.href = "/Player";
  }
  render() {
    return (
      <div className={classes.Uploader}>
        <input type="file" nv-file-select="" onChange={this.onChange} />
        <img
          id="target"
          className={classes.Photo}
          src={this.state.image}
          alt={"фото не выбрано"}
        />

        <Button type="success" onClick={this.addAvatar}>
          Сохранить фотографию
        </Button>
        {/* {imageList.map((image, index) => (
          <div key={index} className={classes.PlayerPhoto}>
            <div></div>
          </div>
        ))} */}
      </div>
    );
  }
}
