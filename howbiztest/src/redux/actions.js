export const changePages = (data) => {
  return {
    type: "pagination/changePage",
    payload: data,
  };
};
export const changeClass = (data) => {
  return {
    type: "subheader/changestyle",
    payload: data,
  };
};
