import { request } from "src/utiltis/AxiosUtilitis";

const DeleteSecretariats = async (id) => {

  return request({
    url: `/api/Deposit/Delete/${id}`,
    method: 'delete',
  });
}

export default DeleteSecretariats
