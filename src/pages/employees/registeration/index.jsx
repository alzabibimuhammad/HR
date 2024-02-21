import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Registration from 'src/features/registeration/components/DataGrid'
import { getRegisteration } from './store'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

export default function Registeration() {
  const dispatch = useDispatch()

  const store = useSelector(state => state.RegisterStore)

  const [data , setData] = useState([])

  const [filterDate,setFilterDate] = useState({})


  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  let formattedDate = `${year}-${month}-${day}`;


  useEffect(()=>{

    if(Object?.keys(filterDate).length != 0)
      dispatch(getRegisteration(filterDate))
    else
      dispatch(getRegisteration(formattedDate))

    setData(store?.data)

  },[dispatch,store?.data?.length,filterDate])

  return (
    <>
      {data ? <Registration Data={data} setFilterDate={setFilterDate}/> :    <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"70vh"}}>

<CircularProgress className='loading-rtl'/>
</Box> }

      </>
  )
}
