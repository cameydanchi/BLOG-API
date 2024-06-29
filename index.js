import express from 'express';
import routeApp from './routes/route.js';
import mongoose from 'mongoose';
import 'dotenv/config'
import { dbConnection } from './config/db.js';



// // connecting to database
 dbConnection()

// creating express environment
const app = express();
app.use(express.json());





app.use(routeApp)
//listing to port
const port = 8080;
app.listen(port,() => {
    console.log(`listening to port ${port}`)
}
)