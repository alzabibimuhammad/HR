import { request } from "src/utiltis/AxiosUtilitis";

const DeleteComplaints = async (id) => {

  return request({
    url: `/api/Request/Delete/${id}`,
    method: 'delete',
  });
}

export default DeleteComplaints
