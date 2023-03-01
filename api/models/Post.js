var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
        title:{
            type:String,
            required:true,
            unique:true
        },
        desc:{
            type:String,
            required:true
        },
        photo :{
            type:String,
            required:false,
        },
        usename:{
            type:String,
            required:true,
        },
        categories:{
            type:Array,
            required:false,
        },
    },
    {timestamps:true}
);

module.exports  = mongoose.model('Post', PostSchema);