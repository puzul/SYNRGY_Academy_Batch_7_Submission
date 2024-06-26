'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cars extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cars.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    type: DataTypes.STRING,
    rentPerDay: DataTypes.INTEGER,
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
    isDeleted: DataTypes.BOOLEAN,
    deletedBy: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cars',
  });
  return Cars;
};