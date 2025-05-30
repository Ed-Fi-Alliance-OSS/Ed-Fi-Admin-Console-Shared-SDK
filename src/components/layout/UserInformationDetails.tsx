import { AiOutlineInfoCircle } from "react-icons/ai"
import { Flex, Link, Text, Box } from "@chakra-ui/react"
import { useContext } from "react"
import { TEEAuthDataContext, UserProfileContext } from "../../context"
import useDecodeToken from "../../hooks/useDecodeToken"

interface EdxUserInfo {
    email: string
    firstName: string
    lastName: string
    organization: string
    jobDepartment: string
    jobTitle: string
}

interface UserInformationDetailsProps {
    userInfo: EdxUserInfo
    source: 'Manual' | 'EdFiSync' | null | undefined
}

const UserInformationDetails = ({ userInfo, source }: UserInformationDetailsProps) => {
    const { userProfile } = useContext(UserProfileContext)
    const { edxAppConfig, auth } = useContext(TEEAuthDataContext)
    const { decodeTokenPayload } = useDecodeToken()

    const showChangePasswordLink = (): boolean => {
        if (!userProfile || !auth || !auth.user)
            return false

        const tokenPayload = decodeTokenPayload(auth.user.access_token)

        console.log('idp', tokenPayload.idp)

        if (tokenPayload.idp == "local")
            return true

        return false
    }

    const generateChangePasswordUrl = () => {
        return ''
    }

    return (
        <Flex direction="column" width="full">
            <Text fontFamily="Poppins">
                Below you'll find your profile information for Acme Service Center.
                Some of the information below cannot be edited within Acme Service Center as it is
                pulled in from your District or Charter School's HR system.
            </Text>
            <Flex alignItems="center" marginTop="32px">
                <Text
                    fontFamily="Poppins"
                    fontWeight="700"
                    fontSize="20px">User Information</Text>
                <Box marginLeft="10px" color="blue.600">
                    <AiOutlineInfoCircle
                        fontSize="20px"
                        focusable={false}
                        aria-label="info-icon" />
                </Box>
            </Flex>
            <Text
                fontFamily="Poppins"
                fontWeight="700"
                marginTop="16px">
                    Email
            </Text>
            <Text
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="sm">{userInfo.email}</Text>

            <Text
                fontFamily="Poppins"
                fontWeight="700"
                marginTop="16px">
                    Title
            </Text>
            <Text
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="sm">{`${userInfo.jobTitle} ${userInfo.jobDepartment}`}</Text>

            <Text
                fontFamily="Poppins"
                fontWeight="700"
                marginTop="16px">
                    Organization
            </Text>
            <Text
                fontFamily="Poppins"
                fontWeight="400"
                fontSize="sm">{userInfo.organization}</Text>
            <Flex marginTop="12px">
                { showChangePasswordLink() && <Link
                    color="blue.500"
                    fontSize="14px"
                    fontFamily="Poppins"
                    fontWeight="700"
                    href={generateChangePasswordUrl()}>
                        Looking to change your password? Click here to receive an email with a reset password link.
                </Link> }
            </Flex>
        </Flex>
    )
}

export default UserInformationDetails
