import { User } from "oidc-client-ts"
import { AuthProviderProps } from "react-oidc-context"
import { EdxAppConfig } from "../core"

const createEdxAppConfig = (config: EdxAppConfig) => {
  const oidcConfig: AuthProviderProps = {
    authority: config.auth.authority ?? '',
    client_id: config.auth.clientId ?? '',
    redirect_uri: config.auth.redirectUri ?? '',
    silent_redirect_uri: config.auth.silentRedirectUri,
    post_logout_redirect_uri: config.auth.postLogoutRedirectUri,
    scope: config.auth.scope,
    response_type: config.auth.responseType,
    loadUserInfo: config.auth.loadUserInfo,
    automaticSilentRenew: config.auth.automaticSilentRenew,
    onSigninCallback: (_user: User | void): void => {
      console.log("🚗 onSigninCallback")
      window.history.replaceState({}, document.title, window.location.pathname)
    }
  }

  return oidcConfig
}

export default createEdxAppConfig