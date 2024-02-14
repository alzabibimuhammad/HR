
import { request } from "src/utiltis/AxiosUtilitis"

const DeletedAbsenceById = async (id) => {
  return request({ url: `/api/Absence/deleteAbsence/1${id}`, method: "delete"  })
}

export default DeletedAbsenceById
