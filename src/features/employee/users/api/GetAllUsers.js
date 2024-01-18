import { request } from '../../../../utiltis/AxiosUtilitis'

const GetAllUsers = async () => {
  return request({ url: '/api/Users/allUser' })
}

export default GetAllUsers
