export const SecretariatsData = elements => {
  return elements?.map(element => {
    return {
      id: element?.id,
      first_name:element?.user?.first_name,
      last_name: element?.user?.last_name,
      description:element?.description,
      date:element?.received_date,
      user_info:element?.user?.user_info?.image,
      user_id:element?.user?.id,
      specialization:element?.user?.specialization,
      name:element?.user?.name,
      title:element?.title
    }
  })
}
