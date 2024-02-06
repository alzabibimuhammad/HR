import { request } from "src/utiltis/AxiosUtilitis"

const GetAllReviews = async () => {
  return request({ url: '/api/Rate/allRates?branch_id=1' })
}

export default GetAllReviews
