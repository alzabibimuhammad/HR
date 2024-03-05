import React, { useEffect, useState } from 'react'
import { Card, CardContent, MenuItem, TextField, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { Box, Stack } from '@mui/system'
import useReviewColumn from '../../Hook/useReviewColumn'
import { ReviewData } from '../../infrastructure'
import Show10 from 'src/@core/components/show10'

const ReviewFeature = ({ Data }) => {
  const columns = useReviewColumn()

  let data  = Data?.data?.data

  const [rows, setRows] = useState(data)
  const [date, setDate] = useState()
  const [search, setSearch] = useState()
  const [show, setShow] = React.useState(10);

  useEffect(() => {

    let filterData = ReviewData(Data?.data.data)
    if(date)filterData = filterData?.filter((value,index)=>value?.date==date)
    setRows(filterData)
  }, [Data,date])

  const { t } = useTranslation()


  const handelDate = event=>{
    let value = event.target.value
    if (value) setDate(value)
    else setDate(null)
  }


  return (
    <>
            <Typography className='Pagetitle'>
        {t("Reviews")}
        </Typography>
      <Card sx={{ marginTop:'24px' }} >
        <CardContent>
          <Stack direction={'column'} spacing={3} >


          <Stack direction={'row'} width={{sm:'100%',xs:'100%'}} spacing={3} alignItems={'center'} >
                <Stack width={'100%'} spacing={2} direction={'row'} alignItems={'center'}>
                <Box mb={2} width={{ sm:'120px',xs:'100px' }} >
                  <Show10 setShow={setShow}/>
                </Box>
                 <TextField
                  type='date'
                  size='small'
                  sx={{ width:{sm:'320px',md:'320px',xs:'100%'} }}
                  onChange={handelDate}
                  />
          </Stack>
          </Stack>

          <CustomDataGrid columns={columns} show={show}   rows={rows || [] } />


    </Stack>
        </CardContent>
      </Card>
      </>
  )
}


export default ReviewFeature
