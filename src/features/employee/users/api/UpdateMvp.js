import { request } from "src/utiltis/AxiosUtilitis";

const UpdateMvp = async (id) => {

  return request({
    url: '/api/EmployeeOfMonth/Add',
    method: 'post',
    data: { user_id: id }, // Use 'data' instead of 'body'
  });
}

export default UpdateMvp
