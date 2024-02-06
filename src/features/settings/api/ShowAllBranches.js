import { request } from '../../../utiltis/AxiosUtilitis'

const GetAllBranches = async () => {
  return request({ url: '/api/branch/All' })
}

export default GetAllBranches
