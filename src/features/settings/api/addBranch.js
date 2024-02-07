import { request } from "src/utiltis/AxiosUtilitis";

const AddBranch = (branch) => {
  return request({ url: '/api/branch/Add', method: "post",data:{
    name:branch
  } });
};

export default AddBranch;
