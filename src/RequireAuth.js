import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "./firebase.init";

function RequireAuth({ children }) {
    const [user, loading] = useAuthState(auth)
    let location = useLocation();
    if (loading) {
        return <div class="lds-circle"><div></div></div>
    }

    if (!user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return children;
}

export default RequireAuth