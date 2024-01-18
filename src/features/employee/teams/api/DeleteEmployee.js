import { request } from "../../../../utiltis/AxiosUtilitis";

const deleteEmployee = (id) => {
  return request({ url: `/api/Team/deleteTeam/${id}`, method: "delete" });
};

export default deleteEmployee;
