import { Sequelize } from "sequelize";
import db from '../config/Database.js'
import Users from "./UserModel.js";
const {DataTypes} = Sequelize;

const Nin = db.define('ncra_nin_data',  {
    id:{
        type: DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        validate:{
            notEmpty:true,
        },
    },
    confirm_by_subscriber:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
           
        },
    },
    date_created:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            
        },
    },
    dateofbirth:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        },
    },
    fullname:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
           
        },
    },
    gender:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
           
        },
    },
    id_number:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
           
        },
    },
    id_type:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
           
        },
    },
    nationality:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
           
        },
    },
    permanent_residential_address:{
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
        },
    },
    confirm_status:{
        type: DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:false,
        },
    },
    confirmBy_kyc:{
        type: DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:false,
        },
    },
   confirmDate:{
        type: DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:false,
        },
    },
    revisedReason:{
        type: DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:false,
        },
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    }
},{
    freezeTableName: true
})
Users.hasMany(Nin);
Nin.belongsTo(Users, { foreignKey: 'userId' });
export default Nin;