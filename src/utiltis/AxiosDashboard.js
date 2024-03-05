import axios from 'axios'
import { showErrorToast } from './showErrorToast'

const client = axios.create({ baseURL: "http://192.168.2.138:800" });

export const requestDashboard = async ({ url, params = {}, ...rest }) => {
  params = { ...params, branch_id: localStorage.getItem('branch')||1};

  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;

  const onSuccess = response => response;

  const onError = error => {
    showErrorToast(error)

  };

  return client({ url, params, ...rest }).then(onSuccess).catch(onError);
};
