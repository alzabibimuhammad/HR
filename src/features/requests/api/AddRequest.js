import { request } from "../../../utiltis/AxiosUtilitis";

const AddRequest = (payload) => {
  return request({
    url: `/api/requests/Add`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AddRequest;
