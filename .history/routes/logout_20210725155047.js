const { Router } = require("express");
const session = require("express-session");
const router = Router();

router.get("/", async (req, res, next) => {
  res.session.distroy();
});
