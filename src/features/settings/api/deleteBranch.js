import { request } from "src/utiltis/AxiosUtilitis";

const deleteBranch = (id) => {
  return request({ url: `/api/branch/Delete/${id}`, method: "delete" });
};

export default deleteBranch;
