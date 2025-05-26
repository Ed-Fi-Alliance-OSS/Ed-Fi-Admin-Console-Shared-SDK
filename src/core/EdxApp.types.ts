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
  authority: string
  clientId: string
  redirectUri: string
  silentRedirectUri: string
  postLogoutRedirectUri: string
  scope: string
  responseType: string
  loadUserInfo: boolean
  automaticSilentRenew: boolean
  automaticSilentSignin: boolean


  keycloakTokenEndpoint?: string;
  customApiTokenEndpoint?: string;
  clientSecret?: string;
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
