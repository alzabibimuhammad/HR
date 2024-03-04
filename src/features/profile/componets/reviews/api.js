import { requestDashboard } from 'src/utiltis/AxiosDashboard'

const GetAllReviews = (id,date) => {
  return requestDashboard({ url: '/api/Report/ratesByDate', data: {user_id:id,date:date?.SelecetedDate}, method: 'post' })
}

export default GetAllReviews
