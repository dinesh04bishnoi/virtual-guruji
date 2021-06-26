const userModel = require("../model/userModel");
const dbConfig = require("../config/db");

exports.getUser = function (request, response) {
  let data = {};
  if (typeof request.query.page == "undefined") {
    response
      .status(400)
      .json({
        message: "Couldn't find users:Missing query parameter",
        error: "Page no is required !!",
      });
  }
  data["page"] = request.query.page;
  data["limit"] = request.query.limit ? request.query.limit : dbConfig.limit;
  console.log(data);
  userModel.find(data).then(function (user) {
    response.status(200).json(user);
  });
};
exports.getUserById = function (request, response) {
  let data = {};
  data["id"] = request.params.id;
  userModel.findById(data).then(function (user) {
    response.status(200).json(user);
  });
};
exports.getUserByAdmin = function (request, response) {
  userModel.findByAdmin().then(function (user) {
    response.status(200).json(user);
  });
};
