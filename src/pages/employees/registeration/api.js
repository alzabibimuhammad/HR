import axios from "axios"
import { showErrorToast } from "src/utiltis/showErrorToast"

const getRegisteration =(date)=> {

  try{
  const response = axios.get(process.env.NEXT_PUBLIC_BASE_URL + `/api/DayAttendance/${date}?branch_id=${localStorage.branch}`, {
    headers: {
      Authorization: `Bearer ${localStorage.accessToken}`
    }
  })
  return {
    data: response.data
  }
  }
  catch (error) {
     showErrorToast(error,"")
  }
}

export default getRegisteration
