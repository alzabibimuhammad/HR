import { request } from "src/utiltis/AxiosUtilitis"

const GetAllComplaints = async () => {
  return request({ url: '/api/Request/Complaints' })
}

export default GetAllComplaints
