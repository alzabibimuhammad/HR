export const SecretariatsData = elements => {
  return elements?.map(element => {
    return {
      id: element?.id,
      first_name:element?.user?.first_name,
      last_name: element?.user?.last_name,
      description:element?.description,
      date:element?.received_date

    }
  })
}
