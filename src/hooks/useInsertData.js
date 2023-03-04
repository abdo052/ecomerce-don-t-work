// >>>{Requests Get data} <<< this file to get with diffrent way

import baseUrl from './../Api/baseURL';

const useInsertDataWithImage = async (url, parmas) => {
  // >>> url && parmas <<< will exported after we call this function on any component
  const config={
    headers:{"Content-Type": "multipart/form-data"}
  }
  const res = await baseUrl.post(url, parmas, config);
  console.log(res.status)
  return res;
};
const useInsertData = async (url, parmas) => {
  // >>> url && parmas <<< will exported after we call this function on any component
  const res = await baseUrl.post(url, parmas);
  return res.data;
};

export { useInsertData, useInsertDataWithImage};
