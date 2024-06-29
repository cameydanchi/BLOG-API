import { Schema, model } from "mongoose";


// creating a schema for my database
const blogSchema = new Schema({
    title: {type: String, unique:true},
      author:{type:String },
      description:{type:String},
     isPublish: {type:String},
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