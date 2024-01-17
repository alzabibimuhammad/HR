import { request } from "../../../utiltis/AxiosUtilitis";

const GetviewContract = (id) => {
  return request({ url: `/api/contract/Show/${id}`});
};

export default GetviewContract;
