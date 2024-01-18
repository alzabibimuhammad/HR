import { request } from "../../../utiltis/AxiosUtilitis";

const AccepteRequest = (id) => {
  return request({
    url: `/api/Request/accepteRequest/${id}`,
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AccepteRequest;
