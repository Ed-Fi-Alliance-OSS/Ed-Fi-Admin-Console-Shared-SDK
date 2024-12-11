import {
    Button,
    Flex,
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverTrigger,
} from '@chakra-ui/react'
import { HiDotsVertical } from "react-icons/hi"

interface NotificationItemPopoverProps {
    messageId: string 
    wasRead: boolean
    onMarkAsRead: (messageId: string) => void
    onRemove: (messageId: string) => void
}

const NotificationItemPopover = ({ messageId, wasRead, onMarkAsRead, onRemove }: NotificationItemPopoverProps) => {
    return (
        <Popover>
            <PopoverTrigger>
                <Button 
                    aria-label='Open notification menu'
                    color='blue.900'
                    variant='simple'
                    minW='auto'
                    _hover={{ bg: 'orange.100' }}
                    padding='2px'>
                        <HiDotsVertical size='20px' />
                </Button>
            </PopoverTrigger>
            <PopoverContent aria-label="Notification Popover" w='150px'>
                <PopoverBody>
                    <Flex flexDir='column' w='full'>
                        {!wasRead && <Button    
                            aria-label="Mark notification as read"
                            color='gray.700'
                            fontFamily='Poppins'
                            fontWeight='400'
                            onClick={() => onMarkAsRead(messageId)}
                            _hover={{ bg: "#e9ecf7" }}
                            w='full'>
                                Mark as Read
                        </Button>}
                        { wasRead && <Button    
                            aria-label='Remove notification'
                            color='gray.700'
                            fontFamily='Poppins'
                            fontWeight='400'
                            onClick={() => onRemove(messageId)}
                            _hover={{ bg: "#e9ecf7" }}
                            w='full'>
                                Remove
                        </Button> }
                    </Flex>
                </PopoverBody>
            </PopoverContent>
        </Popover>
    )
}

export default NotificationItemPopover