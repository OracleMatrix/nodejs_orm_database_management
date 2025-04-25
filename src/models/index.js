"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// ارتباط کاربر با پست‌ها
db.users.hasMany(db.posts, {
  foreignKey: "userId",
});

db.posts.belongsTo(db.users, {
  foreignKey: "userId",
});

// ارتباط کاربر با کامنت‌ها
db.users.hasMany(db.comments, {
  foreignKey: "userId",
});
db.comments.belongsTo(db.users, {
  foreignKey: "userId",
});

// ارتباط پست با کامنت‌ها
db.posts.hasMany(db.comments, {
  foreignKey: "postId",
});
db.comments.belongsTo(db.posts, {
  foreignKey: "postId",
});

// ارتباط کاربر با لایک‌ها
db.users.hasMany(db.likes, {
  foreignKey: "userId",
});

db.likes.belongsTo(db.users, {
  foreignKey: "userId",
});
// ارتباط پست با لایک‌ها
db.posts.hasMany(db.likes, {
  foreignKey: "postId",
});
db.likes.belongsTo(db.posts, {
  foreignKey: "postId",
});

module.exports = db;
