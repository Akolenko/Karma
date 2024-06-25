'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Response}) {
      this.belongsTo(Response, {foreignKey: 'id'})
      this.belongsTo(User, {foreignKey: 'user_id'})
      // define association here
    }
  }
  Message.init({
    room_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    text_message: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};