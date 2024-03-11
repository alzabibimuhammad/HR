import { request } from "../../../utiltis/AxiosUtilitis";

const Reports = (payload) => {
  return request({
    url: `/api/Report/All/?date=${payload}`,
    method: "get",

    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default Reports;
