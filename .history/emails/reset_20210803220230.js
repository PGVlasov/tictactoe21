const keys = require("../keys/index");

module.exports = function (email, token) {
  return {
    to: email,
    from: keys.EMAIL_FROM,
    subject: "восстановление доступа",
    html: `
    <h1>Вы забыли пароль?</h1>

    <p>Если нет, то просто проигнорируйте данное письмо</p>
    <p>Иначе нажмите на ссылку ниже: </p>
    <p> <a href ="${keys.BASE_URL}/newPassword/?${token}">Восстановление доступа</a> </p>
    <hr />
    <a href = "${keys.BASE_URL}">Крестики - Нолики Он-лайн</a>
    <hr />
    <p>Пожалуйста не отвечайте на это письмо</p>
    `,
  };
};
