import { request } from '../../../utiltis/AxiosUtilitis'

const GetEventByMonth = async () => {
  return request({ url: '/api/Calendar/All' })
}

export default GetEventByMonth
