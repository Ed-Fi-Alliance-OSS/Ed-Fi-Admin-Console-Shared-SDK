import { InfoIcon } from "@chakra-ui/icons";
import { Flex, Link, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { TEEAuthDataContext, UserProfileContext } from "../../context";
import useDecodeToken from "../../hooks/useDecodeToken";
import  useAuthActions  from "../../hooks/useAuthActions";

interface EdxUserInfo {
    email: string;
    firstName: string;
    lastName: string;
    organization: string;
    jobDepartment: string;
    jobTitle: string;
}

interface UserInformationDetailsProps {
    userInfo: EdxUserInfo;
    source: "Manual" | "EdFiSync" | null | undefined;
}

const UserInformationDetails = ({ userInfo, source }: UserInformationDetailsProps) => {
    const { userProfile } = useContext(UserProfileContext);
    const { edxAppConfig } = useContext(TEEAuthDataContext); // Removed auth since we use getUser
    const { decodeTokenPayload } = useDecodeToken();
    const { getUser } = useAuthActions();

    const showChangePasswordLink = (): boolean => {
        if (!userProfile) return false;

         // Retrieve the user object from storage
        const user = getUser(); // Retrieve the user object from storage
        if (!user) return false;

        const tokenPayload = decodeTokenPayload(user.access_token);

        console.log("idp", tokenPayload.idp);

        if (tokenPayload.idp === "local") return true;

        return false;
    };

    const generateChangePasswordUrl = () => {
        return ""; // Implement the logic to generate the change password URL
    };

    return (
        <Flex flexDir="column" w="full">
            <Text fontFamily="Poppins">
                Below you'll find your profile information for Acme Service Center. Some of the
                information below cannot be edited within Acme Service Center as it is pulled in
                from your District or Charter School's HR system.
            </Text>
            <Flex alignItems="center" mt="32px">
                <Text fontFamily="Poppins" fontWeight="700" fontSize="20px">
                    User Information
                </Text>
                <InfoIcon
                    color="blue.600"
                    fontSize="20px"
                    ml="10px"
                    focusable={false}
                    aria-label="info-icon"
                />
            </Flex>
            <Text fontFamily="Poppins" fontWeight="700" mt="16px">
                Email
            </Text>
            <Text fontFamily="Poppins" fontWeight="400" size="sm">
                {userInfo.email}
            </Text>

            <Text fontFamily="Poppins" fontWeight="700" mt="16px">
                Title
            </Text>
            <Text fontFamily="Poppins" fontWeight="400" size="sm">
                {`${userInfo.jobTitle} ${userInfo.jobDepartment}`}
            </Text>

            <Text fontFamily="Poppins" fontWeight="700" mt="16px">
                Organization
            </Text>
            <Text fontFamily="Poppins" fontWeight="400" size="sm">
                {userInfo.organization}
            </Text>
            <Flex mt="12px">
                {showChangePasswordLink() && (
                    <Link
                        color="blue.500"
                        fontSize="14px"
                        fontFamily="Poppins"
                        fontWeight="700"
                        href={generateChangePasswordUrl()}
                    >
                        Looking to change your password? Click here to receive an email with a reset
                        password link.
                    </Link>
                )}
            </Flex>
        </Flex>
    );
};

export default UserInformationDetails;
