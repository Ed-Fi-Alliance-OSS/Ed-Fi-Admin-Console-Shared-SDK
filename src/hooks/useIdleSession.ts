import { useEffect } from "react";
import useAuthActions from "./useAuthActions";

const useIdleSession = () => {
  const { fetchAccessToken, handleLogOut } = useAuthActions();

  useEffect(() => {
    const handleIdle = async () => {
      try {
        await fetchAccessToken(); // Use fetchAccessToken to renew the session
      } catch (error) {
        console.error("Session renewal failed:", error);
        await handleLogOut(); // Log out if token renewal fails
      }
    };

    const idleTimeout = setTimeout(handleIdle, 30 * 60 * 1000); // Example: Idle timeout of 30 minutes

    return () => clearTimeout(idleTimeout);
  }, [fetchAccessToken, handleLogOut]);
};

export default useIdleSession;
