import { NavLink, Outlet, useNavigate } from "react-router"; // Remarque : "react-router-dom" est plus courant que "react-router"
import { FaPlus } from "react-icons/fa";
import { VscCode } from "react-icons/vsc";
import { useState, useEffect } from "react";

export default function Layout() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const navigate = useNavigate(); // Utilisation de useNavigate pour rediriger

    useEffect(() => {
        const userStatus = localStorage.getItem("loggedIn") === "true";
        setIsLoggedIn(userStatus);
    }, []);

    return (
        <div style={{ backgroundColor: "#1e1f22", color: "#ffffff", minHeight: "100vh" }}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
                <NavLink className="navbar-brand d-flex align-items-center gap-2" to="/chat">
                    <VscCode size={24} />
                    Scan Code
                </NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            {isLoggedIn ? (
                                <NavLink to="/chat" className="btn btn-primary d-flex align-items-center gap-2">
                                    <FaPlus />
                                    New Chat
                                </NavLink>
                            ) : (
                                <button className="btn btn-secondary" onClick={() => alert("Veuillez vous inscrire ou vous connecter")}>
                                    <FaPlus />
                                    New Chat
                                </button>
                            )}
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <main className="p-4">
                <Outlet />
            </main>
        </div>
    );
}
