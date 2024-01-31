import { request } from '../../../utiltis/AxiosUtilitis'

const GetAllPolicy = async () => {
  return request({ url: '/api/Policy/Show' })
}

export default GetAllPolicy
