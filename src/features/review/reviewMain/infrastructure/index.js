
export const ReviewData = elements => {
  return elements?.map((element, index) => ({
    id: element?.id,
    first_name: element?.id,
    date: element?.date,
    employee: element?.evaluator_count
  }));
};
