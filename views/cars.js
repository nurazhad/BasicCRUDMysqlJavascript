import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Cars = db.define(
    "cars",{
    name: {
        type: DataTypes.STRING,
    },
    price: {
        type: DataTypes.DOUBLE,
    },
    size: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.DOUBLE,
    },
},{
    freezeTableName: true,
});

export default Cars;
