import { useContext } from "react";
import { TEEAuthDataContext, UserProfileContext } from "../context";
import axios from "axios";
import { User } from "oidc-client-ts"; // Import the User type from oidc-client-ts
import { TbPackageExport } from "react-icons/tb";

interface UseTeeAuthDataProps {}

const useAuthActions = (params?: UseTeeAuthDataProps) => {
    const { auth, edxAppConfig } = useContext(TEEAuthDataContext);
    const { userProfile } = useContext(UserProfileContext);

    // Function to fetch a new access token
    const fetchAccessToken = async (): Promise<string> => {
        if (!edxAppConfig) {
            throw new Error("edxAppConfig is null or undefined.");
        }

        const tokenEndpoint = edxAppConfig.auth.useKeycloak
            ? edxAppConfig.auth.keycloakTokenEndpoint
            : edxAppConfig.auth.customApiTokenEndpoint;

        try {
            if (!tokenEndpoint) {
                throw new Error("Token endpoint is undefined.");
            }

            const response = await axios.post(tokenEndpoint, {
                client_id: edxAppConfig.auth.clientId,
                client_secret: edxAppConfig.auth.clientSecret,
                grant_type: "client_credentials",
            });

            const newAccessToken = response.data.access_token;

            // Create a new user object
            const newUser: User = {
              access_token: newAccessToken,
              expires_at: response.data.expires_in + Math.floor(Date.now() / 1000),
              session_state: null,
              token_type: "",
              state: undefined,
              expires_in: undefined,
              expired: undefined,
              scopes: [],
              profile: {
                sub: "example-sub",
                iss: "example-issuer",
                aud: "example-audience",
                exp: Math.floor(Date.now() / 1000) + 3600, // Example expiration time
                iat: Math.floor(Date.now() / 1000), // Example issued-at time
              }, // Populate with actual profile data
              toStorageString: function (): string {
                throw new Error("Function not implemented.");
              }
            };

            // Persist the user object
            storeUser(newUser);

            return newAccessToken;
        } catch (error) {
            console.error("Failed to fetch access token:", error);
            throw error;
        }
    };

    // Function to store the user object
    const storeUser = (user: User): void => {
        try {
            localStorage.setItem("authUser", JSON.stringify(user)); // Store the user object in localStorage
        } catch (error) {
            console.error("Failed to store user:", error);
        }
    };

    // Function to retrieve the user object
     const getUser = (): User | null => {
        try {
            const user = localStorage.getItem("authUser");
            return user ? (JSON.parse(user) as User) : null; // Cast the parsed object to User
        } catch (error) {
            console.error("Failed to retrieve user:", error);
            return null;
        }
    };

    // Function to check if the token is expired
    const isTokenExpired = (user: User): boolean => {
        const currentTime = Math.floor(Date.now() / 1000);
        return (user.expires_at ?? 0) <= currentTime;
    };

    // Function to refresh the token if needed
    const refreshTokenIfNeeded = async (): Promise<void> => {
        const user = getUser();
        if (user && isTokenExpired(user)) {
            await fetchAccessToken(); // Refresh the token
        }
    };

    // Function to handle logout
    const handleLogOut = async (): Promise<void> => {
        if (auth) await auth.signoutRedirect();
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
    };

    return {
        handleLogIn,
        handleLogOut,
        handleChangeTenantId,
        fetchAccessToken, // Expose the token-fetching function
        getUser, // Expose the function to retrieve the user
        storeUser, // Expose the function to store the user
        refreshTokenIfNeeded, // Expose the function to refresh the token if needed
    };
};

export default useAuthActions;
