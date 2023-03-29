import { Sequelize } from "sequelize";
import User from "./UserModel.js";
import db from "../config/Database.js";

const {DataTypes} = Sequelize


const AuditTrail = db.define('auditTrail', {
    id:{
        type:DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    actor:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }

    },
    action:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }

    },
    performedDate:{
        type: DataTypes.STRING,
        allowNull:false,

    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName:true
})
User.hasMany(AuditTrail);
AuditTrail.belongsTo(User, { foreignKey: 'userId' });
export default AuditTrail;