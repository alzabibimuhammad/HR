import { request } from "src/utiltis/AxiosUtilitis"

const GetMembersHierarchy = async () => {
  return request({ url: '/api/Users/MembersHierarchy' })
}

export default GetMembersHierarchy
