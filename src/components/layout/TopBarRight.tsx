import { Flex } from "@chakra-ui/react"
import { Tenant, UserProfile } from "../../core"
import { TenantSelectPopover } from "../common"
import TopBarInfo from "./TopBarInfo"

interface TopBarRightProps {
  profileData: UserProfile | null
  isClosingSession: boolean
  tenants: Tenant[]
  onLogin: () => Promise<void>
  onLogout: () => Promise<void>
  onChangeTenantId: (tenantId: string) => Promise<void>
}

const TopBarRight = ({ tenants, profileData, isClosingSession, onLogin, onLogout, onChangeTenantId }: TopBarRightProps) => {
  return (
    <>
      <Flex alignItems='center' marginRight='15px'>
        <TenantSelectPopover
          tenants={tenants}
          userProfile={profileData}
          onChangeTenantId={onChangeTenantId} />
      </Flex>
      <TopBarInfo
        profileData={profileData}
        isClosingSession={isClosingSession}
        onLogIn={onLogin}
        onLogOut={onLogout} />
    </>
  )
}

export default TopBarRight 