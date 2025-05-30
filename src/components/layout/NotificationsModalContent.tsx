import { Button, Flex, Spinner, Text } from "@chakra-ui/react"
import { IMessage } from "@novu/notification-center"
import InfiniteScroll from "react-infinite-scroll-component"
import NotificationItemList from "../common/NotificationItemList"
import NotificationsEmptyMessage from "../common/NotificationsEmptyMessage"

interface NotificationsModalContentProps {
    readNotifications: IMessage[]
    unReadNotifications: IMessage[]
    unseenCount: number
    unreadInfiniteScroll: boolean
    readInfiniteScroll: boolean
    isLoading: boolean
    isFetching: boolean
    scrollHasNextPage?: boolean
    onScrollFetch: () => void
    onActivateUnreadInfiniteScroll: () => void
    onActivateReadInfiniteScroll: () => void
    onMarkAllAsRead: () => void
    onMarkNotificationAsRead: (messageId: string) => void
    onRemoveNotification: (notificationId: string) => void
}

const NotificationsModalContent = ({ readNotifications, unReadNotifications, unseenCount, unreadInfiniteScroll, readInfiniteScroll, scrollHasNextPage, onScrollFetch, isLoading, isFetching, onActivateUnreadInfiniteScroll, onActivateReadInfiniteScroll, onMarkAllAsRead, onMarkNotificationAsRead, onRemoveNotification }: NotificationsModalContentProps) => {
    const handleMarkAllRead = () => onMarkAllAsRead()

    return (
        <>
            <Flex alignItems='center' justifyContent='space-between' w='full'>
                <Flex alignItems='center' w='full'>
                    <Text
                        fontFamily='Poppins'
                        fontWeight='700'
                        fontSize='lg'>Unread</Text>
                    <Flex
                        alignItems='center'
                        justifyContent='center'
                        borderRadius='4px'
                        bg='orange.100'
                        ml='10px'
                        h='20px'
                        w='20px'>
                            <Text
                                fontFamily='Poppins'
                                fontWeight='400'
                                fontSize='xs'>
                                    {unseenCount}
                            </Text>
                    </Flex>
                </Flex>
                <Button
                    onClick={handleMarkAllRead}
                    color='blue.500'
                    fontFamily='Poppins'
                    fontWeight='700'
                    size='md'
                    _hover={{ bg: 'white' }}>
                        Mark All As Read
                </Button>
            </Flex>
            <Flex id="infinite-scroll-section" flexDirection='column' mt='16px' h='500px' overflowY={unreadInfiniteScroll? "scroll" : "unset"}>
                { unreadInfiniteScroll && unReadNotifications && unReadNotifications.length > 0 && <InfiniteScroll
                        dataLength={unReadNotifications.length}
                        hasMore={scrollHasNextPage !== undefined && scrollHasNextPage}
                        next={onScrollFetch}
                        loader={<Spinner color='blue.500' size='lg' ml='234px' />}
                        scrollableTarget="infinite-scroll-section">
                            <NotificationItemList
                                mode="unread"
                                infiniteScroll={unreadInfiniteScroll}
                                notificationsList={unReadNotifications}
                                onMarkNotificationAsRead={onMarkNotificationAsRead}
                                onRemoveNotification={onRemoveNotification} />
                    </InfiniteScroll> }
                { !unreadInfiniteScroll && unReadNotifications && unReadNotifications.length > 0 &&
                    <NotificationItemList
                        mode="unread"
                        infiniteScroll={unreadInfiniteScroll}
                        notificationsList={unReadNotifications}
                        onMarkNotificationAsRead={onMarkNotificationAsRead}
                        onRemoveNotification={onRemoveNotification} /> }
                { !unreadInfiniteScroll && unReadNotifications && unReadNotifications.length === 0 &&
                    <NotificationsEmptyMessage notificationsType="unread" /> }
                { unReadNotifications && unReadNotifications.length >= 4 && !unreadInfiniteScroll &&
                    <Flex mt='16px'>
                        <Button
                            onClick={onActivateUnreadInfiniteScroll}
                            color='blue.500'
                            fontFamily='Poppins'
                            fontSize='16px'
                            fontWeight='700'
                            mx='auto'>
                                Scroll for More
                        </Button>
                    </Flex>}
            </Flex>
            <Flex mt='32px' alignItems='center' w='full'>
                <Text
                    fontFamily='Poppins'
                    fontWeight='700'
                    fontSize='lg'>Read</Text>
            </Flex>
            <Flex id="infinite-scroll-read-notifications-section" flexDirection='column' mt='16px' height='540px' overflowY={readInfiniteScroll ? "scroll" : "unset"}>
                { readNotifications && readNotifications.length > 0 &&
                    <NotificationItemList
                        infiniteScroll={readInfiniteScroll}
                        mode="read"
                        notificationsList={readNotifications}
                        onMarkNotificationAsRead={onMarkNotificationAsRead}
                        onRemoveNotification={onRemoveNotification} /> }
                { !readInfiniteScroll && readNotifications  && readNotifications.length === 0 &&
                    <NotificationsEmptyMessage notificationsType="read" />}
                { readNotifications && readNotifications.length >= 4 && !readInfiniteScroll &&
                    <Flex mt='16px' mb='16px'>
                        <Button
                            onClick={onActivateReadInfiniteScroll}
                            color='blue.500'
                            fontFamily='Poppins'
                            fontSize='16px'
                            fontWeight='700'
                            mx='auto'>
                                Scroll for More
                        </Button>
                    </Flex>
                }
            </Flex>
        </>
    )
}

export default NotificationsModalContent
