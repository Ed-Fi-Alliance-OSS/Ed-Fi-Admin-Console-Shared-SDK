import { Flex, Text } from "@chakra-ui/react"

type Size = 'lg' | 'md' | 'sm' | 'xs'

interface UserInfoProps {
    userFirstName: string 
    userLastName: string 
    userEmail: string 
    size: Size
    showName?: boolean
    showAvatar?: boolean
    showEmail?: boolean
}

const getCircleHeightSize = (size: Size) => {
    if (size === 'lg') return '64px'

    if (size === 'md') return '48px'

    if (size === 'sm') return '32px'

    return '24px'
}

const getCircleWidthSize = (size: Size) => {
    if (size === 'lg') return '64px'

    if (size === 'md') return '48px'

    if (size === 'sm') return '32px'

    return '24px'
}

const getCircleTextSize = (size: Size) => {
    if (size === 'lg') return '16px'

    if (size === 'md') return '14px'

    if (size === 'sm') return '12px'

    return '12px'
}

const getNameSize = (size: Size) => {
    if (size === 'lg') return '18px'

    if (size === 'md') return '14px'

    if (size === 'sm') return '12px'

    return '12px'
}

const UserInfo = ({ userEmail, userFirstName, userLastName, size, showName, showAvatar, showEmail }: UserInfoProps) => {
    return (
        <Flex alignItems='center' w='full'>
            {(showAvatar === undefined || showAvatar) && <Flex
                alignItems='center'
                justifyContent='center'
                bg='blue.500'
                borderRadius='full'
                h={getCircleHeightSize(size)}
                w={getCircleWidthSize(size)}>
                    <Text 
                        color='white'
                        fontFamily='Poppins'
                        fontWeight='600'
                        fontSize={getCircleTextSize(size)}>
                            {`${userFirstName[0]}${userLastName[0]}`}
                    </Text>
            </Flex>}
            {(showName !== false || showEmail !== false) && <Flex ml='10px' flexDir='column' w='auto'>
                {showName !== false && <Text
                    fontFamily='Poppins'
                    fontWeight='700'
                    fontSize={getNameSize(size)}>
                        {`${userFirstName} ${userLastName}`} asdasds
                </Text>}
                {showEmail !== false && <Text
                    color='#455763'
                    fontFamily='Open sans'
                    fontWeight='400'
                    fontSize='12px'>{userEmail}</Text>}
            </Flex>}
        </Flex>
    )
}

export default UserInfo