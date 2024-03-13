
export const ResignedData = elements => {
  return elements?.map(element => {
    const date = new Date(element?.deleted_at)
    const year = date.getFullYear()
    const month = date.getMonth()+1
    const day = date.getDate()
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes()
    const seconds = date.getUTCSeconds()
    const formattedDate = year + '-' + (month < 10 ? '0' : '') + month + '-' + (day < 10 ? '0' : '') + day +'';
    const formatedTime = (hours < 10 ? '0' : '') + hours +':'+(minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds

    return {
      id: element?.id,
      first_name:element?.first_name,
      last_name: element?.last_name,
      role: element?.role,
      level:element?.level,
      specialization:element?.specialization,
      department:element?.department?.name?element?.department?.name:'---',
      date:formattedDate,
      user_info:element?.user_info?.image,
      status:element?.isTrash,
      time:formatedTime

    }
  })
}
