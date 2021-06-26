const sql = require("../config/connection");

exports.find = function (data) {
  return new Promise(function (resolve, reject) {
    const page = data.page;
    const limit = data.limit;
    const offset = page * limit;

    query = `SELECT * FROM tb_user LIMIT ${limit} OFFSET ${offset}`;
    console.log(query);
    sql.query(query, (error, result) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
exports.findById = function (data) {
  return new Promise(function (resolve, reject) {
    const user_id = data.id;
    query = `SELECT * FROM tb_user WHERE user_id IN(${user_id})`;
    console.log(query);
    sql.query(query, (error, result) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
exports.findByAdmin = function () {
  return new Promise(function (resolve, reject) {
    query = `SELECT * FROM tb_user GROUP BY admin_id HAVING COUNT(user_id)>=3`;
    sql.query(query, (error, result) => {
      if (error) {
        console.log(error);
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};
