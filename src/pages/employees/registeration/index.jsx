import React, { use, useEffect, useState } from 'react'

import Registration from 'src/features/registeration/components/DataGrid'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import getAttendance from './api'

export default function Registeration() {

  const [filterDate,setFilterDate] = useState({})
  const [data , setData] = useState(null);

  useEffect(() => {
    const fetchData =  async (date) => {
      const jsonData =  await getAttendance(date);
      setData(jsonData);
    }

      fetchData(filterDate);

  }, [filterDate]);



  return (
    <>
      {data ? <Registration Data={data} filterDate={filterDate} setFilterDate={setFilterDate}/> :    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

<CircularProgress className='loading-rtl'/>
</Box> }

      </>
  )
}
