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

        const tokenEndpoint = edxAppConfig.auth.useKeycloak
            ? edxAppConfig.auth.keycloakTokenEndpoint
            : edxAppConfig.auth.customApiTokenEndpoint;

            console.log("Token endpoint:", tokenEndpoint);

        try {
            if (!tokenEndpoint) {
                throw new Error("Token endpoint is undefined.");
            }

            let response;
            if (edxAppConfig.auth.useKeycloak) {
              // Prepare URLSearchParams
              const data = new URLSearchParams();
              data.append("client_id", edxAppConfig.auth.clientId ?? "");
              data.append("client_secret", edxAppConfig.auth.clientSecret ?? "");
              data.append("grant_type", "client_credentials");
              // data.append("scope", "edfi_admin_api/full_access");

              // POST request to Keycloak token endpoint
              response = await axios.post(
                tokenEndpoint,
                data.toString(),
                {
                  headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                  }
                }
              );
            }
            else{
            response = await axios.post(tokenEndpoint, {
                client_id: edxAppConfig.auth.clientId,
                client_secret: edxAppConfig.auth.clientSecret,
                grant_type: "client_credentials",
                scope: "edfi_admin_api/full_access",
            },
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                "tenant": "tenant1",
              },
            }
          );
        }

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
                    exp: Math.floor(Date.now() / 1000) + 3600, // Example expiration time
                    iat: Math.floor(Date.now() / 1000), // Example issued-at time
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
            localStorage.setItem("authUser", JSON.stringify(user)); // Store the user object in localStorage
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
              const newAccessToken = await fetchAccessToken(); // Fetch a new access token

              // Create a new user object
              const newUser: User = {
                  access_token: newAccessToken,
                  expires_at: Math.floor(Date.now() / 1000) + 3600, // Example expiration time
                  token_type: "Bearer",
                  scopes: ["edfi_admin_api/full_access"], // Example scope
                  profile: {
                      sub: "example-sub",
                      iss: "example-issuer",
                      aud: "example-audience",
                      exp: Math.floor(Date.now() / 1000) + 3600, // Example expiration time
                      iat: Math.floor(Date.now() / 1000), // Example issued-at time
                  },
              };

              // Store the new user object in localStorage
              storeUser(newUser);

              return newUser;
          }

          return JSON.parse(user) as User; // Return the parsed user object
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
    return !isTokenExpired(user); // Return true if the token is not expired
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
            await fetchAccessToken(); // Refresh the token
        }
    };

    // Function to handle logout
    const handleLogOut = async (): Promise<void> => {
        try {
            // Clear the user from localStorage
            localStorage.removeItem("authUser");

            // Redirect to the logout URL if defined in the configuration
            if (edxAppConfig?.auth?.postLogoutRedirectUri) {
                window.location.href = edxAppConfig.auth.postLogoutRedirectUri;
            } else {
                console.log("Logout URL not defined. User session cleared.");
            }
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
        fetchAccessToken, // Expose the token-fetching function
        getUser, // Expose the function to retrieve the user
        storeUser, // Expose the function to store the user
        refreshTokenIfNeeded, // Expose the function to refresh the token if needed
        isAuthenticated, // Expose the function to check if the user is authenticated
    };
};

export default useAuthActions;
