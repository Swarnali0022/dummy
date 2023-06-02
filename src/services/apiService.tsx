import axios, { AxiosInstance, AxiosResponse } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: "http://localhost:3000",
  // Other custom configuration options
});

export type ApiResponse<T> = {
  data: T;
  // You can include other properties if needed
};

export async function postRequest<T>(
  url: string,
  data: any
): Promise<ApiResponse<T>> {
  try {
    const response = await apiClient.post<ApiResponse<T>>(url, data);
    return response.data; // Extract the data from the Axios response
  } catch (error) {
    throw error;
  }
}


export async function getRequest<T>(
    url: string,
    params?: any
  ): Promise<ApiResponse<T>> {
    try {
      const response = await apiClient.get<ApiResponse<T>>(url, { params });
      return response.data; // Extract the data from the Axios response
    } catch (error) {
      throw error;
    }
  }