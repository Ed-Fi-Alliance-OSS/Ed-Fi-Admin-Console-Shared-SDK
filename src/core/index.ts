import { User } from 'oidc-client-ts'
import { Route } from './AppRoutes.types'
import { ExternalAppData } from './Apps.types'
import { LoadingState } from './AppStates.types'
import { EdxAppConfig } from './EdxApp.types'
import { ODSInstance } from './OdsInstance.types'
import { Preference, Tenant, UserData, UserProfile } from './User.types'

export type {
  EdxAppConfig, ExternalAppData, LoadingState,
  ODSInstance, Preference, Route, Tenant, User, UserData, UserProfile
}
