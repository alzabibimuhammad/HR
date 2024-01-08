import { request } from '../../../utiltis/AxiosUtilitis'

const GetAllEmployee = async () => {
  return request({ url: '/countries' })
}

export default GetAllEmployee
