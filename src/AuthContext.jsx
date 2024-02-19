import { createContext, useContext } from 'react';
import useLocalStorage from 'use-local-storage';

import users from './UserList.jsx';

const AuthUserGetContext = createContext({
    user: null,
    token: null
});
export function AuthGetUser() {
    return useContext(AuthUserGetContext);
}

const AuthUserUpdateContext = createContext(null);
export function AuthUpdateUser() {
    return useContext(AuthUserUpdateContext);
}

export default function RenderAuthContext({ children }) {
    const [user, setUser] = useLocalStorage("user", null);
    const [token, setToken] = useLocalStorage("token", null);

    function authenticateUser(email, password) {
        if (email === null && password === null) {
            setUser(null);
            setToken(null);
            return false;
        }
        const user = users.find((userObj) => userObj.email.toLowerCase() === email.toLowerCase() && userObj.password === password);

        // Debug
        //console.log("[Debug] Found User.", user);

        setUser(user);
        setToken("123456");

        // Debug
        //console.log("[Debug] Token.", token);

        return true;
    }

    return (
        <AuthUserGetContext.Provider value={{ user: user, token: token }}>
            <AuthUserUpdateContext.Provider value={(email, password) => authenticateUser(email, password)}>
                {children}
            </AuthUserUpdateContext.Provider>
        </AuthUserGetContext.Provider>
    );
}