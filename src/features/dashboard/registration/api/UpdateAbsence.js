import { request } from "src/utiltis/AxiosUtilitis";

const UpdateAbsence = (payload) => {
  return request({
    url: `/api/Absence/update`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default UpdateAbsence;
