import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/User.model";
import { connect } from "@/dbConfig/dbConfig";

connect()

export async function GET(request) {
    try {
        const userId = await getDataFromToken(request)
        const user = await User.findById(userId).select("-password -isAdmin")
        console.log(user)

        return NextResponse.json({ data: user, message: "User found" })

    }
    catch (err) {
        return NextResponse.json({ error: err.message }, { status: 400 })
    }
}