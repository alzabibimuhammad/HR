import axios from 'axios'
import { showErrorToast } from './toastUtils'

const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL })

export const request = async ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem('accessToken')}`

  const onSuccess = response => {
    return response
  }

  const onError = error => {
    // alert(error)
    showErrorToast(error)
    //   const errorMessage =
    //     error.response && error.response.data && error.response.data.userMessage
    //       ? error.response.data.userMessage
    //       : error.response.data.message;
    //   store.dispatch(actions.logError(errorMessage));
    //   return Promise.reject(error);
    return Promise.reject(error)
  }

  return client(options).then(onSuccess).catch(onError)
}
