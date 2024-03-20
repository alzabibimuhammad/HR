
import { request } from "src/utiltis/AxiosUtilitis"

const GetAllAbsenceById = async (id) => {
  return request({ url: `/api/Absence/getAbsences/${id}` })
}

export default GetAllAbsenceById
