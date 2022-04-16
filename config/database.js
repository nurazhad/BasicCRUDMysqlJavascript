import { Sequelize } from "sequelize";

const db = new Sequelize('db_challenge5', 'root', 'mysql', {
    host : 'localhost',
    dialect : 'mysql'
})

export default db