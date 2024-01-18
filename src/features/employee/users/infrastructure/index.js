export const UsersData = elements => {
  console.log('infrastucter3333...',elements?.data);
  return elements?.data?.data?.map(element => {
    console.log('oiiiiii',element?.department?.name);
    return {
      id: element?.id,
      first_name:element?.first_name,
      last_name: element?.last_name,
      role: element?.role,
      specialization:element?.department?.name,
    }
  })
}
