import { request } from "src/utiltis/AxiosUtilitis"

const GetAllSelect = async () => {
  return request({ url: '/api/Users/professional' })
}

export default GetAllSelect
