"use client";

import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function ProfilePage() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    async function logout() {
        try {
            await axios.get("/api/users/logout");
            alert("Logged out successfully");
            router.push("/login");
        } catch (err) {
            console.log(err);
        }
    }

    async function getUserDetails() {
        try {
            const response = await axios.get("/api/users/me");
            setProfile(response.data.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <div className="flex flex-col-reverse items-center justify-center min-h-screen p-6 gap-6">
            <Button onClick={logout}>Logout</Button>
            <Card className="w-full max-w-md">
                <CardHeader className="flex items-center flex-col">
                    {loading ? (
                        <p>Loading...</p>
                    ) : profile ? (
                        <>
                            <Avatar className="h-24 w-24 mb-4">
                                <AvatarImage src={"https://via.placeholder.com/150"} alt={profile.username} />
                                <AvatarFallback>{profile.username.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <CardTitle className="text-center text-xl font-semibold">{profile.username}</CardTitle>
                            <p className="text-gray-500 text-sm">{profile.email}</p>
                        </>
                    ) : (
                        <p>Error loading profile</p>
                    )}
                </CardHeader>

            </Card>
        </div>
    );
}
