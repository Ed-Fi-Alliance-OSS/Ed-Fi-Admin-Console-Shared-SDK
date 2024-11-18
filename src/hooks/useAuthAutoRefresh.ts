import { useContext, useEffect } from "react"
import { hasAuthParams } from "react-oidc-context"
import { TEEAuthDataContext } from "../context"

interface UseAuthAutoRefreshProps {

}

const useAuthAutoRefresh = (params?: UseAuthAutoRefreshProps) => {
  const { auth } = useContext(TEEAuthDataContext) as any

  useEffect(() => {
    const handleAuth = async () => {
      if (auth && !hasAuthParams() && !auth.isAuthenticated && !auth.activeNavigator && !auth.isLoading) {
        auth.signinRedirect()
      }
      if(auth && auth.error) {
        console.log("useAuthAutoRefresh error", auth.error)
        await auth.clearStaleState()
        await auth.revokeTokens()
        auth.signinRedirect()
      }
    }
    handleAuth()
  }, [
    auth,
    auth.isAuthenticated,
    auth.activeNavigator,
    auth.isLoading,
    auth.signinRedirect
  ])
}

export default useAuthAutoRefresh