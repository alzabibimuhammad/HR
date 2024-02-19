import { request } from "src/utiltis/AxiosUtilitis"

const GetAllRequest = async () => {
  return request({ url: '/api/Request/All'})
}

export default GetAllRequest
