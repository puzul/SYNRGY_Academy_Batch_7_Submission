import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Car = db.define('cars', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  image: DataTypes.STRING,
  rentPerDay: DataTypes.INTEGER,
  type: DataTypes.STRING,
}, {
  freezeTableName:true,
})

export default Car;

(async ()=> {
  await db.sync();
})();