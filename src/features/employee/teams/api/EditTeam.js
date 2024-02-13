import { request } from "../../../../utiltis/AxiosUtilitis";

const EditTeam = (payload) => {

  return request({
    url: `/api/Team/updateTeam/${payload.id}`,
    method: "post",
    data: payload.formData,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export default EditTeam;
