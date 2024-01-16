import { request } from '../../../utiltis/AxiosUtilitis'

const GetAllEmployee = async () => {
  return request({ url: '/api/Team/getTeams' })
}

export default GetAllEmployee


