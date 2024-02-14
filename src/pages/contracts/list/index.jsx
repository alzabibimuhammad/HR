
import { Box, CircularProgress } from '@mui/material'
import ListGrid from 'src/features/Contracts/list/Componets/DataGrid'
import useGetAllContracts from 'src/features/Contracts/list/Hooks/useGetAllContracts'

export default function ListContracts() {
const {data , loading} =useGetAllContracts()


  return <>

    {data ? <ListGrid rows={data}  /> :
    <Box sx={{display: 'flex',justifyContent:"center",alignItems:"center",height:'100%' }} ><CircularProgress /></Box>
      }

     </>

}
