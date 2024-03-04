import React, {  useEffect, useState } from 'react'

import Registration from 'src/features/registeration/components/DataGrid'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import getAttendance from './api'
import { useDispatch } from 'react-redux'
import { storeAttendanceLogs } from 'src/pages/dashboard/store'

export default function Registeration() {

  const [filterDate,setFilterDate] = useState({})
  const [data , setData] = useState(null);
  const dispatch = useDispatch()

  // useEffect(()=>{
  //   dispatch(storeAttendanceLogs())
  // },[])

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
