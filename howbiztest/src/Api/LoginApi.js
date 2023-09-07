import axiosClient from "./axiosClient";
const LoginApi = {
  getAll: (params) => {
    const url = "/web-authenticate";
    return axiosClient.post(url, {
      username: params.username,
      password: params.password,
    });
  },
};
export default LoginApi;
