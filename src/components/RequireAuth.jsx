import { Navigate } from 'react-router-dom';

import { AuthGetUser } from '../AuthContext.jsx';

export default function RequireAuth({ children }) {
    const context = AuthGetUser();

    // Debug
    console.log("[Post-Auth] Context.", context);

    if (context === null || context === undefined)
        return <Navigate to="/login" replace />;

    const user = context.user;
    const token = context.token;

    if (!user || !token)
        return <Navigate to="/login" replace />;

    return children;
}