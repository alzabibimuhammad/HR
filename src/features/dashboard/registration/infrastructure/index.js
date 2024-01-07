
 export const RegistrationData = elements => {

  return elements.map(element => {
    const dateOnly = element?.SubscriptionDate ? element.SubscriptionDate.split('T')[0] : null;

    return {
      id: element?.id,
      name: element?.userNaname,
      remainingTime: element?.remainingTime,
      paidStatus:element?.paidStatus,
      daysNotPaid:element?.daysNotPaid,
      SubscriptionDate: dateOnly
    }
  })
}
