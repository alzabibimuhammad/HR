import { request } from "src/utiltis/AxiosUtilitis";

const EditEmployee = async (data) => {

  return request({
    url: `/api/Users/EditUser/${data.Data.id}`,
    method: 'post',
    data: data.data,
    headers: {
        "Content-Type": "multipart/form-data",
      },
  });
}

export default EditEmployee
