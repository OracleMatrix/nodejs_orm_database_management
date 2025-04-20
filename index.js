const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const helmet = require("helmet");
app.use(morgan("dev"));
app.use(express.json());
app.use(helmet());
const port = process.env.PORT || 3000;

const usersRoute = require("./routes/users-route");
app.use("/api/users", usersRoute);

const commentsRoute = require("./routes/comments-route");
app.use("/api/comments", commentsRoute);

const postsRoute = require("./routes/posts-route");
app.use("/api/posts", postsRoute);

const likesRoute = require("./routes/likes-route");
app.use("/api/likes", likesRoute);

app.get("/", (req, res) => res.send("Hello World!"));

const db = require("./models");
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

db.sequelize
  .sync()
  .then((req) => {
    console.log("Database connected...");
    app.listen(port, () => console.log(`Server listening on port ${port}`));
  })
  .catch((err) => {
    console.log("Error connecting to database: ", err);
  });
