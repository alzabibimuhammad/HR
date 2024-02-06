import { request } from "src/utiltis/AxiosUtilitis";

const deleteBranch = (data) => {

  return request({ url: `/api/branch/Delete/${data?.id}`, method: "post",data:{
    password:data?.password
  } });
};

export default deleteBranch;
