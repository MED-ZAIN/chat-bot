import { useState, useRef } from "react";
import { ChatAiService } from "Frontend/generated/endpoints";
import Markdown from "react-markdown";
import { motion } from "framer-motion";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";

export default function Chat() {
    const [question, setQuestion] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    async function send() {
        if (!question.trim()) return;
        setLoading(true);
        setQuestion("");
        ChatAiService.ragChat(question).then(resp => {
            setResponse(resp);
            setLoading(false);
        }).catch(() => {
            setLoading(false);
        });
    }


    function handleFileClick() {
        fileInputRef.current?.click();
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const text = reader.result as string;
                setQuestion(text);
            };
            reader.readAsText(file);
        }
    }

    return (
        <div className="d-flex flex-column justify-content-center align-items-center min-vh-100" style={{ backgroundColor: "#1e1f22", color: "#ffffff" }}>
            <div className="text-center mb-4">
                <h2 className="fw-bold">
                    <span style={{ color: "#4f78ff" }}>ChatCoding</span>
                </h2>
                <p className="text-secondary">How can I help you today?</p>
            </div>

            <div className="w-100 px-4" style={{ maxWidth: "720px" }}>
                {response && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mb-4 p-3 rounded bg-dark border-start border-4 border-primary shadow"
                    >
                        <Markdown>{response}</Markdown>
                    </motion.div>
                )}

                <div className="bg-dark p-3 rounded-4 shadow d-flex flex-column">
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control bg-dark text-white border-0 rounded-start-4 px-4 py-3"
                            placeholder="Message DeepSeek"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && send()}
                            disabled={loading}
                            style={{ fontSize: "1.1rem", display: loading ? "none" : "block" }}
                        />

                        <input
                            type="file"
                            accept=".py,.java,.js,.c,.cpp"
                            ref={fileInputRef}
                            style={{ display: "none" }}
                            onChange={handleFileChange}
                        />

                        <button
                            className="btn btn-dark border-0"
                            type="button"
                            onClick={handleFileClick}
                            disabled={loading}
                        >
                            <FaPaperclip className="text-white" />
                        </button>

                        <button
                            className="btn btn-primary rounded-end-4"
                            type="button"
                            onClick={send}
                            disabled={loading}
                            style={{ width: 52 }}
                        >
                            {loading ? (
                                <div className="spinner-border spinner-border-sm text-light" />
                            ) : (
                                <FaPaperPlane />
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
