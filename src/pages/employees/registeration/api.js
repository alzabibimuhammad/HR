import { showErrorToast } from "src/utiltis/showErrorToast";

const getAttendance = async (date) => {
  const datee = new Date();

  const year = datee.getFullYear();
  const month = String(datee.getMonth() + 1).padStart(2, '0');
  const day = String(datee.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  try {
    const response = await fetch(`${'http://192.168.2.138:800'}/api/DayAttendance/${Object.keys(date).length?date:formattedDate}?branch_id=${localStorage.branch}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.accessToken}`
      }
    });

    if (!response.ok) {
      showErrorToast("","Network response was not ok")
    }

    const jsonData = await response.json();
    return jsonData;

  } catch (error) {
    showErrorToast("",)
    console.error('Error fetching data:', error);

    return null;
  }
};

export default getAttendance;

