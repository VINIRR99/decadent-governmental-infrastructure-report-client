import { Navigate, Outlet } from "react-router-dom";

const PrivateOutlet = () => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/" />;
    } else {
        const jwtPayload = JSON.parse(window.atob(token.split('.')[1]));
        if ((jwtPayload.exp * 1000) > Date.now()) {
            return <Outlet />;
        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return <Navigate to="/" />;
        };
    };
};

export default PrivateOutlet;