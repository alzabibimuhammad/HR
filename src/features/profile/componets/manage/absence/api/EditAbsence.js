import { request } from "src/utiltis/AxiosUtilitis";

const EditAbsence = (obj) => {

  return request({
    url: `/api/Absence/update?id=${obj.id}`,
    method: "post",
    data: obj.formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default EditAbsence;


