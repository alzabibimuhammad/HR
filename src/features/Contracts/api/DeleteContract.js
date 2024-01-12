import { request } from "../../../utiltis/AxiosUtilitis";

const deleteContract = (id) => {
  return request({ url: `/api/contract/Delete/${id}`, method: "delete" });
};

export default deleteContract;
