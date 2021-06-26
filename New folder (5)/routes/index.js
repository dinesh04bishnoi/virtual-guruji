var express = require("express");
var router = express.Router();
var userController = require("../controllers/userController");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
router.get("/getUser", userController.getUser);
router.get("/getUserById/:id", userController.getUserById);
router.get("/getUserByAdmin", userController.getUserByAdmin);

module.exports = router;
