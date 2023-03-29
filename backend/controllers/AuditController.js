import AuditTrail from "../models/AuditTrails.js";
import User from "../models/UserModel.js";
import { Op } from "sequelize";


export const getAuditTrail = async(req,res) =>{
    try{
      let response;
      if(req.role ==="admin"){
        response = await AuditTrail.findAll({
            attributes:["id", "actor", "action", "performedDate"],
            order: [["createdAt", "DESC"]],
            include: [
              {
                model: User,
                attributes: [ "id","userUid","userIDD", "userName", "userPhone","userEmail", "role"],
              },
            ],
        })
      }
      else{
        if(req.role ==="user"){
            response = await AuditTrail.findAll({
                attributes:["id", "actor", "action", "performedDate"],
                order: [
                    ['createdAt', 'DESC'],
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

export const getAuditPerDay = async(req,res) =>{
    try{
        const today = new Date(); // Get the current date and time
        const startOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0, 0 ); // Set the time to 00:00:00.000
        const endOfDay = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59, 999); // Set the time to 23:59:59.999
        let response
   if (req.role === "admin") {
      response = await AuditTrail.findAll({
        attributes:["id", "actor", "action", "performedDate"],
    where: {
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
       response = await AuditTrail.findAll({
        attributes:["id", "actor", "action", "performedDate"],
      where: {
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

export const getAuditTrailById = async(req,res) =>{
   try{
    const auditTrail = await AuditTrail.findOne({
        where:{
            id:req.params.id
        }
    })
    if(!auditTrail) return res.status(404).json({msg:"Data Not Found"})
    let response;
    if(req.role ==="admin"){
        response = await AuditTrail.findOne({
            attributes:["id", "actor", "action", "performedDate"],
            where:{
                id:auditTrail.id
            },
            order: [
                ['createdAt', 'DESC'],
            ],
            include: [{
                model: User,
                attributes: ['id', 'userUid', "userIDD", "userName", "userPhone", "userEmail", "role"]
            }]
        })
    }
    else{
        if(req.role ==="user"){
            response = await AuditTrail.findOne({
                attributes:["id", "actor", "action", "performedDate"],
                where:{
                    id:auditTrail.id
                },
                order: [
                    ['createdAt', 'DESC'],
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
    res.status(500).json({ msg: error.message });
   }
}

export const createAuditTrail = async(req,res) =>{
    const{actor, action, performedDate}=req.body
    try{
        await AuditTrail.create({
            actor:actor,
            action:action,
            performedDate:performedDate,

            userId: req.userId
        })
        res.status(200).json({msg:"Request Created Successfully"})
    }catch(error){
        res.status(404).json({msg:error.message})
    }
}