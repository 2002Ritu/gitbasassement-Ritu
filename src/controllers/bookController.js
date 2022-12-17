
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

let getData= await BookModel.find().select({bookName:1,authorName:1,_id:0})
//.select means-to select the particular thing and 1,0 is binary number 1 ka mtlb hai show krna and 0 ka mtlb hai kch show nhi krna
res.send({msg:getData})
}
const getallYears=async function(req,res){

let getyears=req.query.year

let getselectedyear=await BookModel.find({year:getyears})
res.send({msg:getselectedyear})

}
const allpages= async function(req,res){

let randompages= await BookModel.find({pages:{$gte:100}})
res.send({msg:randompages})

}

const INRRuppe= async function(req,res){

    let IndianRupee= await BookModel.find({indianPrice:{$eq:100||200||500}})
res.send({msg:IndianRupee})

}

const particular=async function(req,res){
let data= req.body
let nameID= await BookModel.find(data)
//in this we send response which user asked for like -name,tag,year 
res.send({msg:nameID})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getallYears=getallYears
module.exports.allpages=allpages
module.exports.INRRuppe=INRRuppe
module.exports.particular=particular