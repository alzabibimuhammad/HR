import { request } from "../../../utiltis/AxiosUtilitis";

const GetviewRequest = (id) => {
  return request({ url: `/api/Request/Show/${id}`});
};

export default GetviewRequest;
