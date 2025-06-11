import { UserProfile } from "./User.types"

export interface Api {
  edfiApiBaseUri: string
  edfiAdminApiBaseUri: string
  useLocalMockData?: boolean
  apiKey?: string
  apiSecret?: string
  useAdminApiAuthentication?: boolean
}

interface App {
  title: string
  subtitle: string
  basePath: string
  logo?: string
  helpLinkUrl?: string
  termsUrl?: string
  multiTenancy?: boolean
  [key: string]: any
}

interface Auth {
  TokenEndpoint?: string
  clientId: string
  clientSecret?: string
  scope: string
  loadUserInfo: boolean
  grantType?: string;
}

export interface EdxAppConfig {
  api: Api
  app: App
  auth: Auth
  plugins: string[] | undefined
}

export interface UserProfileContextData {
  userProfile: UserProfile | null
  setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
  loadingProfile: boolean
}
