import data from "src/@fake-db/components/data";

 export const RegistrationData = elements => {


   let arrr = new Array

   return elements?.map(element => {
     let statusX ;

    if(Number(element.attendance?.[0]?.status) === 0)
      statusX = "checkout"
    else if(Number(element.attendance?.[0]?.status) === 1)
      statusX = "checkin"
    else
      statusX = "none"

    console.log("finalll",arrr);

    return {
      id: element?.id,
      first_name: element?.first_name,
      last_name: element?.last_name,
      department:element?.department?.name,
      status:statusX

  }


})


 }



