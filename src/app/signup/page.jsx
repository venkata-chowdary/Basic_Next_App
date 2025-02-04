"use client"

import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"
import { SignupForm } from "@/components/signup-form"

export default function SignUpPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        username: "" // Fix the typo from `usename` to `username`
    });

    const router = useRouter();

    // Handle input changes
    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    async function handleSignup(e) {
        e.preventDefault(); // Prevent page reload

        try {
            const response = await axios.post("/api/users/signup", user);
            console.log("Signup Successful", response.data);
            router.push("/login"); // Redirect on success
        } catch (error) {
            console.error("Signup Failed", error.response?.data || error.message);
        }
    }

    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <SignupForm user={user} onChange={handleChange} onSubmit={handleSignup} />
            </div>
        </div>
    );
}
