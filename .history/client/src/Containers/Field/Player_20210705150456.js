import React, { Component } from "react";
import Button from "../../components/UI/Button/Button.js";
import Input from "../../components/UI/Input/Input.js";
import classes from "./Player.module.css";
import Auxillary from "../../hoc/Auxillary/Auxillary.js";
import Select from "../../components/UI/Select/Select.js";
import axios from "axios";
import {
  createControl,
  validate,
  validateForm,
} from "../../form/formFramework";
import photo from "../../images/photo.jpeg";
import { range } from "lodash";
import { number } from "is_js";

function createFormControls() {
  return {
    name: createControl(
      {
        label: "Введите имя",
        errorMessage: "Имя не может быть пустым",
      },
      { required: true }
    ),
    age: createControl(
      {
        label: "Введите возраст",
        type: number,
        errorMessage: "Возраст не может быть пустым",
        validation: { age: true },
      },
      { required: true }
      //   {
      //     validation: {
      //       required: true,
      //       age: true,
      //     },
      //   }
    ),
    adress: createControl(
      {
        label: "Введите адрес",
        errorMessage: "Адрес не может быть пустым",
      },
      { required: true }
    ),
  };
}

export default class Players extends Component {
  state = {
    users: [], // server test
    player: [],
    gender: "",
    editButtomClicked: false,
    isFormValid: false,
    formControls: createFormControls(),
  };

  editUser = (event) => {
    event.preventDefault();
    console.log("you can edit your profile");
    this.setState({
      editButtomClicked: true,
    });
  };

  canсelEditUser = (event) => {
    event.preventDefault();
    const player = this.state.player.concat();
    this.setState({
      player,
      isFormValid: false,
      formControls: createFormControls(),
      editButtomClicked: false,
    });
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addAvatar = () => {};
  showRange = () => {
    let range = 2;
    return range;
  };
  saveUser = (event) => {
    event.preventDefault();
    const player = this.state.player.concat();
    const index = player.length + 1;

    const { name, age, adress } = this.state.formControls;

    let playerItem = {
      name: name.value,
      id: index,
      age: age.value,
      adress: adress.value,
    };

    player.push(playerItem);
    console.log(player);

    // axios.post(
    //   "mongodb+srv://PGVlasov:S5rQ9tjIDIckCBWi@cluster0.eetmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    //   player
    // );
    this.setState({
      player,
      isFormValid: false,
      formControls: createFormControls(),
      editButtomClicked: false,
    });
  };
  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;
    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  selectChangeHeandler = (event) => {
    this.setState({
      gender: event.target.value,
    });
  };

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((users) => this.setState({ users }));
  }

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Auxillary key={controlName + index}>
          <Input
            label={control.label}
            type={control.type}
            value={control.value}
            valid={control.valid}
            touched={control.touched}
            shouldValidate={!!control.validation}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
        </Auxillary>
      );
    });
  }

  //   componentDidMount() {
  //     axios
  //       .get(
  //         "mongodb+srv://PGVlasov:S5rQ9tjIDIckCBWi@cluster0.eetmb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  //       )
  //       .then((response) => console.log(response));
  //{ }
  //   }

  render() {
    const select = (
      <Select
        label="Выберите свой пол"
        value={this.state.gender}
        onChange={this.selectChangeHeandler}
        options={[{ text: "мужчина" }, { text: "женщина" }]}
      />
    );
    console.log(this.state.editButtomClicked);
    if (this.state.editButtomClicked) {
      return (
        <div className={classes.Player}>
          <h1>Профиль</h1>
          <div className={classes.PlayerPhoto}>
            <img className="avatar" src={photo} alt="Аватара нет"></img>
          </div>
          <Button type="success" onClick={this.addAvatar}>
            Добавить фотографию
          </Button>
          <div className={classes.PlayerForm}>
            <h3>Игрок</h3>
            {/* <p>Рейтинг (количество побед): {this.showRange(range)}</p>
            <p>
              Email: <strong>{"user.email"}</strong>
            </p>

            <p>
              Имя: <strong>{`user.name`}</strong>
            </p>
            <p>
              Ваше возраст: <strong>{`user.age`}</strong>
            </p>
            <p>
              Пол: <strong>{`user.sex`}</strong>
            </p>
            <p>
              Город: <strong>{`user.adress`}</strong>
            </p> */}
                    {this.state.users.map(user =>
          <div key={user.id}> 
          {<p>Рейтинг (количество побед): {user.range/* this.showRange(range)}</p> */}
            <p>
              Email: <strong>{user.email}</strong>
            </p>

            <p>
              Имя: <strong>{user.name}</strong>
            </p>
            <p>
              Ваше возраст: <strong>{user.age}</strong>
            </p>
            <p>
              Пол: <strong>{user.sex}</strong>
            </p>
            <p>
              Город: <strong>{user.adress}</strong>
            </p>
          </div>
</div>
        )
            <hr />
            <div className={classes.editPlayer}>
              <form onSubmit={this.submitHandler}></form>
              <div>
                <form disabled={!this.state.editButtomClicked}>
                  <Button type="primary" onClick={this.canсelEditUser}>
                    Закрыть без изменений
                  </Button>
                  {this.renderControls()}
                  <p>{select}</p>
                  <Button
                    type="success"
                    onClick={this.saveUser}
                    disabled={!this.state.isFormValid}
                  >
                    Сохранить профиль
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className={classes.Player}>
          <h1>Профиль</h1>
          <div className={classes.PlayerPhoto}>
            <img className={classes.avatar} src={photo} alt="Аватара нет"></img>
            <Button type="success" onClick={this.addAvatar}>
              Добавить фотографию
            </Button>
          </div>

          <div className={classes.PlayerForm}>
            <h3>Игрок</h3>
            <p>Рейтинг (количество побед): {this.showRange(range)}</p>
            <p>
              Email: <strong>{"user.email"}</strong>
            </p>

            <p>
              Имя: <strong>{`user.name`}</strong>
            </p>
            <p>
              Ваше возраст: <strong>{`user.age`}</strong>
            </p>
            <p>
              Пол: <strong>{`user.sex`}</strong>
            </p>
            <p>
              Город: <strong>{`user.adress`}</strong>
            </p>
            <hr />
            <div className={classes.editPlayer}>
              <form onSubmit={this.submitHandler}>
                <Button type="primary" onClick={this.editUser}>
                  Редактировать профиль
                </Button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}
