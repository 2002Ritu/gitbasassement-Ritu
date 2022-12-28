const jwt =require('jsonwebtoken')
const userModel= require("../models/userModel")

     let valid = async function(req,res,next){
    
        let header= req.headers["auth-token"]
    
        if(!header) return res.send({status:false,msg:"token must be present"})
    
        let decode = jwt.verify(header,"tony-stark")
    
       if(!decode) return res.send({status:false,msg:"invalid token"})
    
       next()
}


const authorise =async function(req, res, next) {

    
    let token= req.headers["auth-token"]
    
    if(!token) return res.send({status:false,msg:"token must be present"})

    
    let decode = jwt.verify(token,"tony-stark")
    console.log(decode)
    if(!decode) return res.send({status:false,msg:"invalid token"})
     

    let userId = req.params.userId

    let checkUser= await userModel.findById(userId)
    if(!checkUser) return res.status(404).send({status:false,msg:"userId is not valid"})

     let check = userId
     let access =decode.userId
     if(check != access) return res.status(403).send({status:false,msg:"you cant see another person data"})
    next()
}


module.exports.valid= valid

module.exports.authorise=authorise

