import { Box, Flex, List } from "@chakra-ui/react"
import { IMessage } from "@novu/notification-center"
import NotificationItem from "./NotificationItem"

interface NotificationItemListProps {
    notificationsList: IMessage[]
    infiniteScroll: boolean
    mode: 'read' | 'unread'
    onMarkNotificationAsRead: (messageId: string) => void
    onRemoveNotification: (messageId: string) => void
}

const NotificationItemList = ({ notificationsList, infiniteScroll, mode, onMarkNotificationAsRead, onRemoveNotification }: NotificationItemListProps) => {
    const getGradientNotification = () => {
        if (notificationsList.length > 3)
            return notificationsList.slice(0, 4)[3]

        return notificationsList[0]
    }

    const shouldShowGradientNotification = () => {
        if (notificationsList.length > 3 && !infiniteScroll)
            return true

        return false
    }

    const selectAmountOfItemsToShow = () => {
        if (notificationsList.length > 3 && infiniteScroll)
            return notificationsList.length

        return 3
    }

    return (
        <List.Root>
            {notificationsList.map((notification) =>
                <List.Item
                    key={notification._id}
                    _notFirst={{ mt: '10px' }}>
                        <NotificationItem
                            data={notification}
                            onMarkAsRead={onMarkNotificationAsRead}
                            onRemoveNotification={onRemoveNotification} />
                </List.Item>).slice(0, selectAmountOfItemsToShow())}
            {shouldShowGradientNotification() &&
            <List.Item
                key={getGradientNotification()._id}
                _notFirst={{ mt: '10px' }}>
                    <Flex
                        className="gradient"
                        h='115px'
                        w='full'
                        position='relative'
                        zIndex='2'>
                            <NotificationItem
                                data={getGradientNotification()}
                                onMarkAsRead={onMarkNotificationAsRead}
                                onRemoveNotification={onRemoveNotification} />
                            <Box
                                className="abs-flex"
                                bgGradient='linear(to-b, transparent, #ffffffb1, white)'
                                position='absolute'
                                h='115px'
                                w='100%' />
                    </Flex>
            </List.Item>}
        </List.Root>
    )
}

export default NotificationItemList
