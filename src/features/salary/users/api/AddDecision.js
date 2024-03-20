import { request } from "src/utiltis/AxiosUtilitis";

const AddDecision = (payload) => {

  return request({
    url: `/api/Decision/addDecisions`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AddDecision;
