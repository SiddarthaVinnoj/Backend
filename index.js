import express from "express";
import mongoose from "mongoose";;
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());    
dotenv.config();
const PORT = process.env.PORT || 3001;
const URI = process.env.MongoDBURI;

//connection to db
const connect = async () => {

try{
   await mongoose.connect(URI);
    console.log("connected to db");
}catch(err){
console.log("error :", err);
}
}
connect();
//defing routes

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT,()=>{
    console.log(`server listening at ${PORT}`);
})