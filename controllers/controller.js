import { BlogModel } from "../models/model.js";




//  storing data in database
export const addBlogs = async (req, res) => {
    try {
      const addBlog = await BlogModel.create(req.body);
      res.status(201).json(addBlog);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: 'Error creating blog post' }); 
    }
  };
 // getting data
  export const getBlogs = async (req,res) => {
    try {
        const getBlog = await BlogModel.find();
        res.status(201).json(getBlog);
    } catch (error) {
        console.log(error)
    }
}


// getting data by one id
export const getBlogsId = async (req,res) =>{
try {
    
        const getBlogId = await BlogModel.findById(req.params.id);
        res.status(201).json(getBlogId)
} catch (error) {
    console.log(error)
}
}


// deleting data from database

export const delBlogs = async (req,res) => {
 try {
     const delBlog = await BlogModel.findByIdAndDelete(req.params.id);
     res.status(201).json(delBlog)
 } catch (error) {
    console.log(error)
 }
}


//update data from database
export const updateBlogs = async (req,res) => {

   try {
     const Category = req.body.category;
     const updateBlog = await BlogModel.findByIdAndUpdate(req.params.id,{category:Category})
     res.status(201).json(updateBlog)
   } catch (error) {
    console.log(error)
   }
}
export const publishUpdateBlogs = async (req,res) => {

    try {
      const published = req.body.isPublished;
      const updateBlogI = await BlogModel.findByIdAndUpdate(req.params.id,{isPublished:published})
      res.status(201).json(updateBlogI)
    } catch (error) {
     console.log(error)
    }
 }
 










