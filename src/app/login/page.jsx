"use client"
import React, { useState } from "react";
import { LoginForm } from "@/components/login-form"
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    }); const router = useRouter();


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await axios.post("/api/users/login", user);
            console.log("Login successfully Successful", response.data);
            if (response.data.success===true) {
                router.push('/profile')
            }
        } catch (error) {
            console.error("Signup Failed", error.response?.data || error.message);
        }

    }
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm user={user} onChange={handleChange} onSubmit={handleLogin} />
            </div>
        </div>
    )
}