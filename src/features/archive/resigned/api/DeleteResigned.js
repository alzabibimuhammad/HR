import { request } from "src/utiltis/AxiosUtilitis";

const DeleteResigned= async (id) => {

  return request({
    url: `/api/Users/removeUser/${id}`,
    method: 'delete',
  });
}

export default DeleteResigned
