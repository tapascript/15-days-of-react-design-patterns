import { useContext } from "react";
import { AuthContext } from "../context";

export default function LoginButton() {
    const useAuth = useContext(AuthContext);
    const auth = useAuth();

    return <button onClick={auth.login}>Login</button>;
}
