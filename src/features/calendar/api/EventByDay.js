import { request } from '../../../utiltis/AxiosUtilitis'

const GetEventDay = async (date) => {


  return request({ url: `/api/Calendar/EventDate/${date}` })
}

export default GetEventDay
