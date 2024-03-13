import { request } from '../../../utiltis/AxiosUtilitis'

const GetAllDepartment = async () => {
  return request({ url: '/api/Team/showTeams?branch_id=1' })
}

export default GetAllDepartment
