import { request } from "src/utiltis/AxiosUtilitis"

const GetWarnings = async (payload) => {

  return request({ url: `/api/Decision/getUserDecisions?user_id=${payload.idUser}&type=warning&date=${payload.formattedDate}` })

}

export default GetWarnings


