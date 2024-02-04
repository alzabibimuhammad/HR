import { request } from "src/utiltis/AxiosUtilitis"

const GetDataByMonth = async (payload) => {
  return request({ url: `/api/Users/allUser?date=${payload}` })
}

export default GetDataByMonth
