import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const MakeRequest = async (args: AxiosRequestConfig): Promise<AxiosResponse> => {
 return await axios.request({...args})
}