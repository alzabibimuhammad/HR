import { request } from "src/utiltis/AxiosUtilitis";

const EditDecision = (obj) => {
  console.log("🚀 ~ EditDecision ~ payload:", obj.data)

  return request({
    url: `/api/Decision/edit/${obj.id}`,
    method: "post",
    data: obj.data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default EditDecision;


