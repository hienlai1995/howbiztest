import axios from "axios";
import queryString from "query-string";
const axiosClient = axios.create({
  baseURL: "https://wlp.howizbiz.com/api",
  headers: {
    "Content-Type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response.data;
  },
  (error) => {
    throw error;
  }
);
export default axiosClient;
