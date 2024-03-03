
export const RegistrationData = (elements,filterDate,policyTime) => {
let [startHour, startMinuts] = String(policyTime?.start)?.split(':');
let [endHour, endMinuts] = String(policyTime?.end)?.split(':');
/* start time form policy */
startHour = parseInt(startHour);
startMinuts = parseInt(startMinuts);
startMinuts += 30;

if (startMinuts >= 60) {
    startHour += 1;
    startMinuts -= 60;
}
startHour = startHour.toString().padStart(2, '0');
startMinuts = startMinuts.toString().padStart(2, '0');
/*end time from policy */
endHour = parseInt(endHour);
endMinuts = parseInt(endMinuts);
endMinuts -= 15;

if (endMinuts < 0) {
    endHour -= 1;
    endMinuts += 60;
}
endHour = endHour.toString().padStart(2, '0');
endMinuts = endMinuts.toString().padStart(2, '0');


  const newStartTime = `${startHour}:${startMinuts}`;
  const newEndTime = `${endHour}:${endMinuts}`;

  const targetTime = newStartTime
  const endTime = newEndTime
  const currentDate = new Date();

  const CurrentHours = currentDate?.getHours()?.toString()?.padStart(2, '0');
  const CurrentMinutes = currentDate?.getMinutes()?.toString()?.padStart(2, '0');
  const CurrentFormattedTime = `${CurrentHours}:${CurrentMinutes}`;

  const Currentyear = currentDate.getFullYear();
  const Currentmonth = String(currentDate.getMonth() + 1).padStart(2, '0');
  const Currentday = String(currentDate.getDate()).padStart(2, '0');

  const CurrentformattedDate = `${Currentyear}-${Currentmonth}-${Currentday}`;



  return elements?.[0]?.map(element => {
    let checkinDate=null,checkoutDate=null;
    const checkArray = [];

    element?.attendance?.forEach(element => {
      if(element?.status==0){
        checkinDate = element?.datetime
        checkArray.push(checkinDate)
      }
      else if(element?.status ==1)
        checkoutDate = element?.datetime

    });

    let statusX;
    if(checkArray?.length){
        const checkinTime = new Date(checkArray[0]);
        const hours = checkinTime?.getHours()?.toString()?.padStart(2, '0');
        const minutes = checkinTime?.getMinutes()?.toString()?.padStart(2, '0');
        const formattedTime = `${hours}:${minutes}`;
        checkinDate = formattedTime

        if(!checkoutDate){

          if(formattedTime < targetTime){
            if(Object?.keys(filterDate)?.length)
              if(CurrentformattedDate > filterDate)
                statusX = "Arrived but forgot to checkout"
              else
                statusX="Arrived"
            else{
              statusX="Arrived"
            }

          }

          else{
            if(Object?.keys(filterDate)?.length)
              if(CurrentformattedDate > filterDate)
                statusX = "Arrived late & forgot to checkout"
              else
                statusX="Arrived & Late"
            else statusX="Arrived & Late"
          }
        }
        if(checkoutDate){
          const checkoutTime = new Date(checkoutDate);
          const hours = checkoutTime?.getHours()?.toString()?.padStart(2, '0');
          const minutes = checkoutTime?.getMinutes()?.toString()?.padStart(2, '0');
          const outTime = `${hours}:${minutes}`;
          if(formattedTime < targetTime && outTime >= endTime) statusX="out"
          else if(formattedTime > targetTime && outTime >= endTime) statusX="Out & Arrived Late"
          else if(formattedTime < targetTime && outTime < endTime) statusX="Early Out"
          else statusX = "Out Eatly&Arraived Late"
          checkoutDate = outTime
        }
    }

    else if(!checkArray?.length && checkoutDate){
      const checkoutTime = new Date(checkoutDate);
      const hours = checkoutTime?.getHours()?.toString()?.padStart(2, '0');
      const minutes = checkoutTime?.getMinutes()?.toString()?.padStart(2, '0');
      const outTime = `${hours}:${minutes}`;
      checkoutDate = outTime
      statusX='Wrong'}
    else{
      if(Object?.keys(filterDate)?.length)
        if( CurrentformattedDate > filterDate || (CurrentformattedDate == filterDate && CurrentFormattedTime > endTime) ) statusX="Absent";
        else statusX="Late";
      else
        if(CurrentFormattedTime > endTime)statusX = "Absent"
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
