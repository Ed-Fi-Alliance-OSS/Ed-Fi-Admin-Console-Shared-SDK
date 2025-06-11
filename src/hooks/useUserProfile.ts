import { useEffect, useState } from "react";
import { UserProfile } from "../core";
import useDecodeToken from "./useDecodeToken";
import useAuthActions from "./useAuthActions";
import { User } from "../core/Authentication.types"; // Import the User type

interface UseUserProfileProps {}

const useUserProfile = ({}: UseUserProfileProps) => {
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loadingProfile, setLoadingProfile] = useState(true);
    const { decodeTokenPayload } = useDecodeToken();
    const { getUser } = useAuthActions(); // Use getUser from useAuthActions
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const fetchedUser = await getUser(); // Resolve the promise
            setUser(fetchedUser);
        };

        fetchUser();
    }, []);

    const fetchProfile = async () => {
        if (user) {
            try {
                const token = user.access_token;
                setLoadingProfile(true);

                // Decode the token payload to extract user information
                const tokenPayload = decodeTokenPayload(token);

                console.log("Decoded token payload:", tokenPayload);

                // Set the user profile based on the token payload
                setUserProfile({
                    firstName: tokenPayload?.given_name ?? "",
                    lastName: tokenPayload?.family_name ?? "",
                    email: tokenPayload?.email ?? "",
                    userName: tokenPayload?.email ?? "",
                });
            } catch (error) {
                console.error("Unexpected error when fetching user profile:", error);
            } finally {
                setLoadingProfile(false);
            }
        }
    };

    useEffect(() => {
        if (user) {
            fetchProfile();
        }
    }, [user]);

    return {
        loadingProfile,
        userProfile,
        setUserProfile,
    };
};

export default useUserProfile;
