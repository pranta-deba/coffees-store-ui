import { useContext } from "react";
import { AuthContext } from "./provider/AuthProvider";
import { Navigate } from "react-router-dom";

const Private = ({ children }) => {
    const { user, role } = useContext(AuthContext);

    if (!user && !role) {
        return <Navigate to="/"></Navigate>;
    } else {
        return children;
    }
};

export default Private;