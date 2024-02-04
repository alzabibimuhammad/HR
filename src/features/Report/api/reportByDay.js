import { request } from "../../../utiltis/AxiosUtilitis";

const ReportByDay = (payload) => {
  return request({
    url: `/api/Report/reportByDay`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default ReportByDay;
