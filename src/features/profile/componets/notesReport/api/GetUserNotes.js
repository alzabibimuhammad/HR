import { request } from "src/utiltis/AxiosUtilitis"

const GetuserNotes = async (id) => {

  return request({ url: `/api/Notes/userNote/${id}` })
}

export default GetuserNotes


