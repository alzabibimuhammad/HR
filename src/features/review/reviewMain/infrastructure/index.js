
export const ReviewData = elements => {
  console.log("🚀 ~ ReviewData ~ elements:", elements)
  return elements?.map((element, index) => ({
    id: element?.id,
    first_name: element?.user_id,
    date: element?.date,
    employee: element?.evaluator_count
  }));
};
