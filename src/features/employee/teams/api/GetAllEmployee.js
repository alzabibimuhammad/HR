import { request } from "src/utiltis/AxiosUtilitis"

const GetAllUsers = async () => {
  return request({ url: '/api/Users/exceptAdmin' })
}

export default GetAllUsers


