import { useContext } from "react";
import { TEEAuthDataContext, UserProfileContext } from "../context";
import axios from "axios";

interface UseTeeAuthDataProps {}

const useAuthActions = (params?: UseTeeAuthDataProps) => {
    const { auth, edxAppConfig } = useContext(TEEAuthDataContext);
    const { userProfile } = useContext(UserProfileContext);

    // Function to fetch a new access token
    const fetchAccessToken = async () => {
        const tokenEndpoint = edxAppConfig?.authConfig.useKeycloak
            ? edxAppConfig.authConfig.keycloakTokenEndpoint
            : edxAppConfig.authConfig.customApiTokenEndpoint;

        try {
            const response = await axios.post(tokenEndpoint, {
                client_id: edxAppConfig.authConfig.clientId,
                client_secret: edxAppConfig.authConfig.clientSecret,
                grant_type: "client_credentials"
            });

            const newAccessToken = response.data.access_token;

             // Create a new user object if auth.user is null
              const newUser = auth.user || {
                access_token: "",
                expires_at: 0,
                profile: {}, // Add any additional user profile data if available
            };

             // Update the user object with the new token
            newUser.access_token = newAccessToken;
            newUser.expires_at = response.data.expires_in + Math.floor(Date.now() / 1000); // Update expiration time

            // Update the auth.user object with the new token
            await auth.storeUser(newUser); // Persist the updated user object


            return newAccessToken;
        } catch (error) {
            console.error("Failed to fetch access token:", error);
            throw error;
        }
    };

    const handleLogOut = async () => {
        if (auth) await auth.signoutRedirect();
    };

    const handleLogIn = async () => {
      try {
        await fetchAccessToken();
      } catch (error) {
          throw error;
      }
    };

    const handleChangeTenantId = async (tenantId: string) => {
        // Example logic for tenant ID change
    };

    return {
        handleLogIn,
        handleLogOut,
        handleChangeTenantId,
        fetchAccessToken, // Expose the token-fetching function
    };
};

export default useAuthActions;
