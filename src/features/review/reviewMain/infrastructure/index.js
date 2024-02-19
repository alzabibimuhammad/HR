export const ReviewData = elements => {
  return elements?.map((element, index) => ({
    id: element?.[0]?.id,
    first_name: element?.[0]?.user_id,
    date: element?.[0]?.date,
    employee: element?.[0]?.evaluator_count
  }));
};
