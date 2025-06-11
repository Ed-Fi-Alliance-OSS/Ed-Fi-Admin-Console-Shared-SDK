import { useEffect } from "react";
import useAuthActions from "./useAuthActions";

const useAuthAutoRefresh = () => {
  const { fetchAccessToken } = useAuthActions();

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        await fetchAccessToken(); // Use fetchAccessToken for token renewal
      } catch (error) {
        console.error("Auto-refresh failed:", error);
      }
    }, 15 * 60 * 1000); // Example: Refresh every 15 minutes

    return () => clearInterval(interval);
  }, [fetchAccessToken]);
};

export default useAuthAutoRefresh;
