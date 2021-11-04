TicTacToe-21 express server.

This is server for https://github.com/PGVlasov/tictactoe21 app

Setup
To install all the project's dependencies and run the app:
clone this repository

npm install

npm run dev

To run the app you should install express nodemailer nodemailer-sendgrid-transport bcryptjs

Also i cant made folder "keys" public, so you should make it by youself in the root of this app.
the folder must contain 1 file: index.js with the following contents:

module.exports = {
MONGODB_URI:
".....mondoDB",
SESION_SECRET: ".......some text",
SENDGRID_API_KEY:
".......you will get it fron sendgreed.com.........",
EMAIL_FROM: "some email",
BASE_URL: "some base url",
};

npm run dev
