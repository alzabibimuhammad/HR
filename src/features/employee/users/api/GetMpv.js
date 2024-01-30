import { request } from "src/utiltis/AxiosUtilitis";

const GetMvp = async () => {
  return request({ url: '/api/EmployeeOfMonth/Show' })
}

export default GetMvp
