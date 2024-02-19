import { request } from "src/utiltis/AxiosUtilitis"

const AcceptSystem = id => {
  return request({
    url: `/api/Late/acceptAlert?alert_id=${id}`,
    method: 'post',

  })
}

export default AcceptSystem
