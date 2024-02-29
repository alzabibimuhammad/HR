import { request } from "src/utiltis/AxiosUtilitis"

const GetAllReviews = async () => {
  return request({ url: '/api/Rate/allRates'})
}

export default GetAllReviews
