import { request } from "src/utiltis/AxiosUtilitis";


const AddPolicies = (payload) => {

  return request({
    url: `/api/Policy/Add`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AddPolicies;
