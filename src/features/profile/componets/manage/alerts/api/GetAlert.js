import { request } from "src/utiltis/AxiosUtilitis"

const GetAlert = async (payload) => {

  return request({ url: `/api/Decision/getUserDecisions?user_id=${payload.idUser}&type=alert&date=${payload.formattedDate}` })

}

export default GetAlert


