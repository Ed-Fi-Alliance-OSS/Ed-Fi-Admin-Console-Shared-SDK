import { FaBell } from "react-icons/fa";
import { Button, Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/system";

import { NovuProvider, useNovuContext } from "@novu/notification-center";
import { useMemo, useState } from "react";
import NotificationsModal from "../layout/NotificationsModal";
import { UserProfile } from "../../core";

interface InitializeSessionProps {
  applicationId: string;
  subscriberId: string;
  hmacHash?: any;
  firstName?: string;
  lastName?: string;
  email?: string;
  children: JSX.Element;
}

const InitializeSession = ({
  applicationId,
  subscriberId,
  hmacHash,
  firstName,
  lastName,
  email,
  children,
}: InitializeSessionProps) => {
  const novuContext = useNovuContext();

  const haveRequiredInformation =
    firstName !== undefined && lastName !== undefined && email !== undefined;

  useMemo(() => {
    novuContext.apiService.initializeSession(
      applicationId,
      subscriberId,
      hmacHash,
      firstName,
      lastName,
      email
    );
  }, [
    applicationId,
    subscriberId,
    hmacHash,
    novuContext,
    haveRequiredInformation,
  ]);

  return <>{children}</>;
};

interface NotificationsPopoverProps {
  notificationsSubscriberId: string;
  notificationsAppId: string;
  profileData: UserProfile | null;
}

const NotificationsBtn = ({
  notificationsAppId,
  notificationsSubscriberId,
  profileData,
}: NotificationsPopoverProps) => {
  const [showNotificationsModal, setShowNotificationsModal] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(false);
  const iconColor = useColorModeValue("blue.900", "white");

  const handleShowNotificationsModal = () => setShowNotificationsModal(true);
  const handleHideNotificationsModal = () => setShowNotificationsModal(false);

  const handleHasUnseenNotifications = () => setHasNotifications(true);
  const handleHasZeroNotifications = () => setHasNotifications(false);

  const subscriberId =
    notificationsSubscriberId && notificationsSubscriberId !== ""
      ? notificationsSubscriberId
      : "example@mail.com";

  const applicationId =
    notificationsAppId && notificationsAppId !== ""
      ? notificationsAppId
      : "OTQ2Hx_DE60g";

  return (
    <Flex marginRight="10px">
      <NovuProvider
        subscriberId={subscriberId}
        applicationIdentifier={applicationId}
        initialFetchingStrategy={{
          fetchNotifications: true,
          fetchUserPreferences: true,
        }}
      >
        <InitializeSession
          applicationId={applicationId}
          subscriberId={subscriberId}
          firstName={profileData?.firstName}
          lastName={profileData?.lastName}
          email={profileData?.email}
        >
          <Button
            aria-label="Open notifications modal"
            onClick={handleShowNotificationsModal}
            display="flex"
            position="relative"
            padding="0"
            border="none"
            variant="solid" //"icon"
          >
            {hasNotifications && (
              <Flex
                bg="orange.400"
                position="absolute"
                top="5px"
                right="8px"
                borderRadius="full"
                h="8px"
                w="8px"
              />
            )}
            <FaBell
              color={iconColor}
              height="18px"
              width="100%"
              aria-hidden="true"
              focusable="false"
              aria-description="Notifications Icon"
            />
          </Button>
        </InitializeSession>
        <NotificationsModal
          show={showNotificationsModal}
          onClose={handleHideNotificationsModal}
          onActiveNotifications={handleHasUnseenNotifications}
          onZeroNotifications={handleHasZeroNotifications}
        />
      </NovuProvider>
    </Flex>
  );
};

export default NotificationsBtn;
