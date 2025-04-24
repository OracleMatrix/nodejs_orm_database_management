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
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "posts",
        key: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
      allowNull: false,
    },
  });
  return CommentModel;
};
