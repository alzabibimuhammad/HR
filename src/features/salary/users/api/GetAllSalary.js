import { request } from '../../../../utiltis/AxiosUtilitis'

const GetAllSalary = async () => {
  return request({ url: '/api/Users/allUser?date=2023' })
}

export default GetAllSalary
