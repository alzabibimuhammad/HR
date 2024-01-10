export const ContractsData = elements => {
  return elements.map(element => {
    return {
      image:element?.image[0],
      id: element?.id,
      name: element?.name,
      phoneNumber: element?.phoneNumber,
      rate:element?.rate,
      birthDate:element?.birthDate,
      createdAt: element?.createdAt
    }
  })
}
