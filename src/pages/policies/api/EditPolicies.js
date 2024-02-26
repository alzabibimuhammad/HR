import { request } from "src/utiltis/AxiosUtilitis";


const EditPolicies = (payload) => {


  return request({
    url: `/api/Policy/Update`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },

  });
};

export default EditPolicies;
