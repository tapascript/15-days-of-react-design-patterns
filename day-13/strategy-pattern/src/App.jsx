import LoginButton from "./components/LoginButton";
import { AuthProvider } from "./provider/AuthProvider";
function App() {
    return (
        <AuthProvider strategy="otp">
            <LoginButton />
            {/*<Profile />
    <Dashboard />*/}
        </AuthProvider>
    );
}

export default App;
