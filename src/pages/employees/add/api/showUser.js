import { request } from "src/utiltis/AxiosUtilitis"

const GetUser = async (id) => {
  return request({ url: `/api/Users/user/${id}` })
}

export default GetUser
