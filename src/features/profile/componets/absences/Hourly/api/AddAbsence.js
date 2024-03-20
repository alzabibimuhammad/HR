import { request } from "src/utiltis/AxiosUtilitis"


const AddAbsence =  (obj) => {
  return request({ url: `/api/Absence/AddAbsence`, method: "post",   headers: {
    "Content-Type": "multipart/form-data",
  },data:obj  })
}

export default AddAbsence
