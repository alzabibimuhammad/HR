import { FormateDate } from "src/utiltis/DateFormate";
import { FormateTime } from "src/utiltis/TimeFormat";

export const ComplaintsData = elements => {

  return elements?.map(element => {
    let date = FormateDate(element.date)
 

    
    return {
      id: element?.id,
      first_name: element?.user?.first_name,
      last_name: element?.user?.last_name,
      date: date,
      
      description: element?.description,
      user_info:element?.user?.user_info?.image,
      user_id:element?.user?.id,
      specialization:element?.user?.specialization,
      department:element?.department?.name?element?.department?.name:'',

    };

  });
};
