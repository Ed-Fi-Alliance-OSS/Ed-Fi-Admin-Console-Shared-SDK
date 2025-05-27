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
  client_id: string;
  scope: string;
  loadUserInfo?: boolean;
  onSigninCallback?: (user: User | void) => void;
}
