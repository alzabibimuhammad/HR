import { request } from "src/utiltis/AxiosUtilitis";

const AddAbsence = (payload) => {
  return request({
    url: `/api/Absence/AddAbsence`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AddAbsence;
