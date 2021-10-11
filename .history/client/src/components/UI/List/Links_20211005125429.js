import React, { Component } from "react";
//import ReactDOM from "react-dom";
import ImageUploading from "react-images-uploading";
import Button from "../../UI/Button/Button";
import classes from "../Uploader/Uploader.module.css";
import axios from "axios";
import Players from "../../../Containers/Field/Player";

export default class Links extends Component {
  state = {
    image: [],
    isAvatarAdded: false,
  };

  onChange = (event, image) => {
    this.setState({
      image: URL.createObjectURL(event.target.files[0]),
      isAvatarAdded: true,
    });
    //URL.revokeObjectURL()
    this.state.image.push(event.target.files[0]);
    const img = this.state.image;
    console.log(this.state.isAvatarAdded);
    console.log(img[0]);
    // data   for submit
    // if (event.target.files && event.target.files[0]) {
    //   this.setState({
    // // image: URL.createObjectURL(event.target.files[0]),
    // img: event.target.files,
    //   });
    // const img = event.target.files;
    //return img;
    // }
    // const avatarFile = event.target.files;
    // console.log(avatarFile);
    // return avatarFile;
    const fdata = new FormData();
    console.log(img);
    fdata.append("image", img[0]);
    console.log(fdata);
    try {
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
    //this.addAvatar();
    // return fdata;
  };

  onSubmit() {
    console.log("!!!!!");
  }

  onImageUpdate() {}

  onImageRemove() {}

  render() {
    return (
      <div className={classes.Uploader}>
        <input
          type="file"
          nv-file-select=""
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          disabled={this.state.isAvatarAdded}
        />
        <img
          id="target"
          className={classes.Photo}
          src={this.state.image}
          alt={"фото не выбрано"}
        />

        <Button
          type="success"
          onClick={this.addAvatar}
          disabled={!this.state.isAvatarAdded}
        >
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

// import React, { Component } from "react";
// import classes from "./Links.module.css";
// import Button from "../Button/Button";

// class Links extends Component() {
//   render() {
//     return (
//       <div>
//         <p>something</p>
//         <Button></Button>
//       </div>
//     );
//   }
// }
// export default Links;
// const Links = () => {
//   const [links, setLinks] = useState();

//   async function componentDidMount(state) {
//     fetch("/createGame")
//       .then((res) => res.json())
//       .then(console.log("got something"))
//       .then((links) => setLinks({ links }));

//     // .then((links) => this.setState({ links }));
//   }

//   console.log(links);
//   return <div></div>;
// };

// export default Links;

//   {/* {links.map((link) => ( */}
//     <div className={classes.li} key={link.id}>
//       <a href={link.title} className={classes.a}>
//         {" "}
//         {"играть против:  " + link.creator}
//       </a>

//       <Button type="error">&times;</Button>
//     </div>
//   {/* ))} */}
