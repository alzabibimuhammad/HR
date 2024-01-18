import { request } from '../../../utiltis/AxiosUtilitis'

const GetEmployeeDropDawn = async () => {
  return request({ url: '/api/Users/allUser' })
}

export default GetEmployeeDropDawn
