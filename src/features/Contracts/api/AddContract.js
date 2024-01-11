import { request } from "../../../utiltis/AxiosUtilitis";

const AddContract = (payload) => {
  return request({
    url: `/api/contract/Add`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AddContract;
