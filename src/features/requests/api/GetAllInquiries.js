import { request } from "src/utiltis/AxiosUtilitis"

const GetAllInquiries = async () => {
  return request({ url: '/api/Request/All' })
}

export default GetAllInquiries
