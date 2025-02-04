"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function VerifyEmailComponent() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");  // ✅ Extract token correctly
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState("");

    async function verifyEmail() {
        try {
            const response = await axios.post('/api/users/verifyemail', { token });
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

export default function VerifyEmail() {
    return (
        <Suspense fallback={<p>Loading...</p>}>
            <VerifyEmailComponent />
        </Suspense>
    );
}
