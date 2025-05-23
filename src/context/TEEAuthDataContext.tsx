import { createContext } from "react";
import { AuthContextProps } from "../core/Authentication.types";
import { EdxAppConfig } from "../core/EdxApp.types";
import { useUserAppList, useUserProfile } from "../hooks";
import { ExternalAppsContext } from "./ExternalAppsContext";
import { UserProfileContext } from "./UserProfileContext";
import useAuthActions from "../hooks/useAuthActions"; // Import useAuthActions

interface ITEEAuthDataContext {
  edxAppConfig: EdxAppConfig | null;
  auth: AuthContextProps | null;
}

export const TEEAuthDataContext = createContext<ITEEAuthDataContext>({
  edxAppConfig: null,
  auth: null,
});

interface TEEAuthContextProviderProps {
  children: JSX.Element;
  edxAppConfig: EdxAppConfig;
}

export const TEEAuthDataContextProvider = ({
  children,
  edxAppConfig,
}: TEEAuthContextProviderProps) => {
  const { fetchAccessToken, getUser, isAuthenticated } = useAuthActions(); // Use fetchAccessToken and getUser from useAuthActions
  const { userProfile, setUserProfile, loadingProfile } = useUserProfile({
    apiUrl: edxAppConfig.api.edfiApiBaseUri ?? "",
  });
  const {
    externalApps,
    setExternalApps,
    fetchedExternalApps,
    loadingExternalApps,
  } = useUserAppList({ userProfile, apiUrl: edxAppConfig.api.edfiApiBaseUri ?? "" });

  console.log("UI Package version", "2.2.5");

  return (
    <TEEAuthDataContext.Provider
      value={{
        auth: {
          user: getUser(),
          isAuthenticated: isAuthenticated(),
          isLoading: false,
          access_token: "",
          login: async () => {}, // Placeholder for login logic
          logout: async () => {}, // Placeholder for logout logic
          fetchAccessToken,
        },
        edxAppConfig,
      }}
    >
      <UserProfileContext.Provider
        value={{
          userProfile,
          setUserProfile,
          loadingProfile,
        }}
      >
        <ExternalAppsContext.Provider
          value={{
            externalApps,
            fetchedExternalApps,
            loadingExternalApps,
            setExternalApps,
          }}
        >
          {children}
        </ExternalAppsContext.Provider>
      </UserProfileContext.Provider>
    </TEEAuthDataContext.Provider>
  );
};
