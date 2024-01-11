import { request } from '../../../utiltis/AxiosUtilitis'

const GetAllContracts = async () => {
  return request({ url: '/api/contract/All' })
}

export default GetAllContracts
