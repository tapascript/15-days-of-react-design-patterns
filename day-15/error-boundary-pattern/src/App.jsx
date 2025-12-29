import ErrorBoundary from "./ErrorBoundary";
import Error from "./components/Error";
import StatsWidget from "./components/StatsWidget";
import UserProfile from "./components/UserProfile";
function App() {
    return (
        <div className="flex flex-col items-center m-3 space-y-2">
            <h1 className="text-4xl">Dashboard</h1>
            <div className="flex space-x-3">
                <UserProfile />

                <ErrorBoundary fallback={<Error />}>
                    <StatsWidget />
                </ErrorBoundary>
            </div>
        </div>
    );
}

export default App;
