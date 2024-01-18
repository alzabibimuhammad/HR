export const AbsenceData = elements => {


  return elements?.data?.map(element => {
    return {
      id: element?.id,
      first_name:element?.first_name,
      last_name: element?.last_name,
      justified: element?.justified,
      unjustified:element?.unjustified,
      total:element?.total,
    }
  })
}
