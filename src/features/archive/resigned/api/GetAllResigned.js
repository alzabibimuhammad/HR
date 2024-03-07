import { request } from "src/utiltis/AxiosUtilitis"

const GetAllResigned= async () => {
  return request({ url: '/api/Users/resignedusers' })
}

export default GetAllResigned
