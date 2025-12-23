import { useAuth } from "../useAuth";
import { useFeatureFlags } from "../useFeatureFlags";
import { usePermissions } from "../usePermissions";
import { useUser } from "../useUser";

export function useDashboardFacade() {
    const { isAuthenticated, logout } = useAuth();
    const { user, isLoading: userLoading } = useUser();
    const { permissions, isLoading: permLoading } = usePermissions();
    const { flags } = useFeatureFlags();

    const isLoading = userLoading || permLoading;

    const canEditDashboard = permissions?.includes("EDIT_DASHBOARD") ?? false;

    const showBetaDashboard = flags?.enableBetaDashboard ?? false;

    return {
        isAuthenticated,
        isLoading,
        user,
        canEditDashboard,
        showBetaDashboard,
        logout,
    };
}
