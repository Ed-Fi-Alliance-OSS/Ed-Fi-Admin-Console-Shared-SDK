import { Flex, Img, Text } from '@chakra-ui/react'
import { IMessage } from '@novu/notification-center'
import useImagesLinkUrl from '../../hooks/useImagesLinkUrl'

interface NotificationItemLeftProps {
    data: IMessage
}

const NotificationItemLeft = ({ data }: NotificationItemLeftProps) => {
    const { getAssetsUrl } = useImagesLinkUrl()
    
    const getCreatedByInitials = (data: IMessage) => {
        if (data.payload.createdByUser) {
            const createdByUser: any = data.payload.createdByUser

            return `${createdByUser.firstName[0]}${createdByUser.lastName[0]}`
        }

        return "TX"
    }

    if (data.payload.from) {
        if (data.payload.from === 'Acme Service Center') {
            return (
                <Flex w='32px'> 
                    <Img 
                        position='absolute'
                        src={data.seen? `${getAssetsUrl()}/exchange-read-symbol.png` : `${getAssetsUrl()}/exchange-unread-symbol.png`}
                        top='0'
                        left='0'
                        h='100px'
                        w='50px'
                        alt='' />
                </Flex>
            )
        }
        
        return (
            <Flex w='32px' /> 
        )
    }
    
    return (
        <Flex
            alignItems='center'
            justifyContent='center'
            bg='blue.500'
            borderRadius='full'
            h='32px'
            w='32px'>
                <Text 
                    color='white'
                    fontFamily='Poppins'
                    fontWeight='600'
                    fontSize='12px'>
                        {getCreatedByInitials(data)}
                </Text>
        </Flex>
    )
}

export default NotificationItemLeft