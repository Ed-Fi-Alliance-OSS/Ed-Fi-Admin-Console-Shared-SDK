import axios from 'axios'
import { Api } from '../core/EdxApp.types'

interface DecodedToken {
  exp: number;
}

interface AuthResponse {
    access_token: string;
}

const isTokenExpired = (token: string | null): boolean => {
  const jwtDecode = require('jwt-decode');
  if (!token) return true;
  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decodedToken.exp < currentTime;
  } catch (error) {
    console.error('Error decoding token:', error);
    return true;
  }
};
const getValidTokenFromStorage = () =>
{
  let token = localStorage.getItem('token');
  if (token && !isTokenExpired(token)) {
    return token;
  }
  return undefined;
}

export const getToken = async (apiConfig?: Api): Promise<string> => {
    let token = getValidTokenFromStorage();
    try {
      if (!token) {
        const authenticationUrl = `${apiConfig?.edfiAdminApiBaseUri ?? ''}/connect/token`;
        const authResponse = await axios.post<AuthResponse>(authenticationUrl,
          {
              client_id: apiConfig?.apiKey,
              client_secret: apiConfig?.apiSecret,
              grant_type: "client_credentials",
              scope: "edfi_admin_api/full_access"
          },
          {
              headers:
              {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  "tenant": "tenant1",
              }
          }
      );
        token = authResponse.data.access_token;
        localStorage.setItem('token', token);
      }
      return token;
  } catch (error) {
    console.error('Error getting token:', error);
    return "";
  }
  };

export const includeAuthorization = async (access_token?: string, apiConfig?: Api) => {
  let authorization_token;

  if(apiConfig && apiConfig.useAdminApiAuthentication && !apiConfig.useLocalMockData){
    let token = getValidTokenFromStorage();
    if(token){
      return { headers: { Authorization: `Bearer ${token}` } }
    }
    else{
      console.log("Get token from admin API");
      const authorization_token = await getToken(apiConfig);
      return { headers: { Authorization: `Bearer ${authorization_token}` } }
    }
  }
  else if(access_token) {
    console.log("Get token from App access token");
    return { headers: { Authorization: `Bearer ${authorization_token}` } }
  }
  return undefined
}
