import { request } from "../../../../utiltis/AxiosUtilitis";

const DeleteTeam = (id) => {
  return request({ url: `/api/Team/deleteTeam/${id}`, method: "delete" });
};

export default DeleteTeam;
