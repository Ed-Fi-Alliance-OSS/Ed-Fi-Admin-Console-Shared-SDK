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

  // New properties for authConfig
  useKeycloak: boolean; // Determines whether to use Keycloak or custom API
  keycloakTokenEndpoint?: string; // Keycloak token endpoint
  customApiTokenEndpoint?: string; // Custom API token endpoint
  clientSecret?: string; // Optional client secret
  grantType?: string; // Grant type for token requests (e.g., "password")
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
