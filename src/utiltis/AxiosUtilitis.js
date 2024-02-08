import axios from 'axios'
import { showErrorToast } from './showErrorToast'

const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

export const request = async ({ url, params = {}, ...rest }) => {
  // Add the branch_id query parameter to the params object
  params = { ...params, branch_id: 1 };

  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

  const onSuccess = response => response;

  const onError = error => {
    // alert(error)
    showErrorToast(error)
    //   const errorMessage =
    //     error.response && error.response.data && error.response.data.userMessage
    //       ? error.response.data.userMessage
    //       : error.response.data.message;
    //   store.dispatch(actions.logError(errorMessage));
    //   return Promise.reject(error);
    return Promise.reject(error);
  };

  return client({ url, params, ...rest }).then(onSuccess).catch(onError);
};
