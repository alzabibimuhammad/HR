import { request } from "src/utiltis/AxiosUtilitis";

const EditNote = (obj) => {

  return request({ url: `/api/Notes/Update/${obj?.id}`, method: "post",data:{
    content:obj?.content
  } });

};

export default EditNote;
