import { createContext, useEffect } from "react";
import { AuthContextProps, useAuth } from "react-oidc-context";
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
  const auth = useAuth();
  const { fetchAccessToken } = useAuthActions(); // Use fetchAccessToken from useAuthActions
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

  useEffect(() => {
    auth.events.addSilentRenewError(async () => {
      try {
        // Replace auth.signinRedirect with fetchAccessToken
        await fetchAccessToken();
      } catch (error) {
        console.error("Silent renew failed:", error);
      }
    });
  }, []);

  return (
    <TEEAuthDataContext.Provider value={{ auth, edxAppConfig }}>
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
