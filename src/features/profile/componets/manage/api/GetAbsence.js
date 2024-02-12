import { request } from "src/utiltis/AxiosUtilitis";

const GetAbsence = async (id) => {
  return request({ url: `/api/Absence/Show/${id}` })

}

export default GetAbsence


