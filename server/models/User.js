const { Model, DataTypes, INTEGER } = require("sequelize");
const sequelize = require("../config/connection");
// Need to add package for session tokens
// const bcrypt = require("bcrypt");

class User extends Model {
  validateToken(userToken) {
    if (this.login_token !== userToken) return false;
    // check the timestampt
    // if(this.updated_at.isBetween())
    return true;
  }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    user_group: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
        isInt: true,
      },
    },
    cadence: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 4,
        isInt: true,
      },
    },
    in_next_round: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    login_token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
