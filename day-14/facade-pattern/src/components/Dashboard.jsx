import { useAuth } from "../hooks/useAuth";
import { useFeatureFlags } from "../hooks/useFeatureFlags";
import { usePermissions } from "../hooks/usePermissions";
import { useUser } from "../hooks/useUser";
export default function Dashboard() {
    const { isAuthenticated, logout } = useAuth();
    const { user, isLoading: userLoading } = useUser();
    const { permissions, isLoading: permLoading } = usePermissions();
    const { flags } = useFeatureFlags();

    if (userLoading || permLoading) {
        return <p>Loading...</p>;
    }

    if (!isAuthenticated) {
        return <p>Please login</p>;
    }

    const canEdit = permissions.includes("EDIT_DASHBOARD");
    const showBeta = flags.enableBetaDashboard;

    return (
        <div>
            <h1>Welcome {user.name}</h1>

            {canEdit && <button>Edit Dashboard</button>}
            {showBeta && <p>Beta Feature Enabled</p>}

            <button onClick={logout}>Logout</button>
        </div>
    );
}
