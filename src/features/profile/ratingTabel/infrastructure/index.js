
export const RatingData = elements => {

    return elements?.map(element => {

      return {
        id: element?.id,
        FirstName:element?.f_name,
        lastName:element?.l_name ,
        date: element?.date,
        rate3: element?.rate3,
        rate1:element?.rate1,
        rate2: element.rate2 ,


      };
    });
  };
