import { useContext } from "react";
import { TEEAuthDataContext, UserProfileContext } from "../context";
import axios from "axios";
import { User } from "../core/Authentication.types"; // Import the User type

interface UseTeeAuthDataProps {}

const useAuthActions = (params?: UseTeeAuthDataProps) => {
    const { edxAppConfig } = useContext(TEEAuthDataContext);
    const { userProfile } = useContext(UserProfileContext);

    // Function to fetch a new access token
    const fetchAccessToken = async (): Promise<string> => {
        console.log("Fetching access token...");
        if (!edxAppConfig) {
            throw new Error("edxAppConfig is null or undefined.");
        }

        let tokenEndpoint =edxAppConfig.auth.TokenEndpoint;
        console.log("Token endpoint:", tokenEndpoint);

        try {
            if (!tokenEndpoint) {
                throw new Error("Token endpoint is undefined.");
            }
            // Prepare request data and headers
            const data = new URLSearchParams();
            data.append("client_id", edxAppConfig.auth.clientId ?? "");
            data.append("client_secret", edxAppConfig.auth.clientSecret ?? "");
            data.append("grant_type", "client_credentials");
            data.append("scope", "edfi_admin_api/full_access");

            // Common headers
            const headers: Record<string, string> = {
                "Content-Type": "application/x-www-form-urlencoded",
            };

            // Add custom tenant header only if useAdminApiAuthentication is true
            if (edxAppConfig.api.useAdminApiAuthentication) {
                const tenantId = sessionStorage.getItem("selectedTenant");
                headers["tenant"] = tenantId || "tenant1"; // Default tenant ID if not found
            }

            const response = await axios.post(
                tokenEndpoint,
                data.toString(),
                { headers }
            );

            const newAccessToken = response.data.access_token;

            // Create a new user object
            const newUser: User = {
                access_token: newAccessToken,
                expires_at: response.data.expires_in + Math.floor(Date.now() / 1000),
                token_type: "Bearer",
                scopes: response.data.scope ? response.data.scope.split(" ") : [],
                profile: {
                    sub: "example-sub",
                    iss: "example-issuer",
                    aud: "example-audience",
                    exp: Math.floor(Date.now() / 1000) + 3600,
                    iat: Math.floor(Date.now() / 1000),
                },
            };

            // Persist the user object
            storeUser(newUser);
            console.log("Access token fetched and user stored:", newUser);

            return newAccessToken;
        } catch (error) {
            console.error("Failed to fetch access token:", error);
            throw error;
        }
    };

    // Function to store the user object
    const storeUser = (user: User): void => {
        try {
            localStorage.setItem("authUser", JSON.stringify(user));
        } catch (error) {
            console.error("Failed to store user:", error);
        }
    };

    // Function to retrieve the user object
    const getUser = async (): Promise<User | null> => {
      try {
          let user = localStorage.getItem("authUser");

          if (!user) {
              console.log("the config", edxAppConfig);
              console.log("No user found in localStorage. Fetching a new access token...");

              // If no user is found, call fetchAccessToken to get a new token and store the user
              await fetchAccessToken();

              const newUser = localStorage.getItem("authUser");
              return newUser ? (JSON.parse(newUser) as User) : null;
          }

          return JSON.parse(user) as User;
      } catch (error) {
          console.error("Failed to retrieve or create user:", error);
          return null;
      }
  };

   // Function to check if the user is authenticated
   const isAuthenticated = async (): Promise<boolean> => {
    const user = await getUser();
    if (!user) {
        return false;
    }
    return !isTokenExpired(user);
  };

    // Function to check if the token is expired
    const isTokenExpired = (user: User): boolean => {
        const currentTime = Math.floor(Date.now() / 1000);
        return (user.expires_at ?? 0) <= currentTime;
    };

    // Function to refresh the token if needed
    const refreshTokenIfNeeded = async (): Promise<void> => {
        const user = await getUser();
        if (user && isTokenExpired(user)) {
            await fetchAccessToken();
        }
    };

    // Function to handle logout
    const handleLogOut = async (): Promise<void> => {
        try {
        // Clear the user from localStorage
        localStorage.removeItem("authUser");

        // Always redirect to the application's home page
        window.location.href = window.location.origin;
      } catch (error) {
          console.error("Failed to log out:", error);
      }
    };

    // Function to handle login
    const handleLogIn = async (): Promise<void> => {
        try {
            await fetchAccessToken();
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    // Function to handle tenant ID change
    const handleChangeTenantId = async (tenantId: string): Promise<void> => {
        // Example logic for tenant ID change
        console.log(`Tenant ID changed to: ${tenantId}`);
    };

    return {
        handleLogIn,
        handleLogOut,
        handleChangeTenantId,
        fetchAccessToken,
        getUser,
        storeUser,
        refreshTokenIfNeeded,
        isAuthenticated,
    };
};

export default useAuthActions;
