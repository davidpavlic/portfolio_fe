import { useState, useEffect } from "react";


///* CUSTOM HOOK *///
// This hook checks the status of the Ollama server and returns its status.
export const useOllamaStatus = () => {
    const [llmStatus, setLlmStatus] = useState<"checking" | "running" | "stopped">("checking");

    useEffect(() => {
        const checkOllamaServer = async () => {
            try {
                const res = await fetch("http://localhost:11434/api/tags");
                setLlmStatus(res.ok ? "running" : "stopped");
            } catch (error) {
                setLlmStatus("stopped");
            }
        };

        checkOllamaServer();
    }, []);

    return { llmStatus };
};