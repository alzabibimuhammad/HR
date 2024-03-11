export const AbsenceData = elements => {

  return elements?.data?.data?.map(element => {

console.log("element",element?.userinfo?.level);

    return {
      id: element?.id,
      name:element?.username,
      last_name:element?.lastname,
      justified: element?.userJustified,
      unjustified:element?.userUnjustified,
      total:element?.all,
      user_info:element?.userinfo,
      specialization:element?.specialization,
      level:element?.userinfo?.level

    }
  })
}
