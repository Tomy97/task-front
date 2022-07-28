import { useState } from "react";

export const useLoading = ( initialStatus: boolean = false ) => {
    const [status, setStatus] = useState(initialStatus);
    const [message, setMessage] = useState("");
    
    const startLoading = () => {
        setStatus(true);
    }
    
    const stopLoading = (message: string) => {
        setStatus(false);
        setMessage(message);
    }
    
    return {
        status,
        message,
        startLoading,
        stopLoading
    }
}