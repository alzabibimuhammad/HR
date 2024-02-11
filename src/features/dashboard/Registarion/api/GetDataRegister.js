import { request } from '../../../../utiltis/AxiosUtilitis'

const GetAllData = async () => {
  return request({ url: '/api/storeAttendanceLogs' })
}

export default GetAllData
