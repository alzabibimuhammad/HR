export const ReviewData = elements => {
  return elements?.map((element, index) => (
    element.map(ele => ({
      id: ele?.id +1,
      first_name: ele?.user_id,
      date: ele?.date,
      employee: ele?.evaluator_count
    }))
  ));
};
