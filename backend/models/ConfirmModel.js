import { Sequelize } from "sequelize";
import db from '../config/Database.js'
import User from "./UserModel.js";
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
export default Confirm;