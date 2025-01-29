"use client";

import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export default function ProfilePage() {
    const [profile, setProfile] = useState({
        name: "John Doe",
        email: "johndoe@example.com",

    });
    const bio = "Passionate software engineer. Love to build amazing web applications."
    const avatar = "https://via.placeholder.com/150"
    // const [editProfile, setEditProfile] = useState(profile);

    // const handleChange = (e) => {
    //     setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
    // };

    // const handleSave = () => {
    //     setProfile(editProfile);
    // };

    return (
        <div className="flex items-center justify-center min-h-screen p-6">
            <Card className="w-full max-w-md">
                <CardHeader className="flex items-center flex-col">
                    <Avatar className="h-24 w-24 mb-4">
                        <AvatarImage src={profile.avatar} alt={profile.name} />
                        <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center text-xl font-semibold">{profile.name}</CardTitle>
                    <p className="text-gray-500 text-sm">{profile.email}</p>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-gray-700 mb-4">{profile.bio}</p>

                    <div className="mt-6 text-center">
                        {/* <Dialog>
                            <DialogTrigger asChild>
                                <Button variant="outline">Edit Profile</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogTitle>Edit Profile</DialogTitle>
                                </DialogHeader>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" name="name" value={editProfile.name} onChange={handleChange} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" name="email" value={editProfile.email} onChange={handleChange} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea id="bio" name="bio" value={editProfile.bio} onChange={handleChange} />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="avatar">Profile Picture URL</Label>
                                        <Input id="avatar" name="avatar" value={editProfile.avatar} onChange={handleChange} />
                                    </div>
                                    <Button className="w-full mt-2" onClick={handleSave}>
                                        Save Changes
                                    </Button>
                                </div>
                            </DialogContent>
                        </Dialog> */}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
