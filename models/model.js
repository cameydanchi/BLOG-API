import { Schema, model } from "mongoose";


// creating a schema for my database
const blogSchema = new Schema({
    title: {type: String, unique:true},
      author:{type:String },
      description:{type:String},
     isPublished:{
       type:String,
      enum:['true','false']
     },
      createdAt: {
        type: Date, default: Date.now},
      updatedAt: { type: Date,default: Date.now},
      category: { 
        type:String,
      enum:['horror','action']
    },
});


// exporting schema

export const BlogModel = model('blog',blogSchema)