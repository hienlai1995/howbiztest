import axiosClient from "./axiosClient";
const DangerTypeAnimalApi = {
  getAll: (params) => {
    const url = "/species?";
    return axiosClient.get(url, { params });
  },
};
export default DangerTypeAnimalApi;
