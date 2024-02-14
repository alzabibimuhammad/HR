import { request } from "src/utiltis/AxiosUtilitis"

const GetPenalties = async (payload) => {

  return request({ url: `/api/Decision/getUserDecisions?user_id=${payload.idUser}&type=penalty&date=${payload.formattedDate}` })

}

export default GetPenalties


