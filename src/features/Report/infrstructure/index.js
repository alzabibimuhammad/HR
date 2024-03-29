export const ReportData = elements => {

  return elements.data?.data?.data?.map(element => {
    // const dateOnly = element?.created_at ? element.created_at.split('T')[0] : null;

    return {
      id: element?.id,
      employee: element?.first_name,
      role: element?.role,
      specialization:element?.specialization,
      team: element?.department?.name ,
      ID:element.id,
      Name:element.first_name,
      Email:element.email,
      created_at:element.created_at,

    };
  });
};
