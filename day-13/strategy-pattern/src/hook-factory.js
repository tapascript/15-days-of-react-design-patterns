import { useOtpAuth } from "./hooks/useOtpAuth";
import { useSsoAuth } from "./hooks/useSsoAuth";

// Map of strategies hooks
const authHookMap = {
  otp: useOtpAuth,
  sso: useSsoAuth
};

// Factory function
export function createAuthHook(type) {
  return authHookMap[type];
}