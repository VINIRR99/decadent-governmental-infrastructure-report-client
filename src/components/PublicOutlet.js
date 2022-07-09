import { Navigate, Outlet } from "react-router-dom";

const PublicOutlet = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Outlet />
    } else {
        const jwtPayload = JSON.parse(window.atob(token.split('.')[1]));
        if ((jwtPayload.exp * 1000) > Date.now()) {
            return <Navigate to="/" />;
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return <Outlet />
        };
    };
};

export default PublicOutlet;