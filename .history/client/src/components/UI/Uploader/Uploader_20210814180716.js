import React, { Component } from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";
import classes from "./Uploader.module.css";
import axios from "axios";

export default class Uploader extends Component {
  //   state = {
  //     imageList: [],
  //     image: [],
  //   };

  onChange = (event) => {
    // data   for submit
    if (event.target.files && event.target.files[0]) {
      this.setState({
        image: URL.createObjectURL(event.target.files[0]),
      });
      const img = event.target.files;
      console.log(img);
      console.log(this.state);
      return img;
    }
  };

  onImageUpdate() {}

  onImageRemove() {}

  addAvatar(image) {
    const fdata = new FormData();
    console.log(image);
    fdata.append("image", image);
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
