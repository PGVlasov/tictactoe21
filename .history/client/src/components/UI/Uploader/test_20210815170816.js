import React from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";
import classes from "./Uploader.module.css";
import axios from "axios";

export default function Uploader() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const onChange = (imageList, addUpdateIndex) => {
    // data   for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    console.log(imageList);
    // const data = new FormData();
    // console.log(imageList[0]);
    // data.append("image", imageList[0]);
    // console.log(data);

    // return data;
    return imageList;
  };
  function addAvatar(imageList) {
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

  return (
    <div className={classes.Uploader}>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
        enctype="multipart/form-data"
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          onImageRemove,
          //   addAvatar,
          dragProps,
        }) => (
          <div className={classes.PlayerPhoto} type="file" name="avatar">
            <Button type="success" onClick={onImageUpload} {...dragProps}>
              Выберите фотографию
            </Button>
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
                <Button type="success" onClick={() => addAvatar(imageList)}>
                  Сохранить фотографию
                </Button>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
// export default class Uploader extends Component {
//     state = {
//       image: [],
//       isAvatarAdded: false,
//     };

//     const [images, setImages] = React.useState([])

//     onChange = (event, image) => {
//       this.setState({
//         image: URL.createObjectURL(event.target.files[0]),
//         isAvatarAdded: true,
//       });
//       this.state.image.push(event.target.files[0]);
//       const img = this.state.image;
//       console.log(this.state.isAvatarAdded);
//       console.log(img[0]);
//       // data   for submit
//       // if (event.target.files && event.target.files[0]) {
//       //   this.setState({
//       // // image: URL.createObjectURL(event.target.files[0]),
//       // img: event.target.files,
//       //   });
//       // const img = event.target.files;
//       //return img;
//       // }
//       // const avatarFile = event.target.files;
//       // console.log(avatarFile);
//       // return avatarFile;
//       const fdata = new FormData();
//       console.log(img);
//       fdata.append("image", img[0]);
//       console.log(fdata);
//       // try {
//       //   axios({
//       //     method: "post",
//       //     url: "/avatar",
//       //     data: fdata,
//       //     headers: { "Content-Type": "multipart/form-data" },
//       //   })
//       //     .then(function (response) {
//       //       console.log(response);
//       //     })
//       //     .catch(function (response) {
//       //       console.log(response);
//       //     });
//       // } catch (error) {
//       //   console.log(error.response.data);
//       // }
//       return fdata;
//     };

//     onSubmit() {
//       console.log("!!!!!");
//     }

//     onImageUpdate() {}

//     onImageRemove() {}

//     addAvatar(state) {
//       console.log(state);
//       // const fdata = new FormData();
//       // console.log(img);
//       // fdata.append("image", this.state.image);
//       // console.log(fdata);
//       // try {
//       //   const config = { headers: { "Content-Type": false } };
//       //   axios({
//       //     method: "post",
//       //     url: "/avatar",
//       //     data: fdata,
//       //     headers: { "Content-Type": "multipart/form-data" },
//       //   })
//       //     .then(function (response) {
//       //       console.log(response);
//       //     })
//       //     .catch(function (response) {
//       //       console.log(response);
//       //     });
//       // } catch (error) {
//       //   console.log(error.response.data);
//       // }
//       //  document.location.href = "/Player";
//     }
//     render() {
//       return (
//         <div className={classes.Uploader}>
//           <input
//             type="file"
//             nv-file-select=""
//             onChange={this.onChange}
//             onSubmit={this.onSubmit}
//           />
//           <img
//             id="target"
//             className={classes.Photo}
//             src={this.state.image}
//             alt={"фото не выбрано"}
//           />

//           <Button
//             type="success"
//             onClick={this.addAvatar}
//             disabled={!this.state.isAvatarAdded}
//           >
//             Сохранить фотографию
//           </Button>
//           {/* {imageList.map((image, index) => (
//             <div key={index} className={classes.PlayerPhoto}>
//               <div></div>
//             </div>
//           ))} */}
//         </div>
//       );
//     }
//   }
