import { useContext, useEffect, useState } from "react";
import { TEEAuthDataContext } from "../context";
import { ExternalAppData, UserProfile } from "../core";
import { fetchUserApps } from "../services/AppsService/AppsService";
import useAuthActions from "../hooks/useAuthActions"; // Import useAuthActions
import { User } from "../core/Authentication.types"; // Import the User type

interface UseUserAppListProps {
    userProfile: UserProfile | null;
    apiUrl: string;
}

const useUserAppList = ({ userProfile, apiUrl }: UseUserAppListProps) => {
    const { edxAppConfig } = useContext(TEEAuthDataContext);
    const [externalApps, setExternalApps] = useState<ExternalAppData[]>([]);
    const [loadingExternalApps, setLoadingExternalApps] = useState(false);
    const [fetchedExternalApps, setFetchedExternalApps] = useState(false);
    const { getUser } = useAuthActions(); // Use getUser from useAuthActions
    const [user, setUser] = useState<User | null>(null); // State to store the user object

    useEffect(() => {
        const fetchUser = async () => {
            const fetchedUser = await getUser(); // Await the Promise
            setUser(fetchedUser); // Set the user state
        };

        fetchUser();
    }, [getUser]); // Dependency array includes getUser

    const fetchExternalApps = async (token: string, tenantId: string) => {
        setLoadingExternalApps(true);
        try {
            const result = await fetchUserApps(token, tenantId, apiUrl, edxAppConfig?.api);

            setLoadingExternalApps(false);
            setFetchedExternalApps(true);

            if (result.type === "Response") {
                const externalApps: ExternalAppData[] = result.data;

                console.log("external apps in fetchExternalApps", externalApps);

                if (externalApps.length > 0) {
                    externalApps.forEach((appData) => {
                        appData.applicationUri = appData.applicationUri.replace(
                            ".edgraph.",
                            ".txedexchange."
                        );
                    });
                }

                if (externalApps.length > 0) {
                    const appsAvailable = externalApps
                        .filter((app) => app.isTenantSubscribed)
                        .sort((a, b) => a.applicationName.localeCompare(b.applicationName));

                    return setExternalApps(appsAvailable);
                }

                setExternalApps(externalApps);
            }
        } catch (error) {
            console.error("Failed to fetch external apps:", error);
            setLoadingExternalApps(false);
        }
    };

    useEffect(() => {
        if (user && userProfile) {
            console.log("useEffect appList user and userProfile received");
            const accessPref = undefined
            console.log('access pref', accessPref)
            if (accessPref)
                fetchExternalApps(user.access_token, accessPref)
        }
    }, [user, userProfile]);

    return {
        loadingExternalApps,
        fetchedExternalApps,
        externalApps,
        setExternalApps,
    };
};

export default useUserAppList;
