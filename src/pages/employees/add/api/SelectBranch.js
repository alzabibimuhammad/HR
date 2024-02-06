import { request } from "src/utiltis/AxiosUtilitis"

const GetAllSelectBranch = async () => {
  return request({ url: '/api/branch/All' })
}

export default GetAllSelectBranch
