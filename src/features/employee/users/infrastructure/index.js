export const UsersData = elements => {
  return elements?.data?.data?.map(element => {
    return {
      id: element?.id,
      first_name:element?.first_name,
      last_name: element?.last_name,
      middle_name:element?.middle_name,
      role: element?.role,
      specialization:element?.specialization,
      level:element?.level,
      status:element?.status,
      email:element?.email,
      user_info:element?.user_info?.image,
      department:element?.department?.name?element?.department?.name:'---'
    }
  })
}
