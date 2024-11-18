import { QuestionIcon } from "@chakra-ui/icons"
import { Flex, Link, useColorModeValue } from "@chakra-ui/react"
import { useContext } from "react"
import { TEEAuthDataContext } from "../../context"
import { UserProfile } from "../../core"
import useHelpLink from "../../hooks/useHelpLink"
import useSettingsModal from "../../hooks/useSettingsModal"
import TopBarProfilePopover from "./TopBarProfilePopover"

interface TopBarInfoProps {
  profileData: UserProfile | null;
  isClosingSession: boolean;
  onLogIn: () => Promise<void>;
  onLogOut: () => Promise<void>;
}

const TopBarInfo = ({
  profileData,
  isClosingSession,
  onLogIn,
  onLogOut,
}: TopBarInfoProps) => {
  const { getHelpLink } = useHelpLink();
  const iconsColor = useColorModeValue("blue.900", "white");
  const { showSettingsModal, hideSettingsModal, openSettingsModal } =
    useSettingsModal();
  const { edxAppConfig } = useContext(TEEAuthDataContext);

  return (
    <Flex alignItems="center">
      {/* <NotificationsBtn
        profileData={profileData}
        notificationsSubscriberId={profileData ? profileData.email : ""}
        notificationsAppId={
          edxAppConfig ? edxAppConfig.app.notificationsApplicationId ?? "" : ""
        }
      /> */}
      {/* {(
        <Button
          aria-label="Show search menu"
          border="none"
          padding="0"
          marginRight="10px"
          variant="icon"
        >
          <SearchIcon aria-description="Search Icon" color={iconsColor} />
        </Button>
      )} */}
      {/* {(
        <Flex marginRight="10px">
          <ToggleModeBtn />
        </Flex>
      )} */}
      {/* {(
        <Button
          aria-label="Open settings modal"
          onClick={openSettingsModal}
          border="none"
          padding="0"
          marginRight="10px"
          variant="icon"
        >
          <SettingsIcon color={iconsColor} />
          <TopBarSettingsModal
            show={showSettingsModal}
            onClose={hideSettingsModal}
          />
        </Button>
      )} */}
      {edxAppConfig 
        && edxAppConfig.app 
        && edxAppConfig.app.helpLinkUrl && (
        <Link
          href={getHelpLink()}
          border="none"
          padding="0"
          marginRight="10px"
          // target="_blank"
          referrerPolicy="no-referrer"
          aria-label="Get help"
        >
          <QuestionIcon
            color={iconsColor}
            aria-description="Get Help Icon"
            aria-hidden="true"
            focusable="false"
          />
        </Link>
      )}
      <TopBarProfilePopover
        isClosingSession={isClosingSession}
        profileData={profileData}
        onLogIn={onLogIn}
        onLogOut={onLogOut}
      />
    </Flex>
  );
};

export default TopBarInfo;
