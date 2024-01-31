export const RegistrationData = elements => {


  const targetTime = "09:15"
  const currentDate = new Date();
  const endTime = "16:45"

  const CurrentHours = currentDate?.getHours()?.toString()?.padStart(2, '0');
  const CurrentMinutes = currentDate?.getMinutes()?.toString()?.padStart(2, '0');
  const CurrentFormattedTime = `${CurrentHours}:${CurrentMinutes}`;


  console.log('currentDate',CurrentFormattedTime<endTime);

  return elements?.[0]?.map(element => {
    let checkinDate,checkoutDate;

    element?.attendance?.forEach(element => {
      if(element?.status==0)
        checkinDate = element?.datetime
      else
        checkoutDate = element?.datetime

    });

    let statusX;

    if (checkinDate) {
      const checkinTime = new Date(checkinDate);
      const hours = checkinTime?.getHours()?.toString()?.padStart(2, '0');
      const minutes = checkinTime?.getMinutes()?.toString()?.padStart(2, '0');
      const formattedTime = `${hours}:${minutes}`;

      checkinDate = formattedTime

      if (formattedTime < targetTime) {
        statusX = "Arrived";
      }
      else {
        statusX = "Late";
      }
    }
    else if(!checkinDate && !checkoutDate)
      if(CurrentFormattedTime>endTime) {
        statusX="Absent";
      }
      else
        statusX="Late";

    else if(!checkinDate && checkoutDate)
      statusX = "Wrong"

    if(checkinDate&&checkoutDate) {
      statusX = "Checked Out";
    }

    const checkoutTime = new Date(checkoutDate);
    const hours = checkoutTime?.getHours()?.toString()?.padStart(2, '0');
    const minutes = checkoutTime?.getMinutes()?.toString()?.padStart(2, '0');
    const outformattedTime = `${hours}:${minutes}`;

    if(outformattedTime!='NaN:NaN')
      checkoutDate = outformattedTime
    else
      checkoutDate = '---'
    if(!checkinDate)
      checkinDate='---'
    return {
      id: element?.id,
      first_name: element?.first_name,
      last_name: element?.last_name,
      department: element?.department?.name,
      status: statusX,
      checkIn: checkinDate,
      checkOut: checkoutDate
    };
  });
};
