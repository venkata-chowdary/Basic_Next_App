import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide an username"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide an email"],
        unique: true
    },
    email: {
        type: String,
        required: [true, "Please provide password"],
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry: Date
})


//In next.js model might get created already in the db, as the calls to backend runs in edges, not in continuous
const User = mongoose.model.users || mongoose.model("User", userSchema)
export default User