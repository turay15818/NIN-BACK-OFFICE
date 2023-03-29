import Nin from "../models/NinData.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";



export const getNin = async(req,res) =>{
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
                attributes:[
                'id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                'confirm', 'confirmDate','confirmName'
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
                            'id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                            'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address','confirm'
                            
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

export const ninSearch = async(req,res) =>{
    const {startDate, endDate}=req.body
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
            where:{
                 createdAt: {
                    [Op.between]: [startDate, endDate]
                 }
            },
            order:[
               [ 'createdAt', 'DESC']
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
               [ 'createdAt', 'DESC']
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

export const getNinById = async (req, res) => {
    try {
        const nin = await Nin.findOne({
            where: {
                id: req.params.id
            },
        });
        if (!nin) return res.status(404).json({ msg: "Data Not Found" });
        let response;
        if (req.role === "admin") {
            response = await Nin.findOne({
                attributes: ['id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                'confirm', 'confirmDate','confirmName'],
                where: {
                    id: nin.id
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
                    attributes: ['id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                    'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                    'confirm'],
                    where: {
                        id: nin.id
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

export const ninCreate = async(req, res) =>{
    const{
        confirmnininfo_by_customer, date_created,dateofbirth, fullname,
        gender,id_number ,id_type,nationality, permanent_residential_address,
        confirm, confirmDate, confirmName,
    }=req.body;
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
            confirm:confirm,
            confirmDate:confirmDate,
            confirmName:confirmName,

            userId: req.userId
          })
        }catch(error){
            res.status(500).json({msg:error.message})
        }
}

export const getDataByConfirmed = async(req, res) =>{
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
                attributes:['id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                'confirm', 'confirmDate','confirmName'],
                where:{
                    confirm:"confirmed"
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
                    attributes:['id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                    'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                    'confirm'],
                    where:{
                        confirm:"confirmed"
                       
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

export const getDataByRejected = async(req, res) =>{
    try{
        let response;
        if(req.role ==="admin"){
            response = await Nin.findAll({
                attributes:['id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                'confirm', 'confirmDate','confirmName'],
                where:{
                    confirm:"Rejected"
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
                    attributes:['id', 'confirmnininfo_by_customer', 'date_created', 'dateofbirth', 'fullname', 
                    'gender', 'id_number', 'id_type', 'nationality', 'permanent_residential_address',
                    'confirm'],
                    where:{
                        confirm:"Rejected",
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
        const nin = await Nin.findOne({
            where: {
                id: req.params.id
            }
        });

        if (!nin) return res.status(404).json({ msg: "No Nin Found" });

        const { confirm, confirmDate, confirmName } = req.body;
        if (req.role === "user", "admin") {
            await Nin.update({confirm, confirmDate, confirmName }, {
                where: {
                    id: nin.id
                }
            });
        }

        else {
            if (req.role === "admin", "user") {
                if (req.userId !== nin.userId) return res.status(403).json({ msg: "Access Forbidden" });
                await Nin.update({ confirm, confirmDate, confirmName }, {
                    where: {
                        [Op.and]: [{ id: nin.id }, { userId: req.userId }]
                    }
                });
            }
        }
        res.status(200).json({ msg: "Nin table updated successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

export const getRecountConfirm = async(req,res) =>{
    try{
        const today = new Date(); // Get the current date and time
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0 ); // Set the time to 00:00:00.000
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999); // Set the time to 23:59:59.999
        let response
   if (req.role === "admin") {
      response = await Nin.findAll({
      attributes: [
      "id", "confirmnininfo_by_customer", "date_created","dateofbirth", "fullname","gender","id_number", "id_type",
      "nationality", "permanent_residential_address", "confirm", "confirmDate", "confirmName",
    ],
    where: {
      confirm: "confirmed",
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
        "id", "confirmnininfo_by_customer","date_created","dateofbirth","fullname","gender","id_number","id_type",
         "nationality", "permanent_residential_address", "confirm",
      ],
      where: {
        confirm: "confirmed",
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

export const getRecountReject = async(req,res) =>{
    try{
        const today = new Date(); // Get the current date and time
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0 ); // Set the time to 00:00:00.000
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999); // Set the time to 23:59:59.999
        let response
   if (req.role === "admin") {
      response = await Nin.findAll({
      attributes: [
      "id", "confirmnininfo_by_customer", "date_created","dateofbirth", "fullname","gender","id_number", "id_type",
      "nationality", "permanent_residential_address", "confirm", "confirmDate", "confirmName",
    ],
    where: {
      confirm: "Rejected",
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
        "id", "confirmnininfo_by_customer","date_created","dateofbirth","fullname","gender","id_number","id_type",
         "nationality", "permanent_residential_address", "confirm",
      ],
      where: {
        confirm: "Rejected",
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
      "id", "confirmnininfo_by_customer", "date_created","dateofbirth", "fullname","gender","id_number", "id_type",
      "nationality", "permanent_residential_address", "confirm", "confirmDate", "confirmName",
    ],
    where: {
      confirm: "Pending",
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
        "id", "confirmnininfo_by_customer","date_created","dateofbirth","fullname","gender","id_number","id_type",
         "nationality", "permanent_residential_address", "confirm",
      ],
      where: {
        confirm: "Pending",
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