import { request } from "src/utiltis/AxiosUtilitis"

const GetRewards = async (payload) => {

  return request({ url: `/api/Decision/getUserDecisions?user_id=${payload.idUser}&type=reward&date=${payload.formattedDate}` })

}

export default GetRewards


