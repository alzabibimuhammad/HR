import { request } from "src/utiltis/AxiosUtilitis";

const DeleteAbsence = (id) => {
  return request({ url: `api/Absence/deleteAbsence/${id}`, method: "delete" });
};

export default DeleteAbsence;
