import axios from 'axios'

const client = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL })

export const request = async ({ ...options }) => {
  // const state = store.getState()
  // client.defaults.headers.common.Authorization = `Bearer ${state.user.token}`
  const onSuccess = response => {
    return response
  }

  const onError = error => {
    alert(error)

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
