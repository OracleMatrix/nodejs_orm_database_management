module.exports = (sequelize, DataTypes) => {
  const LikesModel = sequelize.define("likes", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "posts",
        key: "id",
      },
    },
  });
  return LikesModel;
};
