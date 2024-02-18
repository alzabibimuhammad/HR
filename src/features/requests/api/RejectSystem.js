import { request } from "src/utiltis/AxiosUtilitis";

const RejectSystem = (id) => {
  return request({ url: `/api/Late/rejectAlert?alert_id=${id}`, method: "post" });
};

export default RejectSystem;
