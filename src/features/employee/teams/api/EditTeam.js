import { request } from "../../../../utiltis/AxiosUtilitis";

const EditTeam = (payload) => {
  console.log("🚀 ~ EditTeam ~ payload:", payload)

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
