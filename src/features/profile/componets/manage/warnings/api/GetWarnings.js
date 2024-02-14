import { request } from "src/utiltis/AxiosUtilitis"

const GetWarnings = async (payload) => {
  console.log("🚀 ~ GetWarnings ~ payload:", payload)

  return request({ url: `/api/Decision/getUserDecisions?user_id=${payload.idUser}&type=warning&date=${payload.formattedDate}` })

}

export default GetWarnings


