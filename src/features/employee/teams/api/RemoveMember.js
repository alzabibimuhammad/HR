import { request } from "../../../../utiltis/AxiosUtilitis";

const RemoveMember = (id) => {
  return request({ url: `/api/Team/RemoveMember/${id}`, method: "post" });
};
export default RemoveMember;
