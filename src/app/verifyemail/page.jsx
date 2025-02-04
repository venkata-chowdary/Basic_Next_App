"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

export default function VerifyEmail() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token"); 
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");

    async function verifyEmail() {
        try {
            const response = await axios.post('/api/users/verifyemail', { token });
            if (response.data.status===202){
                setError("User already verified")
                return 
            }
            setVerified(true);
        } catch (err) {
            console.error("Verification failed:", err.response?.data || err.message);
            setError("Verification failed. Please try again.");
        }
    }

    return (
        <div>
            {verified ? (
                <p>Email verified successfully!</p>
            ) : (
                <Button onClick={verifyEmail}>Verify Email</Button>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
