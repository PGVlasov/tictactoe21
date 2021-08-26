import React, { Component } from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";
import classes from "./Uploader.module.css";
import axios from "axios";

export default class Uploader extends Component {
  state = {
    imageList: [],
  };

  onChange = (imageList, addUpdateIndex) => {
    // data   for submit
    this.setState({ imageList });
    console.log("done");
    console.log(imageList);
    return imageList;
  };

  onImageUpdate() {}

  onImageRemove() {}

  addAvatar(imageList) {
    const fdata = new FormData();
    console.log(imageList[0]);
    fdata.append("image", imageList[0]);
    console.log(fdata);
    try {
      // const data = new FormData();
      // console.log(imageList[0]);
      // data.append("yourFieldHere", "yourValueHere");
      // data.append("image", imageList[0]);
      // console.log(data);
      const config = { headers: { "Content-Type": false } };
      //   const config = { headers: { "Content-type": "application/json" } };multipart/form-data

      //   let data = {
      //     name: "pit",
      //   };

      axios({
        method: "post",
        url: "/avatar",
        data: fdata,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then(function (response) {
          //handle success
          console.log(response);
        })
        .catch(function (response) {
          //handle error
          console.log(response);
        });

      //   axios
      //     .post("/avatar", data, config)
      //     .then(console.log(data))
      //     .then(console.log("added"))
      //     .catch((error) => {
      //       console.log(error.response.data);
      //     });
    } catch (error) {
      console.log(error.response.data);
    }
    // fetch("/avatar", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   //   body: JSON.stringify(imageList[0]),
    //   body: imageList[0],
    // })
    //   .then(console.log("avatar added"))
    //   .then(console.log(imageList[0]));
    // // document.location.href = "/Player";
  }
  render() {
    return (
      <div className={classes.Uploader}>
        <input type="file" nv-file-select="" onClick={this.onChange} />
        <Button type="success" onClick={this.addAvatar}>
          Сохранить фотографию
        </Button>
        <img id="target" src={this.state.image} alt={"фото не выбрано"} />
        {/* {imageList.map((image, index) => (
          <div key={index} className={classes.PlayerPhoto}>
            <div></div>
          </div>
        ))} */}
      </div>
    );
  }
}