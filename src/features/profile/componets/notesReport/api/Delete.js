import { request } from "src/utiltis/AxiosUtilitis";

const deleteNote = (id) => {

  return request({ url: `/api/Notes/Delete/${id}`, method: "delete" });

};

export default deleteNote;
