export const AbsenceData = elements => {
console.log("🚀 ~ AbsenceData ~ elements:", elements)

  return elements?.data?.data?.map(element => {
    return {
      id: element?.id,
      name:element?.username,
      last_name:element?.lastname,
      justified: element?.userJustified,
      unjustified:element?.userUnjustified,
      total:element?.all,
      user_info:element?.userinfo,
      specialization:element?.specialization
    }
  })
}
