import { request } from "src/utiltis/AxiosUtilitis"

const GetDeductions = async (payload) => {

  return request({ url: `/api/Decision/getUserDecisions?user_id=${payload.idUser}&type=deduction&date=${payload.formattedDate}` })

}

export default GetDeductions


