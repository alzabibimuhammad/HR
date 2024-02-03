import { request } from "src/utiltis/AxiosUtilitis"

const GetDataByMonth = async () => {
  return request({ url: `/api/Users/allUser?date=${date}` })
}

export default GetDataByMonth
