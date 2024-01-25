import { request } from "src/utiltis/AxiosUtilitis";

const AddUsers = (payload) => {
  return request({
    url: `/api/register`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AddUsers;
