import { request } from "../../../../utiltis/AxiosUtilitis";

const getRatingById = async (payload) => {

  return request({ url: `/api/Rate/getRate/${payload.user_id}?date=${payload.date}` })

};

export default getRatingById;


