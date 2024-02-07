import { request } from "../../../../utiltis/AxiosUtilitis";

const getRatingById = async () => {
  return request({ url: `/api/Rate/getRateType/1` })

};

export default getRatingById;
