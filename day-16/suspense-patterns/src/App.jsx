import Dashboard from "./waterfall/Dashboard";
import DashboardWithSuspense from "./suspense/Dashboard";
function App() {
    return (
        <div className="flex items-center justify-center gap-12">
            <Dashboard />
            <DashboardWithSuspense />
        </div>
    );
}

export default App;
