import { request } from "src/utiltis/AxiosUtilitis"

const GetAllLevel = async () => {
  return request({ url: '/api/Users/professional' })
}

export default GetAllLevel
