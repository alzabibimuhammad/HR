import { request } from "src/utiltis/AxiosUtilitis"

const GetDataByYear = async () => {
  return request({ url: `/api/Users/allUser?date=2023` })
}

export default GetDataByYear
