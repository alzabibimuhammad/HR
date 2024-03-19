import { request } from "src/utiltis/AxiosUtilitis"

const GetMembersHierarchy = async () => {
  return request({ url: '/api/Team/tree' })
}

export default GetMembersHierarchy
