import { request } from "../../../utiltis/AxiosUtilitis";

const deleteEmployee = (id) => {
  return request({ url: `/api/Team/Delete/${id}`, method: "delete" });
};

export default deleteEmployee;
