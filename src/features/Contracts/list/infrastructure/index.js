export const ContractsData = elements => {
<<<<<<< HEAD

  return elements?.data?.data?.map(element => {
=======
  console.log("🚀 ~ ContractsData ~ elements:", elements.data?.data?.data)

  return elements.data?.data?.data.map(element => {
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
    return {
      endDate:element?.endDate,
      id: element?.contract_id,
      startDate: element?.startDate,
      phoneNumber: element?.phoneNumber,
      status:element?.status,
      employee:element?.user?.first_name,
      role: element?.user?.role
    }
  })
}
