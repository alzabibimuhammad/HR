import { useDispatch, useSelector } from 'react-redux'
import { getReportsData } from './store'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { CircularProgress } from '@mui/material'
import CollapsibleTable from 'src/features/Report/componets/table'

const PlayersPage = () => {
  const [Data,setData]=useState([])

  const store = useSelector(state => state.ReportStore)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getReportsData())
    setData(store.data?.data)
  }, [dispatch, store?.data.length])




  return(

    <>
     {/* {Data ? <ReportGrid rows={Data} /> : <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><CircularProgress /></Box>} */}
    {Data ? <CollapsibleTable   Data={Data} /> : <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'50vh' }} ><CircularProgress /></Box>}
    </>
  )
}

export default PlayersPage
