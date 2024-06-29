import { Router } from "express";
import { addBlogs, delBlogs, getBlogs, getBlogsId, updateBlogs } from "../controllers/controller.js";

// creating router 

const routeApp = Router();


// addingg data
routeApp.post('/blog',addBlogs)
routeApp.get('/blog',getBlogs)
routeApp.get('/blog/:id',getBlogsId)
routeApp.delete('/blog/:id',delBlogs)
routeApp.patch('/blog/:id',updateBlogs)



// exporting routerApp
export default routeApp;
