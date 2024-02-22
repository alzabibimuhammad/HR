export const AbsenceData = elements => {

  return elements?.data?.data?.map(element => {
    return {
      id: element?.id,
      name:element?.username,
      last_name:element?.lastname,
      justified: element?.userjustified,
      unjustified:element?.userUnjustified,
      total:element?.all,
      user_info:element?.userinfo?.image
    }
  })
}
