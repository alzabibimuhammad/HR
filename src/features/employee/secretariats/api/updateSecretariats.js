import { request } from "src/utiltis/AxiosUtilitis";

const UpdateSecretariats = async (obj) => {

  return request({
    url: `/api/Deposit/Update/${obj?.id}`,
    method: 'post',
    data:obj?.data
  });
}

export default UpdateSecretariats
