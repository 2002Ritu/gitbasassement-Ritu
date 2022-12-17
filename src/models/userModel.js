const mongoose = require('mongoose');

const bookschema = new mongoose.Schema( {
         bookName: {
        type : String,
        required : true
        },
        authorName: String,
       category: {
            type: String,
           enum:["friction" , "comedy" , "science" , "money"]
        },
        year: Number,
     }, { timestamps: true });
    
     module.exports = mongoose.model('book' , bookschema)


     