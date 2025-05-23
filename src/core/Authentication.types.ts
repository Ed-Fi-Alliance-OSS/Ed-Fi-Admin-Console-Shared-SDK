export interface AuthContextProps {
  isAuthenticated: Promise<boolean> ;
  isLoading: boolean;
  access_token: string | null;
  user: Promise<User | null>;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  fetchAccessToken: () => Promise<string>;
}

export interface User {
  access_token: string;
  expires_at: number;
  scopes: string[];
  token_type: string;
  profile: {
      sub: string;
      iss: string;
      aud: string;
      exp: number;
      iat: number;
      [key: string]: any; // Additional claims
  };
}

export interface AuthProviderProps {
  authority: string;
  client_id: string;
  redirect_uri: string;
  silent_redirect_uri?: string;
  post_logout_redirect_uri?: string;
  scope: string;
  response_type: string;
  loadUserInfo?: boolean;
  automaticSilentRenew?: boolean;
  onSigninCallback?: (user: User | void) => void;
}
