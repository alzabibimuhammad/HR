import { request } from "src/utiltis/AxiosUtilitis"

const GetAbsence = async (payload) => {

  return request({ url: `/api/Absence/getUserAbsence?user_id=${payload.idUser}&date=${payload.formattedDate}` })

}

export default GetAbsence

