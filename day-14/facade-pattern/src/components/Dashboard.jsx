import { useDashboardFacade } from "../hooks/facade/useDashboardFacade";
export default function Dashboard() {
    const {
        isAuthenticated,
        isLoading,
        user,
        canEditDashboard,
        showBetaDashboard,
        logout,
    } = useDashboardFacade();

    if (isLoading) return <p>Loading...</p>;

    if (!isAuthenticated) return <p>Please login</p>;

    return (
        <div>
            <h1>Welcome {user.name}</h1>

            {canEditDashboard && <button>Edit Dashboard</button>}
            {showBetaDashboard && <p>Beta Feature Enabled</p>}

            <button onClick={logout}>Logout</button>
        </div>
    );
}
