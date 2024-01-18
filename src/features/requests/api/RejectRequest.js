import { request } from "../../../utiltis/AxiosUtilitis";

const RejectRequest = (id) => {
  return request({
    url: `/api/Request/rejectRequest/${id}`,
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default RejectRequest;
