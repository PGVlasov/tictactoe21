import { Component, React } from "react";
import classes from "./Training.module.css";

export default class Training extends Component {
  showVideo = () => {
    console.log("videoCliced");
  };

  //   onError = () => {
  //     return <p>Извинте, видео недоступно</p>;
  //   };

  render() {
    return (
      <div className={classes.Training}>
        <h1>Обучающие видео</h1>
        <div>
          <div className={classes.video} onClick={this.showVideo}>
            <h4>Video 1</h4>
            <p>Крестики-нолики 10 на 10</p>
            <div className={classes.overlay}>
              <iframe
                src="https://www.youtube.com/embed/dnXMr9gQHL8"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
                onClick={this.showVideo}
              />
            </div>
          </div>
          <div className={classes.video} onClick={this.showVideo}>
            <h4>Video 2</h4>
            <p>Как всегда выигрывать на поле 3*3</p>
            <div className={classes.overlay}>
              <iframe
                src="https://www.youtube.com/embed/HM0BkVhzjsc"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
          </div>
          <div className={classes.video} onClick={this.showVideo}>
            <h4>Video 3</h4>
            <p>Крестики-нолики 10 на 10</p>
            <div className={classes.overlay}>
              <iframe
                src="https://www.youtube.com/embed/WUw0KhgpXYg"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
