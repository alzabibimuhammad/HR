
export const ResignedData = elements => {

  return elements||[]?.map(element => {
    return {
      id: element?.id,
      first_name:element?.first_name,
      last_name: element?.last_name,
      role: element?.role,
      specialization:element?.specialization,
      user_info:element?.user_info?.image,
      department:element?.department?.name?element?.department?.name:'---'
    }
  })
}
