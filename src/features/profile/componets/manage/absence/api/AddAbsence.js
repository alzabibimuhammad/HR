import { request } from "src/utiltis/AxiosUtilitis";

const AddAbsence = (payload) => {
  return request({
    url: `/api/Absence/store_one_absence`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AddAbsence;

//http://192.168.2.138:800/api/Absence/store_one_absence
