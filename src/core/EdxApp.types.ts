import { UserProfile } from "./User.types"

interface Api {
    baseUri: string
}

interface AppAnalyticsMatomo {
    containerId: string
    managerUrl: string
}
interface AppAnalyticsGoogle {
    googleAnalyticsId: string
}
interface AppAnalytics {
    enableWebAnalytics: boolean
    tool: string
    matomo?: AppAnalyticsMatomo
    googleAnalytics?: AppAnalyticsGoogle
}
  
interface App {
    name: string
    subtitle: string
    basePath: string
    notificationsApplicationId: string 
    baseImagesUrl?: string
    enableHelpDeskLink?: boolean 
    helpLinkUrl?: string
    launcher?: string 
    webAnalytics?: AppAnalytics
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
}

export interface EdxAppConfig {
    api: Api
    app: App
    auth: Auth
}

export interface UserProfileContextData {
    userProfile: UserProfile | null
    setUserProfile: React.Dispatch<React.SetStateAction<UserProfile | null>>
    loadingProfile: boolean
}