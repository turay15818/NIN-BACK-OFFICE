import Nin from "../models/NinData.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";


//to get all the data from the data base both the admin and kyc staff
export const getNCRANinData = async(req,res) =>{
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
                attributes:[
                'id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                'confirm_status', 'confirmDate','confirmBy_kyc',"revisedReason"
            ],
            order:[
               [ 'createdAt', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
            }]
               
          
            })
        }
        else{
            if(req.role === 'user'){
               
               response = await Nin.findAll({
                        attributes:[
                            'id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
                            'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address','confirm_status',"revisedReason"
                            
                        ],
                        order:[
                           [ 'createdAt', 'DESC']
                        ],
                        include: [{
                            model: User,
                            attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
                        }]
                           
                 })
               
            }
        }
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
    
}

//this is to search for specific days, day, and time and give report 
export const ninSearch = async(req,res) =>{
    const {startDate, endDate}=req.body
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
            where:{
              updatedAt: {
                    [Op.between]: [startDate, endDate]
                 }
            },
            order:[
               [ 'updatedAt', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
            }]
               
          
            })
        }
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
    
}

//this is to search NIN NCRA  for specific days, day, and time and give report 
export const ninSearchh = async(req,res) =>{
    const {userId}=req.body
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
            where:{
                id_number: userId
            },
            order:[
               [ 'updatedAt', 'DESC']
            ],
            include: [{
                model: User,
                attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
            }]
               
          
            })
        }
        res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
    
}

//Get individual user
export const getNinById = async (req, res) => {
    try {
        const ncra_nin_data = await Nin.findOne({
            where: {
                id: req.params.id
            },
        });
        if (!ncra_nin_data) return res.status(404).json({ msg: "Data Not Found" });
        let response;
        if (req.role === "admin") {
            response = await Nin.findOne({
                attributes: ['id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                'confirm_status', 'confirmDate','confirmBy_kyc',"revisedReason"],
                where: {
                    id: ncra_nin_data.id
                },
                order: [
                    ['createdAt', 'DESC'],
                ],
                include: [{
                    model: User,
                    attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
                }]
            });
        }
    
        else {
            if (req.role === "user") {
                response = await Nin.findOne({
                    attributes: ['id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
                    'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                    'confirm_status', "revisedReason"],
                    where: {
                        id: ncra_nin_data.id
                    },
                    order: [
                        ['createdAt', 'DESC'],
                    ],
                    include: [{
                        model: User,
                        attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
                    }]
                });
            }
        }
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

//create temporal data for ncra nin
export const ninCreate = async(req, res) =>{
    const{
       confirm_by_subscriber, date_created, dateofbirth, fullname ,
      gender, id_number, id_type, nationality,  permanent_residential_address,
      confirm_status, confirmDate,confirmBy_kyc, revisedReason
    }=req.body;
        try{
           await Nin.create({
            confirm_by_subscriber:confirm_by_subscriber,
            date_created:date_created,
            dateofbirth:dateofbirth,
            fullname:fullname,
            gender:gender,
            id_number:id_number,
            id_type:id_type,
            nationality:nationality,
            permanent_residential_address:permanent_residential_address,
            confirm_status:confirm_status,
            confirmDate:confirmDate,
            confirmBy_kyc:confirmBy_kyc,
            revisedReason:revisedReason,

            userId: req.userId
          })
        }catch(error){
            res.status(500).json({msg:error.message})
        }
}

//get all confirmed data
export const getDataByConfirmed = async(req, res) =>{
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
                attributes:['id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                'confirm_status', 'confirmDate','confirmBy_kyc'],
                where:{
                    confirm_status:"confirmed"
                },
                order:[
                    ['createdAt','DESC']
                ],
                include: [{
                    model: User,
                    attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
                }]
            })
           
        }
        else{
            if(req.role === "user"){
                response = await Nin.findAll({
                    attributes:['id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
                    'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                    'confirm_status'],
                    where:{
                        confirm_status:"confirmed"
                       
                    },
                    order:[
                        ['createdAt','DESC']
                    ],
                    include: [{
                        model: User,
                        attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
                    }]
                })
               
            }
        }
        res.status(200).json(response)
    }catch(error){
       res.status(500).json({msg:error.message})
    }
}

//get all rejected data
export const getDataByRejected = async(req, res) =>{
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
                attributes:['id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                'confirm_status', 'confirmDate','confirmBy_kyc',"revisedReason"],
                where:{
                    confirm_status:"Rejected"
                },
                order:[
                    ["createdAt",'DESC']
                ],
                include: [{
                    model: User,
                    attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
                }]
            })
           
        }
        else{
            if(req.role === "user"){
                response = await Nin.findAll({
                    attributes:['id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
                    'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                    'confirm_status'],
                    where:{
                        confirm_status:"Rejected",
                    },
                    order:[
                        ['createdAt','DESC']
                    ],
                    include: [{
                        model: User,
                        attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
                    }]
                })
               
            }
        }
        res.status(200).json(response)
    }catch(error){
       res.status(500).json({msg:error.message})
    }
}

export const updateNin = async (req, res) => {
    try {
        const ncra_nin_data = await Nin.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!ncra_nin_data) return res.status(404).json({ msg: "No Nin Found" });

        const { confirm_status, confirmDate, confirmBy_kyc,revisedReason } = req.body;
        if (req.role === "user", "admin") {
            await Nin.update({confirmBy_kyc, confirmDate, confirm_status,revisedReason }, {
                where: {
                    id: ncra_nin_data.id
                }
            });
        }

        else {
            if (req.role === "admin", "user") {
                if (req.userId !== ncra_nin_data.userId) return res.status(403).json({ msg: "Access Forbidden" });
                await Nin.update({ confirm,confirmBy_kyc, confirmDate, confirm_status,revisedReason }, {
                    where: {
                        [Op.and]: [{ id: ncra_nin_data.id }, { userId: req.userId }]
                    }
                });
            }
        }
        res.status(200).json({ msg: "Nin table updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

//chart for just a day confirmed ncra nin data
export const getRecountConfirm = async(req,res) =>{
    try{
        const today = new Date(); // Get the current date and time
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0 ); // Set the time to 00:00:00.000
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999); // Set the time to 23:59:59.999
        let response
   if (req.role === "admin") {
      response = await Nin.findAll({
      attributes: [
        'id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
        'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
        'confirm_status', 'confirmDate','confirmBy_kyc',"revisedReason",
    ],
    where: {
      confirm_status: "confirmed",
      updatedAt: {
        [Op.between]: [startOfDay, endOfDay],
      },
    },
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: [ "id", "userUid", "userIDD", "userName", "userPhone", "userEmail", "role", ],
      },
     ],
    });
    } else {
       if (req.role === "user") {
       response = await Nin.findAll({
      attributes: [
        "id", "confirm_by_subscriber","date_created","dateofbirth","fullname","gender","id_number","id_type",
         "nationality", "permanent_residential_address", "confirm_status",
      ],
      where: {
        confirm_status: "confirmed",
        updatedAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: [
            "id", "userUid", "userIDD", "userName", "userPhone", "userEmail", "role",
          ],
        },
      ],
    });
  }
}
    
res.status(200).json(response)
}catch(error){
    res.status(500).json({msg:error.message})
}
}

// chart for just a day rejected ncra nin data
export const getRecountReject = async(req,res) =>{
    try{
        const today = new Date(); // Get the current date and time
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0 ); // Set the time to 00:00:00.000
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999); // Set the time to 23:59:59.999
        let response
   if (req.role === "admin") {
      response = await Nin.findAll({
      attributes: [
        'id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
        'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
        'confirm_status', 'confirmDate','confirmBy_kyc',"revisedReason"
    ],
    where: {
      confirm_status: "Rejected",
      updatedAt: {
        [Op.between]: [startOfDay, endOfDay],
      },
    },
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: [ "id", "userUid", "userIDD", "userName", "userPhone", "userEmail", "role", ],
      },
     ],
    });
    } else {
       if (req.role === "user") {
       response = await Nin.findAll({
      attributes: [
        "id", "confirm_by_subscriber","date_created","dateofbirth","fullname","gender","id_number","id_type",
         "nationality", "permanent_residential_address", "confirm_status","revisedReason"
      ],
      where: {
        confirm_status: "Rejected",
        updatedAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: [
            "id", "userUid", "userIDD", "userName", "userPhone", "userEmail", "role",
          ],
        },
      ],
    });
  }
}
    
res.status(200).json(response)
}catch(error){
    res.status(500).json({msg:error.message})
}
}

export const getRecountPending = async(req,res) =>{
    try{
        const today = new Date(); // Get the current date and time
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0 ); // Set the time to 00:00:00.000
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999); // Set the time to 23:59:59.999
        let response
   if (req.role === "admin") {
      response = await Nin.findAll({
      attributes: [
        'id', 'confirm_by_subscriber', 'date_created', 'dateofbirth', 'fullname', 
        'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
        'confirm_status', 'confirmDate','confirmBy_kyc',"revisedReason"
    ],
    where: {
      confirm_status: "Pending",
      updatedAt: {
        [Op.between]: [startOfDay, endOfDay],
      },
    },
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: [ "id", "userUid", "userIDD", "userName", "userPhone", "userEmail", "role", ],
      },
     ],
    });
    } else {
       if (req.role === "user") {
       response = await Nin.findAll({
      attributes: [
        "id", "confirm_by_subscriber","date_created","dateofbirth","fullname","gender","id_number","id_type",
         "nationality", "permanent_residential_address", "confirm_status","revisedReason"
      ],
      where: {
        confirm_status: "Pending",
        updatedAt: {
          [Op.between]: [startOfDay, endOfDay],
        },
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: [
            "id", "userUid", "userIDD", "userName", "userPhone", "userEmail", "role",
          ],
        },
      ],
    });
  }
}
    
res.status(200).json(response)
}catch(error){
    res.status(500).json({msg:error.message})
}
}


//chart for just a day pending ncra nin data
export const getCountOneHour = async(req,res) =>{
    try{
        const now = new Date(); // Get the current date and time
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000); // Set the time to one hour ago
      let response
      

if (req.role === "admin") {
  response = await Nin.findAll({
    attributes: [
      "id",
      "confirmnininfo_by_customer",
      "date_created",
      "dateofbirth",
      "fullname",
      "gender",
      "id_number",
      "id_type",
      "nationality",
      "permanent_residential_address",
      "confirm",
      "confirmDate",
      "confirmName",
    ],
    where: {
      confirm: "confirmed",
      updatedAt: {
        [Op.between]: [oneHourAgo, now],
      },
    },
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: [
          "id",
          "userUid",
          "userIDD",
          "userName",
          "userPhone",
          "userEmail",
          "role",
        ],
      },
    ],
  });
} else {
  if (req.role === "user") {
    response = await Nin.findAll({
      attributes: [
        "id",
        "confirmnininfo_by_customer",
        "date_created",
        "dateofbirth",
        "fullname",
        "gender",
        "id_number",
        "id_type",
        "nationality",
        "permanent_residential_address",
        "confirm",
      ],
      where: {
        confirm: "confirmed",
        updatedAt: {
          [Op.between]: [oneHourAgo, now],
        },
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: [
            "id",
            "userUid",
            "userIDD",
            "userName",
            "userPhone",
            "userEmail",
            "role",
          ],
        },
      ],
    });
  }
}
  res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}

export const getCounttOneHour = async(req,res) =>{
    try{
        const now = new Date(); // Get the current date and time
      const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000) // Set the time to one hour ago
      let response

    if (req.role === "admin") {
    response = await Nin.findAll({
    attributes: [
      "id",
      "confirmnininfo_by_customer",
      "date_created",
      "dateofbirth",
      "fullname",
      "gender",
      "id_number",
      "id_type",
      "nationality",
      "permanent_residential_address",
      "confirm",
      "confirmDate",
      "confirmName",
    ],
    where: {
      confirm: "Rejected",
      updatedAt: {
        [Op.between]: [oneHourAgo, now],
      },
    },
    order: [["createdAt", "DESC"]],
    include: [
      {
        model: User,
        attributes: [
          "id",
          "userUid",
          "userIDD",
          "userName",
          "userPhone",
          "userEmail",
          "role",
        ],
      },
    ],
  });
} else {
  if (req.role === "user") {
    response = await Nin.findAll({
      attributes: [
        "id",
        "confirmnininfo_by_customer",
        "date_created",
        "dateofbirth",
        "fullname",
        "gender",
        "id_number",
        "id_type",
        "nationality",
        "permanent_residential_address",
        "confirm",
      ],
      where: {
        confirm: "Rejected",
        updatedAt: {
          [Op.between]: [oneHourAgo, now],
        },
      },
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: User,
          attributes: [
            "id",
            "userUid",
            "userIDD",
            "userName",
            "userPhone",
            "userEmail",
            "role",
          ],
        },
      ],
    });
  }
}
  res.status(200).json(response)
    }catch(error){
        res.status(500).json({msg:error.message})
    }
}