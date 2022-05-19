import axios from "./http";

export const get = async (url) => {
  const handleError = (err) => {
    if (err) throw err;
  };

  const resolveResponse = (response) => {
    return response;
  };

  return axios.get(url).then(resolveResponse).catch(handleError);
};
