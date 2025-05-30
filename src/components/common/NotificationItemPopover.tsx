import {
  Button,
  Flex,
  Popover,
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
    <Popover.Root>
      <Popover.Trigger>
        <Flex
          as="div"
          role="button"
          tabIndex={0}
          aria-label='Open notification menu'
          color='blue.900'
          minW='auto'
          padding='2px'
          cursor='pointer'
          _hover={{ bg: 'orange.100' }}
          _focus={{ boxShadow: 'outline' }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        >
          <HiDotsVertical size='20px' />
        </Flex>
      </Popover.Trigger>
      <Popover.Content>
        <Flex aria-label="Notification Popover" w='150px'>
          <Popover.Body>
            <Flex flexDir='column' w='full'>
              {!wasRead && <Button
                aria-label="Mark notification as read"
                color='gray.700'
                fontFamily='Poppins'
                fontWeight='400'
                onClick={() => onMarkAsRead(messageId)}
                _hover={{ bg: "gray.100" }}
                w='full'>
                Mark as Read
              </Button>}
              {wasRead && <Button
                aria-label='Remove notification'
                color='gray.700'
                fontFamily='Poppins'
                fontWeight='400'
                onClick={() => onRemove(messageId)}
                _hover={{ bg: "gray.100" }}
                w='full'>
                Remove
              </Button>}
            </Flex>
          </Popover.Body>
        </Flex>
      </Popover.Content>
    </Popover.Root>
  )
}

export default NotificationItemPopover
