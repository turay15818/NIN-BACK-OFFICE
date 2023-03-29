const { Sequelize } =require ("sequelize");
const db =require ('../config/Database.js')
const User =require ("./UserModel.js");
const {DataTypes} = Sequelize;

const Confirm = db.define('confirm',  {
    id:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty:true
        },
    },
    confirmName:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len: [8, 100]
        },
    },
    confirmDate:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            
        },
    },
},{
    freezeTableName: true
})

User.hasMany(Confirm);
Confirm.belongsTo(User,{foreignKey: 'userId'});

module.exports= Confirm;