import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
import ListGrid from 'src/features/Contracts/list/Componets/DataGrid'

export default function ListContracts() {
  const store = useSelector(state => state.ContractsStore)
  const [Data,setData]=useState([])

    const dispatch = useDispatch()

    useEffect(() => {
      setData(store?.data?.data)
    }, [dispatch, store?.data.length])


  return <>

    {Data ? <ListGrid rows={store?.data?.data}  /> :
    <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><CircularProgress /></Box>
      }

     </>

}
