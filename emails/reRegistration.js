const keys = require("../keys/index");

module.exports = function (email) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: "Аккаунт занят",
    html: `
    <h1>Добрый день<h1>

    <p>Пользователь с email - ${email} уже был создан</p>
    Просто восстановите пароль
    <hr />
    <a href = "${keys.BASE_URL}/auth">Крестики - Нолики Он-лайн</a>
    <hr />
    <p>Пожалуйста не отвечайте на это письмо</p>
    `,
  };
};
