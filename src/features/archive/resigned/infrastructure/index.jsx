
export const ResignedData = elements => {

  return elements||[]?.map(element => {
    return {
      id: element?.id,
      first_name:element?.first_name,
      last_name: element?.last_name,
      role: element?.role,
      specialization:element?.specialization,
      image:element?.user_info?.image
    }
  })
}
