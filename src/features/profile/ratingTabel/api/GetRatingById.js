import { request } from "../../../../utiltis/AxiosUtilitis";

const getRatingById = (id) => {
  return request({
    url: `/api/Request/getRatingById/${id}`,
    method: "post",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default getRatingById;