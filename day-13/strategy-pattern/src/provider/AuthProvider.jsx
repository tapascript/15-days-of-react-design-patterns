import { AuthContext } from "../context";
import { createAuthHook } from "./createAuthHook";

export function AuthProvider({ strategy, children }) {
  // Strategy is chosen ONCE at app startup
  const useAuth = createAuthHook(strategy);

  return (
    <AuthContext.Provider value={useAuth}>
      {children}
    </AuthContext.Provider>
  );
}