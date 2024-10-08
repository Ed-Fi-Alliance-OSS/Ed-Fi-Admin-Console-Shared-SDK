import { useEffect, useState } from "react";
import {
  IMessage,
  useFetchNotifications,
  useNotifications,
} from "@novu/notification-center";
import NotificationsModalContent from "./NotificationsModalContent";
import getDaysDifference from "../../helpers/getDaysDifference";
import EdxModalContentWrapper from "./EdxModalContentWrapper";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";

interface NotificationsModalProps {
  show: boolean;
  onClose: () => void;
  onActiveNotifications: () => void;
  onZeroNotifications: () => void;
}

const NotificationsModal = ({
  show,
  onClose,
  onActiveNotifications,
  onZeroNotifications,
}: NotificationsModalProps) => {
  const [unreadNotifications, setUnreadNotifications] = useState<IMessage[]>(
    []
  );
  const [unseenNotifications, setUnseenNotifications] = useState<IMessage[]>(
    []
  );
  const [readNotifications, setReadNotifications] = useState<IMessage[]>([]);

  const [hasFetchedNotifications, setHasFetchedReadNotifications] =
    useState<boolean>(false);

  const {
    notifications,
    isLoading,
    isFetching,
    removeMessage,
    markNotificationAsRead,
    markAllNotificationsAsRead,
  } = useNotifications();

  const { fetchNextPage, hasNextPage, refetch } = useFetchNotifications({
    query: {
      limit: 50,
    },
  });

  useEffect(() => {
    if (isFetching && !hasFetchedNotifications)
      setHasFetchedReadNotifications(true);
    if (!isFetching && hasFetchedNotifications)
      if (hasNextPage) fetchNextPage();
  }, [isFetching]);

  const [unreadInfiniteScroll, setUnreadInfiniteScroll] = useState(false);
  const [readInfiniteScroll, setReadInfiniteScroll] = useState(false);

  const onRemoveNotification = (messageId: string) => {
    removeMessage(messageId);
    refetch();
  };

  const onMarkAllAsRead = () => {
    markAllNotificationsAsRead();
    onZeroNotifications();

    refetch();
  };

  const onActivateUnreadInfiniteScroll = () => {
    if (unreadNotifications.length > 3) setUnreadInfiniteScroll(true);
  };

  const onActivateReadInfiniteScroll = () => {
    if (readNotifications.length > 3) setReadInfiniteScroll(true);
  };

  const shouldBeRemoved = (notification: IMessage) => {
    if (!notification.lastReadDate) return false;

    const readDate = new Date(notification.lastReadDate);
    const currentDate = new Date(Date.now());

    const days = getDaysDifference({
      start: readDate,
      end: currentDate,
    });

    const validCodes = ["Acme Service Center", "Acme Service Center"];
    if (
      notification.payload.from &&
      (notification.payload.from === validCodes[0] ||
        notification.payload.from === validCodes[1]) &&
      days > 7
    )
      return true;
    if (
      notification.payload.from &&
      notification.payload.from !== validCodes[0] &&
      notification.payload.from !== validCodes[1] &&
      days > 1
    )
      return true;

    return false;
  };

  const handleReadNotifications = (readNotifications: IMessage[]) => {
    const notificationsToShow = readNotifications.filter(
      (notification) => !shouldBeRemoved(notification)
    );
    const notificationsToDelete = readNotifications.filter((notification) =>
      shouldBeRemoved(notification)
    );

    if (notificationsToDelete.length > 0)
      removeMessage(notificationsToDelete[0]._id);

    return notificationsToShow;
  };

  const selectUnreadNotifications = (notificationsList: IMessage[]) =>
    notificationsList.filter((notification) => !notification.read);
  const selectUnseenNotifications = (notificationsList: IMessage[]) =>
    notificationsList.filter((notification) => !notification.seen);

  useEffect(() => {
    if (notifications && notifications.length > 0) {
      const unreadNotifications = selectUnreadNotifications(notifications);
      const unseenNotifications = selectUnseenNotifications(notifications);
      const readNotifications = handleReadNotifications(
        notifications.filter((notification) => notification.read)
      );

      setUnreadNotifications(unreadNotifications);
      setUnseenNotifications(unseenNotifications);
      setReadNotifications(readNotifications);
    }
  }, [notifications]);

  useEffect(() => {
    if (unseenNotifications && unseenNotifications.length > 0)
      return onActiveNotifications();

    onZeroNotifications();
  }, [unreadNotifications, unseenNotifications, readNotifications]);

  return (
    <Modal isOpen={show} onClose={onClose} motionPreset="slideInRight">
      <ModalOverlay />
      <ModalContent
        borderRadius="0"
        top="0rem"
        mt="0"
        h="100vh"
        marginLeft="auto"
        maxW="629px"
        w="629px"
      >
        <ModalCloseButton />
        <ModalBody
          bg="#eff4f6"
          padding="111px 67px 463px 42px"
          left="0"
          w="629px"
          maxW="629x"
        >
          <EdxModalContentWrapper
            heading="Notifications"
            hideControls={true}
            isSavingChanges={false}
            onSave={() => null}
            onCancel={onClose}
          >
            <NotificationsModalContent
              unReadNotifications={unreadNotifications}
              readNotifications={readNotifications}
              unseenCount={unreadNotifications ? unreadNotifications.length : 0}
              isLoading={isLoading}
              isFetching={isFetching}
              unreadInfiniteScroll={unreadInfiniteScroll}
              readInfiniteScroll={readInfiniteScroll}
              scrollHasNextPage={hasNextPage}
              onActivateUnreadInfiniteScroll={onActivateUnreadInfiniteScroll}
              onActivateReadInfiniteScroll={onActivateReadInfiniteScroll}
              onMarkNotificationAsRead={markNotificationAsRead}
              onMarkAllAsRead={onMarkAllAsRead}
              onRemoveNotification={onRemoveNotification}
              onScrollFetch={fetchNextPage}
            />
          </EdxModalContentWrapper>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default NotificationsModal;
