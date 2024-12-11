import { Text } from '@chakra-ui/react'
import { Interweave } from 'interweave'

interface NotificationItemContentProps {
    content: string
}

const NotificationItemContent = ({ content }: NotificationItemContentProps) => {
    return (
        <Text 
            fontFamily='Poppins'
            fontWeight='400'
            size='md'
            _first={{ '& > a': { color: 'blue.500', fontWeight: '700' } }}>
                <Interweave 
                    noWrap
                    content={content} />
        </Text>
    )
}

export default NotificationItemContent