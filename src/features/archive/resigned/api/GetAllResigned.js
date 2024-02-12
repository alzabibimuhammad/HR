import { request } from "src/utiltis/AxiosUtilitis"

const GetAllResigned= async () => {
  return request({ url: '/api/Users/usersWithoutDepartment' })
}

export default GetAllResigned
