import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router";

export default function Login() {
    const [isRegister, setIsRegister] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isRegister) {

            if (formData.password !== formData.confirmPassword) {
                alert("Les mots de passe ne correspondent pas");
                return;
            }

            try {
                const response = await fetch("http://localhost:8989/api/inscription", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: formData.username,
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    alert(`Bienvenue ${data.username} !`);

                    // Optionnel : stocker l'utilisateur en localStorage pour maintenir la session
                    localStorage.setItem("user", JSON.stringify(data));
                    localStorage.setItem("loggedIn", "true");  // Marquer l'utilisateur comme connecté

                    // Redirection vers la page du chat
                    navigate("/chat");
                } else {
                    const err = await response.text();
                    alert("Erreur d'inscription : " + err);
                }
            } catch (error) {
                alert("Erreur réseau : " + error);
            }
        } else {
            // Connexion
            try {
                const response = await fetch("http://localhost:8989/api/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email: formData.email,
                        password: formData.password,
                    }),
                });

                if (response.ok) {
                    const data = await response.json();
                    alert(`Bienvenue ${data.username} !`);

                    // Optionnel : stocker l'utilisateur en localStorage pour maintenir la session
                    localStorage.setItem("user", JSON.stringify(data));
                    localStorage.setItem("loggedIn", "true");  // Marquer l'utilisateur comme connecté

                    // Redirection vers la page du chat
                    navigate("/chat");
                } else {
                    const err = await response.text();
                    alert("Erreur de connexion : " + err);
                }
            } catch (error) {
                alert("Erreur réseau : " + error);
            }
        }
    };

    const handleGoogleLogin = () => {
        // À implémenter pour la connexion Google
    };

    return (
        <div className="d-flex flex-column align-items-center text-light mt-5">
            <h2 className="mb-3">{isRegister ? "Register" : "Login"}</h2>

            <form style={{ width: "300px" }} onSubmit={handleSubmit}>
                {isRegister && (
                    <div className="form-group mb-3">
                        <label>Username</label>
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Enter username"
                            required
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>
                )}
                <div className="form-group mb-3">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {isRegister && (
                    <div className="form-group mb-3">
                        <label>Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            className="form-control"
                            placeholder="Confirm password"
                            required
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </div>
                )}

                <button type="submit" className="btn btn-primary w-100">
                    {isRegister ? "Register" : "Login"}
                </button>
            </form>

            <div className="my-3 text-center text-secondary">or</div>

            <button
                className="btn btn-outline-light w-100 d-flex align-items-center justify-content-center"
                style={{ maxWidth: "300px" }}
                onClick={handleGoogleLogin}
            >
                <FaGoogle className="me-2" />
                Continue with Google
            </button>

            <div className="mt-4 text-secondary">
                {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                <button
                    className="btn btn-link p-0 text-primary"
                    onClick={() => setIsRegister(!isRegister)}
                >
                    {isRegister ? "Login" : "Register"}
                </button>
            </div>
        </div>
    );
}
