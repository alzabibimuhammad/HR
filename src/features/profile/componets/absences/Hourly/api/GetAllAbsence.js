
import { request } from "src/utiltis/AxiosUtilitis"

const GetAllAbsence = async () => {
  return request({ url: '/api/Absence/All' })
}

export default GetAllAbsence
