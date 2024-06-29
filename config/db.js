import mongoose from "mongoose";
import 'dotenv/config'


const dbConnect = process.env.dbUrl

export const dbConnection = ( ) => { mongoose.connect(dbConnect).then(
    () =>{
        console.log('db connected')
    }
)}