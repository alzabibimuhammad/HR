import { request } from "src/utiltis/AxiosUtilitis";

const DeleteUser = async (id) => {

  return request({
    url: `/api/Users/removeUser/${id}`,
    method: 'delete',
  });
}

export default DeleteUser
