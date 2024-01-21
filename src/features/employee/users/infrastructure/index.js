export const UsersData = elements => {
  console.log('elefff',elements);
  return elements?.data?.data?.map(element => {
    return {
      id: element?.id,
      first_name:element?.first_name,
      last_name: element?.last_name,
      role: element?.role,
      specialization:element?.department?.name,
    }
  })
}
