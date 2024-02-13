import { request } from "src/utiltis/AxiosUtilitis"

const GetWarnings = async (id,date) => {
  return request({ url: `/api/Decision/getUserDecisions?user_id=${id}&type=warning&date=${date}` })

}

export default GetWarnings


