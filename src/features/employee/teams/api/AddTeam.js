import { request } from "../../../../utiltis/AxiosUtilitis";

const AddTeam = (payload) => {
  return request({
    url: `/api/Team/storeTeams`,
    method: "post",
    data: payload,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default AddTeam;
