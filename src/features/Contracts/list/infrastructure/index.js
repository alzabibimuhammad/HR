export const ContractsData = elements => {

  return elements?.data?.data?.map(element => {
    return {
      endDate:element?.endDate,
      id: element?.contract_id,
      startDate: element?.startDate,
      phoneNumber: element?.phoneNumber,
      status:element?.status,
      employee:element?.user?.first_name,
      employeeLastName:element?.user?.last_name,
      role: element?.user?.role,
      user_info: element?.user?.user_info?.image,
      user_id:element?.user?.id,
      specialization:element?.user?.specialization,
      path:element?.path
    }
  })
}
