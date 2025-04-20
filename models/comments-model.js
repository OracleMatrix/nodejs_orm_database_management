module.exports = (sequelize, DataTypes) => {
  const CommentModel = sequelize.define("comments", {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "posts",
        key: "id",
      },
      allowNull: false,
    },
  });
  return CommentModel;
};
