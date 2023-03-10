import Nin from "../models/NinData.js";
import User from "../models/UserModel.js";



export const getNin = async(req,res) =>{
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
                attributes:[
                'id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address'
            ],
            order:[
               [ 'createdAt', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['id', 'userUid', "userID", "userName", "userPhone", "userEmail", "role"]
            }]
               
          
            })
        }
        else{
            if(req.role === 'user'){
               
               response = await Nin.findAll({
                        attributes:[
                            'id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                            'gender', 'id_number', 'id_type', 'nationality', ' permanent_residential_address'
                        ],
                        order:[
                           [ 'createdAt', 'DESC']
                        ],
                        include: [{
                            model: User,
                            attributes: ['id', 'userUid', "userID", "userName", "userPhone", "userEmail", "role"]
                        }]
                           
                 })
               
            }
        }
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
    
}

export const ninCreate = async(req, res) =>{
    const{
        confirmnininfo_by_customer, date_created,dateofbirth, fullname,
        gender,id_number ,id_type,nationality, permanent_residential_address}=req.body;
        try{
           await Nin.create({
            confirmnininfo_by_customer:confirmnininfo_by_customer,
            date_created:date_created,
            dateofbirth:dateofbirth,
            fullname:fullname,
            gender:gender,
            id_number:id_number,
            id_type:id_type,
            nationality:nationality,
            permanent_residential_address:permanent_residential_address,

            userId: req.userId
          })
        }catch(error){
            res.status(500).json({msg:error.message})
        }
}