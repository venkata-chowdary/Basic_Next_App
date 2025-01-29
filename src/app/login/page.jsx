"use client"
import React, { useState } from "react";
import { LoginForm } from "@/components/login-form"


export default function LoginPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
    });


    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value,
        });
    };

    // Handle form submission
    async function handleLogin(e) {
        e.preventDefault();

    }
    return (
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm user={user} onChange={handleChange} onSubmit={handleLogin} />
            </div>
        </div>
    )
}