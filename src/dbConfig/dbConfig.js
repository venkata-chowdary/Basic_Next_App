import mongoose, { mongo } from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGOURL)
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