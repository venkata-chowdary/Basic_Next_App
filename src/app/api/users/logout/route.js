import { NextResponse } from "next/server";

export async function GET() {

    console.log("hello")
    try {
        const response = NextResponse.json({
            message: "logout successful",
            success: true
        })
        response.cookies.set("token", "", { httpOnly: true })

        return response
    }
    catch (err) {
        console.error("Error creating user:", err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}