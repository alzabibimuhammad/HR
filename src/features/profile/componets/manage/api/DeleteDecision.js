import { request } from "src/utiltis/AxiosUtilitis";

const DeleteDecision = (id) => {
  return request({ url: `/api/Decision/remove/${id}`, method: "delete" });
};

export default DeleteDecision;
