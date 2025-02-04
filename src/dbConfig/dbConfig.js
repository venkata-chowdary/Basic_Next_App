import mongoose, { mongo } from "mongoose";

export async function connect() {
    try {
        mongoose.connect("mongodb://localhost:27017/next-auth")
        const connection = mongoose.connection

        connection.on('connected', () => {
            console.log("mongodb connected succesfully.")
        })

        connection.on('error', () => {
            console.log("mongodb connection error.")
            process.exit()
        })
    }
    catch (err) {
        console.log(err)
    }
}