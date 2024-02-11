export const SalaryData = elements => {
  return elements?.data?.data?.map(element => {
    let total = element?.BaseSalary+element?.reward+element?.deduction+element?.advance
    return {
      id: element?.id,
      first_name:element?.first_name,
      last_name: element?.last_name,
      base: element?.BaseSalary,
      overtime:element?.overtime,
      reward:element?.reward,
      deducations:element?.deduction,
      advances:element?.advance,
      total:total

    }
  })
}
