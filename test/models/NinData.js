const { Sequelize } =require ("sequelize");
const db =require ('../config/Database.js')
const User =require ("./UserModel.js");
const {DataTypes} = Sequelize;

const Nin = db.define('nin',  {
    id:{
        type: DataTypes.BIGINT,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        validate:{
            notEmpty:true,
        },
    },
    confirmnininfo_by_customer:{
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
    confirm:{
        type: DataTypes.STRING,
        allowNull:true,
        validate:{
            notEmpty:false,
        },
    },
    confirmName:{
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
User.hasMany(Nin);
Nin.belongsTo(User, { foreignKey: 'userId' });

module.exports= Nin;