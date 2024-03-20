
import { request } from "src/utiltis/AxiosUtilitis"

const DeletedAbsenceById = async (id) => {
  return request({ url: `/api/Absence/deleteAbsence/${id}`, method: "delete"  })
}

export default DeletedAbsenceById
