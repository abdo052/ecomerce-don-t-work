// >>>{Requests Get data} <<< this file to get with diffrent way

import baseUrl from "../Api/baseURL";

const useGetData = async (url, parmas) => {
   // >>> url && parmas <<< will exported after we call this function on any component
  const res = await baseUrl.get(url, parmas);
  return res.data;
};

export default useGetData;
