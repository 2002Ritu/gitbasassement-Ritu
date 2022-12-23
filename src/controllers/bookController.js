const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisher")

const createBook = async function (req,res){
    let data = req.body
    let {author_id , publisher} = data
    if(!author_id){
        return res.send ({msg : "Author id is not present."})}

    if(!publisher){
        return res.send ({msg : "Publisher id is not present."})}


        let bookCreated = await bookModel.create(data)
        res.send({data: bookCreated})
    
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorAndpublisherDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('publisher')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorAndpublisherDetails=getBooksWithAuthorAndpublisherDetails
