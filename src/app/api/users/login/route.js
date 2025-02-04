import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'
connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { email, password } = reqBody;

        const user = await User.findOne({ email })
        if (!user) {
            return NextResponse.json({ message: "User not found" }, { status: 400 })
        }

        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return NextResponse.json({ message: "Incorrect Password." }, { status: 400 })
        }


        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }
        const token = await jwt.sign(tokenData, "thisissecret", { expiresIn: '1d' })


        const response = NextResponse.json({
            message: "Login successfully",
            success: true,
            user: { email } // Do not return password in response
        });

        response.cookies.set('token', token, {
            httpOnly: true
        })

        return response

    } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
