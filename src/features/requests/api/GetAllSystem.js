import { request } from "src/utiltis/AxiosUtilitis"
const GetAllSystem = async () => {
  return request({ url: '/api/Late/showLate'})
}

export default GetAllSystem
