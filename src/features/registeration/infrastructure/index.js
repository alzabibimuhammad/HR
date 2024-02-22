export const RegistrationData = elements => {


  const targetTime = "09:15"
  const currentDate = new Date();
  const endTime = "16:45"

  const CurrentHours = currentDate?.getHours()?.toString()?.padStart(2, '0');
  const CurrentMinutes = currentDate?.getMinutes()?.toString()?.padStart(2, '0');
  const CurrentFormattedTime = `${CurrentHours}:${CurrentMinutes}`;



  return elements?.[0]?.map(element => {
    let checkinDate=null,checkoutDate=null;

    element?.attendance?.forEach(element => {
      if(element?.status==0)
        checkinDate = element?.datetime
      else if(element?.status ==0)
        checkoutDate = element?.datetime

    });

    let statusX;
    if(checkinDate){
        const checkinTime = new Date(checkinDate);
        const hours = checkinTime?.getHours()?.toString()?.padStart(2, '0');
        const minutes = checkinTime?.getMinutes()?.toString()?.padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        checkinDate = formattedTime
        if(!checkoutDate){
          if(formattedTime < targetTime)statusX="Arrived"
          else statusX="Arrived & Late"
        }
        if(checkoutDate){
          const checkoutTime = new Date(checkoutDate);
          const hours = checkoutTime?.getHours()?.toString()?.padStart(2, '0');
          const minutes = checkoutTime?.getMinutes()?.toString()?.padStart(2, '0');
          const outTime = `${hours}:${minutes}`;
          if(formattedTime < targetTime && outTime >= endTime) statusX="Out"
          else if(formattedTime > targetTime && outTime >= endTime) statusX="Out & Arrived Late"
          else if(formattedTime < targetTime && outTime < endTime) statusX="Out & Late"
          else statusX = "Out Late&Arraived Late"
          checkoutDate = outTime
        }
    }

    else if(!checkinDate && checkoutDate){
      const checkoutTime = new Date(checkoutDate);
      const hours = checkoutTime?.getHours()?.toString()?.padStart(2, '0');
      const minutes = checkoutTime?.getMinutes()?.toString()?.padStart(2, '0');
      const outTime = `${hours}:${minutes}`;
      checkoutDate = outTime
      statusX='Wrong'}
    else{
      if(CurrentFormattedTime>endTime) statusX="Absent";
      else statusX="Late";
    }



    return {
      id: element?.id,
      first_name: element?.first_name,
      last_name: element?.last_name,
      department: element?.department?.name,
      status: statusX,
      checkIn: checkinDate,
      checkOut: checkoutDate,
      user_info:element?.user_info?.image
    };
  });
};
