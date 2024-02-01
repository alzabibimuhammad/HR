import { request } from '../../../utiltis/AxiosUtilitis'

const GetEmployeeById = async (id) => {
  
  
  return request({ url: `/api/Users/user/${id}` })
}

export default GetEmployeeById
