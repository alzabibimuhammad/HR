import React, { use, useEffect, useState } from 'react'

import Registration from 'src/features/registeration/components/DataGrid'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import getAttendance from './api'

export default function Registeration() {


  // const [data , setData] = useState([])

  const [filterDate,setFilterDate] = useState({})


  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  const formattedDate = `${year}-${month}-${day}`;

  const [data , setData] = useState(null);

  useEffect(() => {
    const fetchData =  async (date) => {
      const jsonData =  await getAttendance(date);
      setData(jsonData);
    }

      fetchData(filterDate?filterDate:formattedDate);

  }, [formattedDate,filterDate]);



  return (
    <>
      {data ? <Registration Data={data} filterDate={filterDate} setFilterDate={setFilterDate}/> :    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

<CircularProgress className='loading-rtl'/>
</Box> }

      </>
  )
}
