import { request } from '../../../../utiltis/AxiosUtilitis'

const GetAllTeams = async () => {
  return request({ url: '/api/Team/getTeams' })
}

export default GetAllTeams


