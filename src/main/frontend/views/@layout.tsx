import {NavLink,Outlet} from "react-router";

export default function Layout(){
    return (
        <div className="p-m " style={{ backgroundColor: "#1e1f22", color: "#ffffff" }}>
            <nav>
                <NavLink className="btn btn-outline-info m-2 " to="/">Home</NavLink>
                <NavLink className="btn btn-outline-primary m-1" to="/chat">Chat</NavLink>



            </nav>
            <main>
              <Outlet></Outlet>
            </main>
        </div>
    );
}