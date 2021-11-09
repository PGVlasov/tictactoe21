const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const addUserRouter = require("./routes/addUser");
const editUserRouter = require("./routes/editUsers");
const authRouter = require("./routes/auth");
const logoutRouter = require("./routes/logout");
const avatarRouter = require("./routes/avatar");
const createGameRouter = require("./routes/createGame");
const varMiddleware = require("./middleware/variables");
const filemiddeware = require("./middleware/file");
const keys = require("./keys/index");

const app = express();
const bodyParser = require("body-parser");
const WSserver = require("express-ws")(app);

const store = new MongoStore({
  collection: "sessions",
  uri: keys.MONGODB_URI,
});

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: keys.SESION_SECRET,
    resave: false,
    saveUninitialized: false,
    store,
  })
);
app.use(filemiddeware.single("image"));
app.use(varMiddleware);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use("/", indexRouter);
app.use("/createGame", createGameRouter);
app.use("/users", usersRouter);
app.use("/editUsers", editUserRouter);
app.use("/auth", authRouter);
app.use("/addUser", addUserRouter);
app.use("/logout", logoutRouter);
app.use("/avatar", avatarRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
