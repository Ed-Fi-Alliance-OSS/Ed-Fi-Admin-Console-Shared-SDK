import {
  Button,
  Flex,
  SkipNavContent,
  Text
} from "@chakra-ui/react"
import { HiUsers } from "react-icons/hi"
import { RiUserSettingsLine } from "react-icons/ri"
import { TbArrowsLeftRight } from "react-icons/tb"
import {
  Footer,
  RightSlideInPanel,
  RightSlideInPanelHeader,
  TopBar,
  TopBarLeft,
  TopBarRight,
} from "./components"
import { AppsMenuMoreOption } from "./components/common/AppsMenu.types"
import SideBar, { SideBarMenuItemData } from "./components/layout/SideBar"
import { baseTheme } from "./themes"

import { FaCheck as CheckIcon } from "react-icons/fa"
import { useState } from "react"
import { CgHome } from "react-icons/cg"
import { ExternalAppData, EdxAppConfig } from "./core"
import { useUserProfile } from './hooks'
import { EdxConfigProvider } from './context'
import { Provider } from './components/ui/provider'

function App() {
  // Basic configuration for the useConfig hook to fix the useContext error
  const mockConfig: EdxAppConfig = {
    api: {
      edfiApiBaseUri: "",
      edfiAdminApiBaseUri: "",
    },
    app: {
      title: "Admin Console",
      subtitle: "",
      basePath: "/",
    },
    auth: {
      authority: "",
      clientId: "",
      redirectUri: "",
      silentRedirectUri: "",
      postLogoutRedirectUri: "",
      scope: "",
      responseType: "",
      loadUserInfo: true,
      automaticSilentRenew: false,
      automaticSilentSignin: false,
    },
    plugins: [],
  };

  const appsList: ExternalAppData[] = [
    {
      applicationName: "Custom App",
      lightIconUrl:
        "https://assets.edgraph.dev/i/fs/shared/app-icons/admin.svg",
      lightBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/workflows/bg.jpg",
      darkIconUrl:
        "https://assets.edgraph.dev/i/fs/shared/app-icons/workflows-dark.svg",
      darkBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/workflows/bg.jpg",
      applicationUri: "",
      applicationId: "0000-0000-0001",
      isUserLicensed: false,
      isTenantSubscribed: true,
      applicationTenantId: "",
      groups: "",
      openInNewWindow: false,
      showInAppLauncher: true,
      showInQuickLauncher: true,
      subscriptionTenantId: "",
      tags: "",
      tooltipText: "",
      version: "",
    },
    {
      applicationName: "Rally",
      lightIconUrl:
        "https://assets.edgraph.dev/i/fs/apps/tx-education-exchange/rounded/Rally.svg",
      lightBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/validations/bg.jpg",
      darkIconUrl:
        "https://assets.edgraph.dev/i/fs/apps/tx-education-exchange/rounded/Rally.svg",
      darkBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/validations/bg.jpg",
      applicationUri: "",
      applicationId: "",
      isUserLicensed: false,
      isTenantSubscribed: true,
      applicationTenantId: "",
      groups: "",
      openInNewWindow: false,
      showInAppLauncher: true,
      showInQuickLauncher: true,
      subscriptionTenantId: "",
      tags: "",
      tooltipText: "",
      version: "",
    },
    {
      applicationName: "Lorem Ipsum lorem",
      lightIconUrl:
        "https://assets.edgraph.dev/i/fs/shared/app-icons/admin.svg",
      lightBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/workflows/bg.jpg",
      darkIconUrl:
        "https://assets.edgraph.dev/i/fs/shared/app-icons/workflows-dark.svg",
      darkBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/workflows/bg.jpg",
      applicationUri: "",
      applicationId: "",
      isUserLicensed: false,
      isTenantSubscribed: true,
      applicationTenantId: "",
      groups: "",
      openInNewWindow: false,
      showInAppLauncher: true,
      showInQuickLauncher: true,
      subscriptionTenantId: "",
      tags: "",
      tooltipText: "",
      version: "",
    },
    {
      applicationName: "Lorem Ipsum lorem",
      lightIconUrl:
        "https://assets.edgraph.dev/i/fs/shared/app-icons/admin.svg",
      lightBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/workflows/bg.jpg",
      darkIconUrl:
        "https://assets.edgraph.dev/i/fs/shared/app-icons/workflows-dark.svg",
      darkBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/workflows/bg.jpg",
      applicationUri: "",
      applicationId: "",
      isUserLicensed: false,
      isTenantSubscribed: true,
      applicationTenantId: "",
      groups: "",
      openInNewWindow: false,
      showInAppLauncher: true,
      showInQuickLauncher: true,
      subscriptionTenantId: "",
      tags: "",
      tooltipText: "",
      version: "",
    },
    {
      applicationName: "Lorem Ipsum lorem",
      lightIconUrl:
        "https://assets.edgraph.dev/i/fs/shared/app-icons/admin.svg",
      lightBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/workflows/bg.jpg",
      darkIconUrl:
        "https://assets.edgraph.dev/i/fs/shared/app-icons/workflows-dark.svg",
      darkBackgroundTileUrl:
        "https://assets.edgraph.dev/i/fs/apps/workflows/bg.jpg",
      applicationUri: "",
      applicationId: "",
      isUserLicensed: false,
      isTenantSubscribed: true,
      applicationTenantId: "",
      groups: "",
      openInNewWindow: false,
      showInAppLauncher: true,
      showInQuickLauncher: true,
      subscriptionTenantId: "",
      tags: "",
      tooltipText: "",
      version: "",
    },
  ]

  const moreOptions: AppsMenuMoreOption[] = [
    { name: "Account Info", url: null },
    {
      name: "Online Community",
      url: "https://apps.txedexchange.dev/community/dashboard",
    },
    { name: "Help", url: null },
  ]

  const logout = async () => {
    await Promise.resolve()
  }

  const login = async () => {
    await Promise.resolve()
  }

  const items: SideBarMenuItemData[] = [
    {
      text: "All Students",
      id: "allStudents",
      icon: <RiUserSettingsLine />,
      accessibleByRole: ["admin"],
    },
    {
      text: "Manage Students",
      id: "manageStudents",
      icon: <HiUsers />,
      accessibleByRole: ["admin"],
    },
    {
      text: "Home",
      id: "home",
      accessibleByRole: ["admin"],
      subItems: [
        { id: "homeSubItem1", text: "SubItem 1" },
        { id: "homeSubItem2", text: "SubItem 2" },
        { id: "homeSubItem3", text: "SubItem 3" },
        { id: "homeSubItem4", text: "SubItem 4" },
      ],
      icon: <CgHome />,
    },
    {
      text: "Transfer Student Information",
      id: "transferStudentInfo",
      icon: <TbArrowsLeftRight />,
      accessibleByRole: ["admin"],
    },
    {
      text: "Student Dashboards Example",
      id: "check",
      accessibleByRole: ["admin", "user"],
      subItems: [
        { id: "checkSubItem1", text: "Student Course Enrollment" },
        { id: "checkSubItem2", text: "SubItem 2" },
        { id: "checkSubItem3", text: "SubItem 3" },
        { id: "checkSubItem4", text: "SubItem 4" },
      ],
      icon: <CheckIcon />,
    },
  ]

  const onChangeTenantId = async (tenantId: string) => { }

  const [selectedItemId, setSelectedItemId] = useState("allStudents")
  const onChangeSelected = (id: string) => setSelectedItemId(id)

  const [showRightPanel, setShowRightPanel] = useState(true)

  return (
    <EdxConfigProvider config={mockConfig}>
      <Provider>
        <AppContent
          appsList={appsList}
          moreOptions={moreOptions}
          login={login}
          logout={logout}
          onChangeTenantId={onChangeTenantId}
          selectedItemId={selectedItemId}
          items={items}
          onChangeSelected={onChangeSelected}
          showRightPanel={showRightPanel}
          setShowRightPanel={setShowRightPanel}
        />
      </Provider>
    </EdxConfigProvider>
  )
}

// Create a new component to use the config context
interface AppContentProps {
  appsList: ExternalAppData[];
  moreOptions: AppsMenuMoreOption[];
  login: () => Promise<void>;
  logout: () => Promise<void>;
  onChangeTenantId: (tenantId: string) => Promise<void>;
  selectedItemId: string;
  items: SideBarMenuItemData[];
  onChangeSelected: (id: string) => void;
  showRightPanel: boolean;
  setShowRightPanel: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppContent({
  appsList,
  moreOptions,
  login,
  logout,
  onChangeTenantId,
  selectedItemId,
  items,
  onChangeSelected,
  showRightPanel,
  setShowRightPanel
}: AppContentProps) {
  const { userProfile } = useUserProfile({})

  return (
    <Flex flexDir="column" w="full">
      <TopBar
        leftComponent={
          <TopBarLeft
            onClick={() => console.log("hey go to")}
            list={appsList}
            menuOptions={moreOptions}
          />
        }
            rightComponent={
              <TopBarRight
                tenants={[]}
                isClosingSession={false}
                profileData={userProfile}
                onLogin={login}
                onLogout={logout}
                onChangeTenantId={onChangeTenantId}
              />
            }
          />
          <Flex w="full" maxW="100%">
            {true && (
              <Flex className="sidebar" minH="100vh" w="full">
                <SideBar
                  selectedItemId={selectedItemId}
                  ariaCurrentType="page"
                  items={items}
                  show={true}
                  onClickItem={onChangeSelected}
                />
              </Flex>
            )}
            <Flex flexDir="column" pl="20px" mt="60px">
              <SkipNavContent />
              <Text mt="10px">
                {/* Lorem ipsum content */}
                Sample content here...
              </Text>
              <Button onClick={() => setShowRightPanel(true)}>Show</Button>
            </Flex>
            <RightSlideInPanel
              show={showRightPanel}
              header={
                <RightSlideInPanelHeader
                  headerText="TITLE"
                  actionText="Save"
                  isSaving={false}
                  onAction={() => console.log("on action")}
                  onClose={() => setShowRightPanel(false)}
                />
              }
              content={
                <Flex flexDir="column">
                  <Text>Content Text</Text>
                  <Text>
                    Sample content here...
                  </Text>
                </Flex>
              }
            />
          </Flex>
          <Footer />
        </Flex>
      )
    }

export default App
