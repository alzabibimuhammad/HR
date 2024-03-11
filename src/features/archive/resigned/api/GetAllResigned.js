import { request } from "src/utiltis/AxiosUtilitis"

const GetAllResigned= async () => {
  return request({ url: '/api/Users/allAndTrashUser' })
}

export default GetAllResigned
