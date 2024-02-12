export const AbsenceData = elements => {

  return elements?.data?.data?.data?.map(element => {
    return {
      id: element?.id,
      name:element?.username,
      justified: element?.userjustified,
      unjustified:element?.userUnjustified,
      total:element?.all,
    }
  })
}
