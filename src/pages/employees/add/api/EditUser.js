import { request } from "src/utiltis/AxiosUtilitis";

const EditUsers = (payload) => {

  return request({
    url: `/api/Users/updateUser/${payload?.id}`,
    method: "post",
    data: payload.data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default EditUsers;
