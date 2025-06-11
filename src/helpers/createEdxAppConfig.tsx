import { AuthProviderProps, User } from "../core/Authentication.types"
import { EdxAppConfig } from "../core"

const createEdxAppConfig = (config: EdxAppConfig) => {
  const oidcConfig: AuthProviderProps = {
    client_id: config.auth.clientId ?? '',
    scope: config.auth.scope,
    loadUserInfo: config.auth.loadUserInfo,
    onSigninCallback: (_user: User | void): void => {
      console.log("🚗 onSigninCallback")
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }

  return oidcConfig
}

export default createEdxAppConfig
