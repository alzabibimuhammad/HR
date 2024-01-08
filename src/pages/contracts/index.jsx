import { useDispatch, useSelector } from 'react-redux'
import { getContractsData } from './store'
import { useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material'
import ContractGrid from 'src/features/Contracts/Componets/DataGrid'


const ContractsPage = () => {
  const store = useSelector(state => state.ContractsStore)
const [Data,setData]=useState([])

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getContractsData())
    setData(store?.data?.data)
  }, [dispatch, store?.data.length])


  return (
    <>
   {Data ? <ContractGrid rows={store?.data?.data}  /> :
   <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><CircularProgress /></Box>
     }

    </>
  )
}

export default ContractsPage
