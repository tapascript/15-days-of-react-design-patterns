export function useAuth() {
    return {
        isAuthenticated: true,
        logout: function () {
            console.log("Logged Out!");
        },
    };
}
