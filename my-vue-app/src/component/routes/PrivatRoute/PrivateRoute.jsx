import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import Layout from "../../layout/Layout";

export default function PrivateRoute({ allowedRoles }) {
    const { authorization, dataToken } = useAuthContext();


    return allowedRoles?.includes(dataToken.role) ? (
        <Layout />

    ) : dataToken?.email ? (
        <Navigate to="/unauthorized" />
    ) : (
        <Navigate to="/login" />
    );
}
