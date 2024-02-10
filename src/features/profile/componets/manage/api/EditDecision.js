import { request } from "src/utiltis/AxiosUtilitis";

const EditDecision = (obj) => {

  return request({
    url: `/api/Decision/edit/${obj.id}`,
    method: "post",
    data: obj.formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default EditDecision;


