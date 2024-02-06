import { request } from "src/utiltis/AxiosUtilitis";

const GetDecision = async (id) => {
  return request({ url: `/api/Decision/user_desicions/${id}` })

}

export default GetDecision


