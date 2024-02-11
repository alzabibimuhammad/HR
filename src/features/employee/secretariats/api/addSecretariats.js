import { request } from "src/utiltis/AxiosUtilitis";

const AddSecretariats = async (obj) => {

  return request({
    url: '/api/Deposit/Add',
    method: 'post',
    data:obj
  });
}

export default AddSecretariats
