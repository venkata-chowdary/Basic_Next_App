import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User.model";
import { NextResponse } from "next/server";


await connect()

export async function POST(request) {

    try {
        const reqBody = await request.json()
        const { token } = reqBody
        console.log("TOKEN",token)
        const user = await User.findOne({ verifyToken: token})
        if (!user) {
            return NextResponse.json({ error: "Invalid token" }, { status: 400 })
        }


        if (user.isVerified === true) {
            return NextResponse.json({ error: "User already verified", status: 202 })
        }
        user.isVerified = true
        await user.save()

        return NextResponse.json({ message: "User verified successfully", success: true })
    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }

}