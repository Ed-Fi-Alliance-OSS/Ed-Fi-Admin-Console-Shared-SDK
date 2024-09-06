import { InfoIcon } from "@chakra-ui/icons"
import { Flex, Link, Text } from "@chakra-ui/react"
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
        if (!userProfile || !edxAppConfig) 
            return ""

        const tenantId = userProfile.tenantId
        const userName = encodeURIComponent(userProfile.userName)
        const forgotPasswordUrl = edxAppConfig.auth.authority

        const url = `${forgotPasswordUrl}/Account/ForgotPassword?userName=${userName}&returnUrl=/?acr_values=tenant:${tenantId}`

        return url
    }

    return (
        <Flex flexDir='column' w='full'>
            <Text
                fontFamily='Open sans'>
                    Below you'll find your profile information for The Exchange.
                    Some of the information below cannot be edited within The Exchange as it is 
                    pulled in from your District or Charter School's HR system.
            </Text>
            <Flex alignItems='center' mt='32px'>
                <Text
                    fontFamily='Poppins'
                    fontWeight='700'
                    fontSize='20px'>User Information</Text>
                <InfoIcon 
                    color='blue.600' 
                    fontSize='20px' 
                    ml='10px' 
                    focusable={false}
                    aria-label="info-icon" />
            </Flex>
            <Text
                fontFamily='Open sans'
                fontWeight='700'
                mt='16px'>
                    Email
            </Text>
            <Text
                fontFamily='Open sans'
                fontWeight='400'
                size='sm'>{userInfo.email}</Text>

            <Text
                fontFamily='Open sans'
                fontWeight='700'
                mt='16px'>
                    Title
            </Text>
            <Text
                fontFamily='Open sans'
                fontWeight='400'
                size='sm'>{`${userInfo.jobTitle} ${userInfo.jobDepartment}`}</Text>

            <Text
                fontFamily='Open sans'
                fontWeight='700'
                mt='16px'>
                    Organization
            </Text>
            <Text
                fontFamily='Open sans'
                fontWeight='400'
                size='sm'>{userInfo.organization}</Text>
            <Flex mt='12px'>
                { showChangePasswordLink() && <Link
                    color='blue.500'
                    fontSize='14px'
                    fontFamily='open sans'
                    fontWeight='700'
                    href={generateChangePasswordUrl()}>
                        Looking to change your password? Click here to receive an email with a reset password link.
                </Link> }
            </Flex>
        </Flex>
    )
}

export default UserInformationDetails