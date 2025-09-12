// src/config/httpClient.ts
import axios from "axios";

export const STRAPI_API_BASE_URL = "http://143.110.168.24:1337"; // change if deployed
// 143.110.168.24
interface ApiCallerProps {
  uri: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  data?: object;
  token?: string | null | number;
  contentType?: string;
  userId?: string | null | number;
}
export const strapiCaller = ({
  uri,
  method = 'GET',
  data = {},
  token,
  contentType,
}: ApiCallerProps): Promise<any> => {
  return new Promise((resolve, reject) => {
    const config:  any = {
      method,
      url: STRAPI_API_BASE_URL + uri,
      headers: {
        'Content-Type': contentType || 'application/json',
        Accept: '/',
        Authorization: token ? `Bearer ${token}` : undefined,
      },
      data,
    };
    axios(config)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};

export const HttpClient = {
  STRAPI_API_BASE_URL,
};