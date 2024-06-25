import mongoose from "mongoose";

const DATABASE_URL = process.env.DB_CONN_STRING


export async function connectDB(){
    // mongoose.connect(`${DATABASE_URL}`)
    // mongoose.connection.on('connected to database', () => console.log('connected'));
    try {
        mongoose.connect(`${DATABASE_URL}`)
      } catch (error) {
        console.log(error);
      }
}