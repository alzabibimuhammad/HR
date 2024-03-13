export function FormateTime(date) {
    // Check if the input date is valid
    if (isNaN(new Date(date).getTime())) {
      // Handle invalid date, you might want to throw an error or return an appropriate value

      return null; // or throw new Error("Invalid date format");
    }

    var originalDate = new Date(date);
    var day = originalDate.getUTCDate();
    var month = originalDate.getUTCMonth() + 1; // Months are zero-based, so we add 1
    var year = originalDate.getUTCFullYear()+ 1;


    var formattedDate =year + '-' + (month < 10 ? '0' : '') + month + '-' + day +'';


    return formattedDate;
  }
