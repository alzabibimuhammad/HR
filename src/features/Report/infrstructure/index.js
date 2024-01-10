export const ReportData = elements => {
  return elements.map(element => {
    // const dateOnly = element?.created_at ? element.created_at.split('T')[0] : null;

    return {
      id: element?.id,
      employee: element?.employee,
      role: element?.role,
      spcialization:element?.spcialization,
      team: element.team ,

    };
  });
};
