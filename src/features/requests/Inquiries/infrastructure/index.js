  export const InquiriesData = elements => {

    return elements?.data?.data?.map(element => {

      const dateOnly = element?.created_at ? element.created_at.split('T')[0] : null;
      const time = element?.created_at ? element.created_at.split('T')[1].slice(0, -8) : null;

      return {
        id:element?.id,
        user_id:element?.user?.id,
        CONTENT: element?.description,
        Title: element?.title,
        Date:dateOnly,
        employee:element?.user?.first_name+" "+element?.user?.last_name ,
        status:element?.status,
        time:time,
        specialization:element?.user?.specialization,
        user_info:element?.user?.user_info?.image

      }
    })
  }
