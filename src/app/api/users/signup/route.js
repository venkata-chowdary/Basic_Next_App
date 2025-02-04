import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/User.model";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connect();

export async function POST(request) {
    try {
        const reqBody = await request.json();
        const { username, email, password } = reqBody;


        if (!password || password.trim() === "") {
            return NextResponse.json({ error: "Password is required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance
        const newUser = await new User({
            username,
            email,
            password: hashedPassword, // Store the hashed password
        });

        // Save the new user
        await newUser.save();
        console.log("User saved successfully");

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            user: { username, email } // Do not return password in response
        });

    } catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
