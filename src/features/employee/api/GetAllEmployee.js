import { request } from '../../../utiltis/AxiosUtilitis'

const GetAllEmployee = async () => {
  return request({ url: '/api/Users/allUser' })
}

export default GetAllEmployee
