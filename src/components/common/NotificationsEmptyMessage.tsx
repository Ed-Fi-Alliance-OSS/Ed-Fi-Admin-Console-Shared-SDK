import { FaBell } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/react"

interface NotificationsEmptyMessageProps {
    notificationsType: 'read' | 'unread'
}

const NotificationsEmptyMessage = ({ notificationsType }: NotificationsEmptyMessageProps) => {
    return (
        <Flex flexDir='column' alignItems='center' justifyContent='center' mt='10px' w='full'>
            <Flex color='gray.300' justifyContent='center' position='relative' w='full'>
                <FaBell
                    color='gray.300'
                    fontSize='60px' />
            </Flex>
            <Text
                color='gray.700'
                fontFamily='Poppins'
                fontWeight='400'
                mt='12px'
                fontSize='sm'>
                    {notificationsType === 'read'? 'You have 0 notifications' : 'You have 0 new notifications'}
            </Text>
        </Flex>
    )
}

export default NotificationsEmptyMessage
