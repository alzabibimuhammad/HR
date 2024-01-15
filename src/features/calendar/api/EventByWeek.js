import { request } from '../../../utiltis/AxiosUtilitis'

const GetEventByWeek = async () => {
  return request({ url: '/api/Calendar/EventsByWeek' })
}

export default GetEventByWeek
