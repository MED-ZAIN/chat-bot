import { NavLink, Outlet } from "react-router";
import {FaPlus} from "react-icons/fa";
import { VscCode } from "react-icons/vsc";

export default function Layout() {
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
                            <NavLink to="/chat" className="btn btn-primary d-flex align-items-center gap-2">
                                <FaPlus />
                                New Chat
                            </NavLink>
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
