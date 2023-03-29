const { Sequelize } =require ("sequelize");
const db =require ('../config/Database.js')
const {DataTypes} = Sequelize;

const User = db.define('users',  {
    userUid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty:true
        },
    },
    userIDD:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        },
    },
    userName:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len: [8, 100]
        },
    },
    userPhone:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            
        },
    },
    userEmail:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        },
    },
    userPassword:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
           
        },
    },
    role:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        },
    },
    token: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            notEmpty: false
        }
    },
    resetPasswordToken: {
        type: DataTypes.TEXT,
    },
    resetPasswordExpires: {
        type: DataTypes.TEXT,
    },  
},{
    freezeTableName: true
})

module.exports= User;