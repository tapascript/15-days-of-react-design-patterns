import { createAuthHook } from "../hook-factory";

function Login({ loginType }) {
  // Select the hook BEFORE calling it
  const useAuth = createAuthHook(loginType);

  // Now call the hook normally
  const auth = useAuth();

  return (
    <button onClick={auth.login}>
      Login
    </button>
  );
}