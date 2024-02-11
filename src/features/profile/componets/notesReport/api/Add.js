import { request } from "src/utiltis/AxiosUtilitis";

const AddNote = (obj) => {
    return request({ url: `/api/Notes/Add`, method: "post",data:{
    user_id:obj.user_id,
    content:obj?.content
  } });

};

export default AddNote;
