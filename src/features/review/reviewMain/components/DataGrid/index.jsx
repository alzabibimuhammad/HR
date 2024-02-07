import React, { useEffect, useState } from 'react'
import { Card, CardContent, MenuItem, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { Box, Stack } from '@mui/system'
import useReviewColumn from '../../Hook/useReviewColumn'
import { ReviewData } from '../../infrastructure'

const ReviewFeature = ({ Data }) => {
  const columns = useReviewColumn()

  let data  = Data?.data?.data

  const [rows, setRows] = useState(data)
  const [date, setDate] = useState()

  useEffect(() => {
    setRows(ReviewData(data))

  }, [Data])
  const { t } = useTranslation()

  const handelSearch = event => {
    // let searchData

    // const searchText = event.target.value
    // if (!searchText) {
    //   setRows(ReviewData(data))
    // } else {
    //   searchData = ReviewData(data)?.filter(element => {
    //     if (element?.first_name?.toLowerCase()?.includes(searchText.toLowerCase())) {
    //       return element?.first_name?.toLowerCase()?.includes(searchText.toLowerCase())
    //     } else if (element?.last_name?.toLowerCase()?.includes(searchText.toLowerCase())) {
    //       return element?.last_name?.toLowerCase()?.includes(searchText.toLowerCase())
    //     } else if (element?.id == searchText) {
    //       return element?.id == searchText
    //     }
    //   })

    //   setRows(searchData)
    // }
  }
  const handelDate = event=>{
    setDate(event.target.value)
  }

  useEffect(()=>{
      const filterDate = data?.[0]?.filter((element)=>{
        return element?.date === date
      })
      setRows(ReviewData([filterDate]))
  },[date])

  return (
    <Stack height={'100%'}>
      <Card>
        <CardContent>

          <Stack direction={'column'} spacing={3} >

              <Stack direction={{sm:'row',xs:'column'}} spacing={6} >

              <TextField
              placeholder={t('Search')}
              fullWidth
              InputProps={{
                startAdornment: (
                  <Box paddingRight={1}>
                    <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                      <g id='zoom-split'>
                        <path
                          id='Combined Shape'
                          fill-rule='evenodd'
                          clip-rule='evenodd'
                          d='M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z'
                          fill='#8090A7'
                        />
                      </g>
                    </svg>
                  </Box>
                )
              }}
              onChange={handelSearch}
              sx={{ backgroundColor: '#F5F7FA', border: 'none', boxShadow: 'none' }}
              size='small'
            />
                 <TextField
                  type='date'
                  fullWidth
                  size='small'
                  onChange={handelDate}
                  />
              </Stack>

          <CustomDataGrid columns={columns} rows={rows || [] } />
          </Stack>


        </CardContent>
      </Card>
    </Stack>
  )
}


export default ReviewFeature
