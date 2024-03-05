import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect } from 'react'
import SalaryDataGrid from 'src/features/salary/users/componets/DataGrid'
import { useGetDataByMonth } from 'src/features/salary/users/hooks/useGetDataByMonth'
import { DateFormateOfMonth } from 'src/utiltis/DateFormateOfMonth'

export default function Employees() {


  const { data: GetDataByMonth, mutate: getData } = useGetDataByMonth()

  const date = DateFormateOfMonth(new Date())

  useEffect(() => {
    getData(date)
  }, [])




  return (
    <>
      {GetDataByMonth ? <SalaryDataGrid rows={GetDataByMonth} /> :
        <Box height={'100%'} display={'center'} justifyContent={'center'} alignItems={'center'} >
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70vh" }}>

            <CircularProgress className='loading-rtl' />
          </Box>
        </Box>}
    </>
  )

}
