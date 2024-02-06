import { request } from "src/utiltis/AxiosUtilitis";

const editBranch = (obj) => {
  return request({ url: `/api/branch/Update/${obj.id}`, method: "post",data:{
    name:obj.branch
  } });
};

export default editBranch;
