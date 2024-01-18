import { request } from "../../../utiltis/AxiosUtilitis";

const deleteRequest = (id) => {
  return request({ url: `/api/Request/Delete/${id}`, method: "delete" });
};

export default deleteRequest;
