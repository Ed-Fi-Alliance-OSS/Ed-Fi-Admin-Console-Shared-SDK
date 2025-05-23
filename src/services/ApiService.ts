import axiosClass, { AxiosError, AxiosInstance } from "axios"
import { useConfig } from "../context";
import { HttpServiceRequestError, HttpServiceResponse } from "./HttpService/HttpService.response.types";
import { HttpServiceGetRequest, HttpServiceMethod, HttpServicePostRequest, HttpServicePutRequest } from "./HttpService/HttpService.types";
import useAuthActions from "../hooks/useAuthActions"; // Import useAuthActions
import { User } from "../core/Authentication.types"; // Import the User type

export const useApiService = (_baseURL: string | undefined) => {
  const { getUser } = useAuthActions(); // Use getUser from useAuthActions
  const { config } = useConfig();
  const baseURL = _baseURL ?? config.api.edfiAdminApiBaseUri;

  function addTenantHeader(headers: Record<string, string>): Record<string, string> {
    if (!config.app.multiTenancy) {
      return headers;
    }

    const tenantId = sessionStorage.getItem("selectedTenant");
    return {
      ...headers,
      Tenant: tenantId || "tenant1", // Default tenant ID if not found
    };
  }

  // Initialize axiosInstance with default headers
  const axiosInstance: AxiosInstance = axiosClass.create({
    baseURL,
    headers: addTenantHeader({
      "Content-Type": "application/json",
      Accept: "application/json",
    }),
  });

  // Add a request interceptor to dynamically set the Authorization header
  axiosInstance.interceptors.request.use(async (config) => {
    try {
      const user = await getUser(); // Retrieve the user object asynchronously
      const token = user?.access_token ?? "";

      // Dynamically set the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.error("Failed to retrieve user token:", error);
      // Optionally, you can throw an error or proceed without the Authorization header
    }
    return config;
  });

  const createDefaultError = (method: HttpServiceMethod, actionName: string) => {
    const actionMessage = `Error for ${method}: ${actionName}`;

    const requestError: HttpServiceRequestError = {
      message: actionMessage,
      actionMessage: `Failed to ${actionName}.`,
      statusCode: "unknown",
      action: actionName,
      type: "Error",
    };

    return { actionMessage, requestError };
  };

  const handleAxiosError = (error: AxiosError, requestError: HttpServiceRequestError) => {
    console.error(`${error.message}`, error);

    requestError.actionMessage = `${requestError.actionMessage} ${error.response?.status}`;
    requestError.statusCode = error.response?.status ?? "unknown";

    return requestError;
  };

  async function get<TResponse>({ url, actionName }: HttpServiceGetRequest) {
    console.log(`Get request ${actionName} to ${url}`);

    try {
      if (!axiosInstance) {
        throw new Error("Axios instance is not initialized yet.");
      }
      const res = await axiosInstance.get(url);

      const response: HttpServiceResponse<TResponse> = {
        data: res.data,
        type: "Response",
      };

      return response
    } catch (error) {
      const { requestError, actionMessage } = createDefaultError("Get", actionName);

      if (error instanceof AxiosError) {
        return handleAxiosError(error, requestError);
      } else {
        console.error(`${actionMessage}`, error);

        return requestError;
      }
    }
  }

  async function post<TResponse, TData>({ url, data, actionName }: HttpServicePostRequest<TData>) {
    console.log(`Post request ${actionName} to ${url}`);

    try {
      if (!axiosInstance) {
        throw new Error("Axios instance is not initialized yet.");
      }
      const res = await axiosInstance.post(url, data);

      const response: HttpServiceResponse<TResponse> = {
        data: res.data,
        type: "Response",
      };

      return response;
    } catch (error) {
      const { actionMessage, requestError } = createDefaultError("Post", actionName);

      if (error instanceof AxiosError) {
        return handleAxiosError(error, requestError);
      } else {
        console.error(`${actionMessage}`, error);

        return requestError;
      }
    }
  }

  async function put<TResponse, TData>({ url, data, actionName }: HttpServicePutRequest<TData>) {
    console.log(`Put request ${actionName} to ${url}`);

    try {
      if (!axiosInstance) {
        throw new Error("Axios instance is not initialized yet.");
      }
      const res = await axiosInstance.put(url, data);

      const response: HttpServiceResponse<TResponse> = {
        data: res.data,
        type: "Response",
      };

      return response;
    } catch (error) {
      const { actionMessage, requestError } = createDefaultError("Put", actionName);

      if (error instanceof AxiosError) {
        return handleAxiosError(error, requestError);
      } else {
        console.error(`${actionMessage}`, error);

        return requestError;
      }
    }
  }

  return {
    api: axiosInstance,
    handleAxiosError,
    createDefaultError,
    get,
    post,
    put,
  };
};
