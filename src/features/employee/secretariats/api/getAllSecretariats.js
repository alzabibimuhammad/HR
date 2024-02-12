import { request } from "src/utiltis/AxiosUtilitis"

const GetAllSecretariats = async () => {
  return request({ url: '/api/Deposit/Show' })
}

export default GetAllSecretariats
