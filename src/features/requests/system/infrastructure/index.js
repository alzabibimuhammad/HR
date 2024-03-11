  export const SystemData = elements => {

    return elements?.data?.data?.map(element => {
      let countAlert = element?.user?.alert?.length
      let title;

      if(countAlert<3 && countAlert > 0)
        title = "Warning"
      else if (countAlert >=3)
        title = "Dismissed"
      else
        title = "None"
      return {
        id:element?.id,
        user_id:element?.user?.id,
        content: element?.hours_num,
        title: title,
        date:element?.lateDate,
        first_name:element?.user?.first_name,
        last_name:element?.user?.last_name,
        user_info:element?.user?.user_info?.image,
        specialization:element?.user?.specialization
      }
    })
  }
