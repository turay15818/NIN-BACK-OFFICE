const { Sequelize } =require ("sequelize");
const mysql =require ('mysql')

const dbb = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Enoch@1345",
    database:"kyc"
})

const db = new Sequelize('kyc', 'root','Enoch@1345', {
    host:"localhost",
    dialect:"mysql"
})

module.exports=db;