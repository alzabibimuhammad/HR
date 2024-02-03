import { request } from "src/utiltis/AxiosUtilitis"

const GetDataByYear = async () => {
  return request({ url: `/api/Users/allUser?date=${date}` })
}

export default GetDataByYear
