import { request } from "src/utiltis/AxiosUtilitis";


const AddPolicies = (payload) => {

  return request({
    url: `/api/Policy/Add`,
    method: "post",
    data: payload,

  });
};

export default AddPolicies;
