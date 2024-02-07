export const ReviewData = elements => {

  return elements?.[0]?.map(element => {
    return {
      id: element?.id,
      first_name: element?.id,
      date:element?.date,
      employee:element?.evaluator_count
    };
  });
};
