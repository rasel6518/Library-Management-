

import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";





const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();


    if (loading) {
        return <span className="loading   loading-spinner flex items-center text-center loading-xl"></span>
    }


    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/signin'></Navigate>;
}

export default PrivateRoute;