import {
  Button,
  ChakraProvider,
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
import { ExternalAppData } from "./core"
import { useUserProfile } from './hooks'

function App() {
  const {userProfile} = useUserProfile({})

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
    <Flex flexDir="column" w="full">
      <ChakraProvider value={baseTheme}>
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
              {/* cSpell:disable */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
              in pariatur aliquam laborum dolorum atque vero commodi mollitia
              maiores officia omnis ex praesentium, incidunt corrupti impedit
              autem animi earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda harum voluptate temporibus reiciendis
              doloribus ab ducimus omnis iure quisquam reprehenderit sed
              tenetur, placeat corporis magni veritatis eligendi cum, ipsa
              minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt distinctio similique ratione exercitationem enim, tempore
              eos quas sunt et excepturi officia quia pariatur doloribus in,
              corporis adipisci dignissimos deleniti doloremque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Amet dolores neque
              repudiandae officiis. Officia modi iste sequi neque vero, beatae
              unde officiis facilis praesentium quasi cumque. Ipsum voluptas
              totam corporis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam a commodi ut atque dolorum sapiente dolorem odit.
              Vitae quam eum explicabo numquam assumenda illo, et adipisci omnis
              facere earum magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus sint eum consequatur, numquam nemo
              iure ipsa ab accusamus animi suscipit doloremque quos, cumque,
              amet enim aut laboriosam voluptas architecto quas! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quidem voluptas
              impedit cum maxime velit excepturi sit autem adipisci cumque
              tenetur aut eos nesciunt praesentium ipsam obcaecati minus, soluta
              odit iste? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Qui, nemo. Saepe quam omnis, rerum et eos quisquam impedit
              voluptas vitae consequatur facere optio explicabo commodi quo!
              Totam necessitatibus mollitia optio! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Maiores dolore distinctio earum ab,
              magnam sunt possimus nesciunt cum cupiditate rem odio quas
              corporis et voluptate, facilis suscipit ipsam accusantium
              consectetur.
            </Text>
            <Text mt="10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
              in pariatur aliquam laborum dolorum atque vero commodi mollitia
              maiores officia omnis ex praesentium, incidunt corrupti impedit
              autem animi earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda harum voluptate temporibus reiciendis
              doloribus ab ducimus omnis iure quisquam reprehenderit sed
              tenetur, placeat corporis magni veritatis eligendi cum, ipsa
              minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt distinctio similique ratione exercitationem enim, tempore
              eos quas sunt et excepturi officia quia pariatur doloribus in,
              corporis adipisci dignissimos deleniti doloremque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Amet dolores neque
              repudiandae officiis. Officia modi iste sequi neque vero, beatae
              unde officiis facilis praesentium quasi cumque. Ipsum voluptas
              totam corporis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam a commodi ut atque dolorum sapiente dolorem odit.
              Vitae quam eum explicabo numquam assumenda illo, et adipisci omnis
              facere earum magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus sint eum consequatur, numquam nemo
              iure ipsa ab accusamus animi suscipit doloremque quos, cumque,
              amet enim aut laboriosam voluptas architecto quas! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quidem voluptas
              impedit cum maxime velit excepturi sit autem adipisci cumque
              tenetur aut eos nesciunt praesentium ipsam obcaecati minus, soluta
              odit iste? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Qui, nemo. Saepe quam omnis, rerum et eos quisquam impedit
              voluptas vitae consequatur facere optio explicabo commodi quo!
              Totam necessitatibus mollitia optio! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Maiores dolore distinctio earum ab,
              magnam sunt possimus nesciunt cum cupiditate rem odio quas
              corporis et voluptate, facilis suscipit ipsam accusantium
              consectetur.
            </Text>
            <Text mt="10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
              in pariatur aliquam laborum dolorum atque vero commodi mollitia
              maiores officia omnis ex praesentium, incidunt corrupti impedit
              autem animi earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda harum voluptate temporibus reiciendis
              doloribus ab ducimus omnis iure quisquam reprehenderit sed
              tenetur, placeat corporis magni veritatis eligendi cum, ipsa
              minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt distinctio similique ratione exercitationem enim, tempore
              eos quas sunt et excepturi officia quia pariatur doloribus in,
              corporis adipisci dignissimos deleniti doloremque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Amet dolores neque
              repudiandae officiis. Officia modi iste sequi neque vero, beatae
              unde officiis facilis praesentium quasi cumque. Ipsum voluptas
              totam corporis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam a commodi ut atque dolorum sapiente dolorem odit.
              Vitae quam eum explicabo numquam assumenda illo, et adipisci omnis
              facere earum magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus sint eum consequatur, numquam nemo
              iure ipsa ab accusamus animi suscipit doloremque quos, cumque,
              amet enim aut laboriosam voluptas architecto quas! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quidem voluptas
              impedit cum maxime velit excepturi sit autem adipisci cumque
              tenetur aut eos nesciunt praesentium ipsam obcaecati minus, soluta
              odit iste? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Qui, nemo. Saepe quam omnis, rerum et eos quisquam impedit
              voluptas vitae consequatur facere optio explicabo commodi quo!
              Totam necessitatibus mollitia optio! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Maiores dolore distinctio earum ab,
              magnam sunt possimus nesciunt cum cupiditate rem odio quas
              corporis et voluptate, facilis suscipit ipsam accusantium
              consectetur.
            </Text>
            <Text mt="10px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
              in pariatur aliquam laborum dolorum atque vero commodi mollitia
              maiores officia omnis ex praesentium, incidunt corrupti impedit
              autem animi earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda harum voluptate temporibus reiciendis
              doloribus ab ducimus omnis iure quisquam reprehenderit sed
              tenetur, placeat corporis magni veritatis eligendi cum, ipsa
              minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt distinctio similique ratione exercitationem enim, tempore
              eos quas sunt et excepturi officia quia pariatur doloribus in,
              corporis adipisci dignissimos deleniti doloremque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Amet dolores neque
              repudiandae officiis. Officia modi iste sequi neque vero, beatae
              unde officiis facilis praesentium quasi cumque. Ipsum voluptas
              totam corporis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam a commodi ut atque dolorum sapiente dolorem odit.
              Vitae quam eum explicabo numquam assumenda illo, et adipisci omnis
              facere earum magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus sint eum consequatur, numquam nemo
              iure ipsa ab accusamus animi suscipit doloremque quos, cumque,
              amet enim aut laboriosam voluptas architecto quas! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quidem voluptas
              impedit cum maxime velit excepturi sit autem adipisci cumque
              tenetur aut eos nesciunt praesentium ipsam obcaecati minus, soluta
              odit iste? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Qui, nemo. Saepe quam omnis, rerum et eos quisquam impedit
              voluptas vitae consequatur facere optio explicabo commodi quo!
              Totam necessitatibus mollitia optio! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Maiores dolore distinctio earum ab,
              magnam sunt possimus nesciunt cum cupiditate rem odio quas
              corporis et voluptate, facilis suscipit ipsam accusantium
              consectetur.
              {/* cSpell:enable */}
            </Text>
            <Button onClick={() => setShowRightPanel(true)}>Show</Button>
          </Flex>

          <Flex flexDir="column" pl="20px" mt="60px">
            <Text mt="10px">
              {/* cSpell:disable */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
              in pariatur aliquam laborum dolorum atque vero commodi mollitia
              maiores officia omnis ex praesentium, incidunt corrupti impedit
              autem animi earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda harum voluptate temporibus reiciendis
              doloribus ab ducimus omnis iure quisquam reprehenderit sed
              tenetur, placeat corporis magni veritatis eligendi cum, ipsa
              minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt distinctio similique ratione exercitationem enim, tempore
              eos quas sunt et excepturi officia quia pariatur doloribus in,
              corporis adipisci dignissimos deleniti doloremque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Amet dolores neque
              repudiandae officiis. Officia modi iste sequi neque vero, beatae
              unde officiis facilis praesentium quasi cumque. Ipsum voluptas
              totam corporis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam a commodi ut atque dolorum sapiente dolorem odit.
              Vitae quam eum explicabo numquam assumenda illo, et adipisci omnis
              facere earum magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus sint eum consequatur, numquam nemo
              iure ipsa ab accusamus animi suscipit doloremque quos, cumque,
              amet enim aut laboriosam voluptas architecto quas! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quidem voluptas
              impedit cum maxime velit excepturi sit autem adipisci cumque
              tenetur aut eos nesciunt praesentium ipsam obcaecati minus, soluta
              odit iste? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Qui, nemo. Saepe quam omnis, rerum et eos quisquam impedit
              voluptas vitae consequatur facere optio explicabo commodi quo!
              Totam necessitatibus mollitia optio! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Maiores dolore distinctio earum ab,
              magnam sunt possimus nesciunt cum cupiditate rem odio quas
              corporis et voluptate, facilis suscipit ipsam accusantium
              consectetur.
              {/* cSpell:enable */}
            </Text>
            <Text mt="10px">
              {/* cSpell:disable */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
              in pariatur aliquam laborum dolorum atque vero commodi mollitia
              maiores officia omnis ex praesentium, incidunt corrupti impedit
              autem animi earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda harum voluptate temporibus reiciendis
              doloribus ab ducimus omnis iure quisquam reprehenderit sed
              tenetur, placeat corporis magni veritatis eligendi cum, ipsa
              minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt distinctio similique ratione exercitationem enim, tempore
              eos quas sunt et excepturi officia quia pariatur doloribus in,
              corporis adipisci dignissimos deleniti doloremque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Amet dolores neque
              repudiandae officiis. Officia modi iste sequi neque vero, beatae
              unde officiis facilis praesentium quasi cumque. Ipsum voluptas
              totam corporis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam a commodi ut atque dolorum sapiente dolorem odit.
              Vitae quam eum explicabo numquam assumenda illo, et adipisci omnis
              facere earum magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus sint eum consequatur, numquam nemo
              iure ipsa ab accusamus animi suscipit doloremque quos, cumque,
              amet enim aut laboriosam voluptas architecto quas! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quidem voluptas
              impedit cum maxime velit excepturi sit autem adipisci cumque
              tenetur aut eos nesciunt praesentium ipsam obcaecati minus, soluta
              odit iste? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Qui, nemo. Saepe quam omnis, rerum et eos quisquam impedit
              voluptas vitae consequatur facere optio explicabo commodi quo!
              Totam necessitatibus mollitia optio! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Maiores dolore distinctio earum ab,
              magnam sunt possimus nesciunt cum cupiditate rem odio quas
              corporis et voluptate, facilis suscipit ipsam accusantium
              consectetur.
              {/* cSpell:enable */}
            </Text>
            <Text mt="10px">
              {/* cSpell:disable */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
              in pariatur aliquam laborum dolorum atque vero commodi mollitia
              maiores officia omnis ex praesentium, incidunt corrupti impedit
              autem animi earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda harum voluptate temporibus reiciendis
              doloribus ab ducimus omnis iure quisquam reprehenderit sed
              tenetur, placeat corporis magni veritatis eligendi cum, ipsa
              minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt distinctio similique ratione exercitationem enim, tempore
              eos quas sunt et excepturi officia quia pariatur doloribus in,
              corporis adipisci dignissimos deleniti doloremque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Amet dolores neque
              repudiandae officiis. Officia modi iste sequi neque vero, beatae
              unde officiis facilis praesentium quasi cumque. Ipsum voluptas
              totam corporis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam a commodi ut atque dolorum sapiente dolorem odit.
              Vitae quam eum explicabo numquam assumenda illo, et adipisci omnis
              facere earum magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus sint eum consequatur, numquam nemo
              iure ipsa ab accusamus animi suscipit doloremque quos, cumque,
              amet enim aut laboriosam voluptas architecto quas! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quidem voluptas
              impedit cum maxime velit excepturi sit autem adipisci cumque
              tenetur aut eos nesciunt praesentium ipsam obcaecati minus, soluta
              odit iste? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Qui, nemo. Saepe quam omnis, rerum et eos quisquam impedit
              voluptas vitae consequatur facere optio explicabo commodi quo!
              Totam necessitatibus mollitia optio! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Maiores dolore distinctio earum ab,
              magnam sunt possimus nesciunt cum cupiditate rem odio quas
              corporis et voluptate, facilis suscipit ipsam accusantium
              consectetur.
              {/* cSpell:enable */}
            </Text>
            <Text mt="10px">
              {/* cSpell:disable */}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, ut
              in pariatur aliquam laborum dolorum atque vero commodi mollitia
              maiores officia omnis ex praesentium, incidunt corrupti impedit
              autem animi earum. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Assumenda harum voluptate temporibus reiciendis
              doloribus ab ducimus omnis iure quisquam reprehenderit sed
              tenetur, placeat corporis magni veritatis eligendi cum, ipsa
              minus. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deserunt distinctio similique ratione exercitationem enim, tempore
              eos quas sunt et excepturi officia quia pariatur doloribus in,
              corporis adipisci dignissimos deleniti doloremque. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Amet dolores neque
              repudiandae officiis. Officia modi iste sequi neque vero, beatae
              unde officiis facilis praesentium quasi cumque. Ipsum voluptas
              totam corporis? Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Numquam a commodi ut atque dolorum sapiente dolorem odit.
              Vitae quam eum explicabo numquam assumenda illo, et adipisci omnis
              facere earum magnam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Doloribus sint eum consequatur, numquam nemo
              iure ipsa ab accusamus animi suscipit doloremque quos, cumque,
              amet enim aut laboriosam voluptas architecto quas! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quidem voluptas
              impedit cum maxime velit excepturi sit autem adipisci cumque
              tenetur aut eos nesciunt praesentium ipsam obcaecati minus, soluta
              odit iste? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Qui, nemo. Saepe quam omnis, rerum et eos quisquam impedit
              voluptas vitae consequatur facere optio explicabo commodi quo!
              Totam necessitatibus mollitia optio! Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Maiores dolore distinctio earum ab,
              magnam sunt possimus nesciunt cum cupiditate rem odio quas
              corporis et voluptate, facilis suscipit ipsam accusantium
              consectetur.
              {/* cSpell:enable */}
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
                  {/* cSpell:disable */}
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Deserunt, fuga quos eius nostrum ullam reprehenderit maxime
                  eos, vero laudantium accusamus in omnis, sit dignissimos ut!
                  Odio culpa blanditiis vero reiciendis?
                  {/* cSpell:enable */}
                </Text>
              </Flex>
            }
          />
        </Flex>
        <Footer />
      </ChakraProvider>
    </Flex>
  )
}

export default App
