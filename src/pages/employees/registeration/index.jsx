import React, { use, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Registration from 'src/features/registeration/components/DataGrid'
// import { getRegisteration } from './store'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import getRegisteration from './api'
import { request } from 'src/utiltis/AxiosUtilitis'
export default function Registeration() {
  const dispatch = useDispatch()

  const store = useSelector(state => state.RegisterStore)

  // const [data , setData] = useState([])

  const [filterDate,setFilterDate] = useState({})


  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  let formattedDate = `${year}-${month}-${day}`;

  const [data , setData] = useState(null);

  useEffect(() => {

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/DayAttendance/${Object.keys(filterDate).length?filterDate:formattedDate}?branch_id=${localStorage.branch}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.accessToken}`
      }
    })

      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(jsonData => {
        setData(jsonData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);

      });

  }, [,filterDate]);


  return (
    <>
      {data ? <Registration Data={data} setFilterDate={setFilterDate}/> :    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

<CircularProgress className='loading-rtl'/>
</Box> }

      </>
  )
}
