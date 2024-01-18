export const InquiriesData = elements => {

  return elements?.data?.data?.map(element => {
    return {
      id:element?.id,
      CONTENT: element?.description,
      Title: element?.title,
      Date:element?.date,
      employee:element?.user?.first_name  +" "+ element?.user?.last_name ,
    }
  })
}
