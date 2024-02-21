import { request } from "../../../utiltis/AxiosUtilitis";

const ReportByDay = (payload) => {
  return request({
    url: `/api/Report/reportByDay?date=${payload.date}`,
    method: "post",
    data:payload.data,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default ReportByDay;

