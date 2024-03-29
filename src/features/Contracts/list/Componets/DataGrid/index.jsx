import React, { useEffect, useState } from 'react'
import { Grid, Card, CardHeader, CardContent, MenuItem, Divider, Typography } from '@mui/material'
import TextField from '@mui/material/TextField'
import useContractColumns from '../../Hooks/useContractColumns'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import { useTranslation } from 'react-i18next'
import CustomDataGrid from 'src/@core/components/custom-datagrid'
import { ContractsData } from '../../infrastructure'
import { Box } from '@mui/system'
import Show10 from 'src/@core/components/show10'

const List = ({ rows }) => {
  const [Fdata , setFData] = useState(rows)
  const [show, setShow] = React.useState(10);
  const columns = useContractColumns()
  const { t } = useTranslation()
  const [FilterDate, setFilterDate] = useState()

  const [searchText, setsearchText] = useState()
  const [Rows, setRows] = useState()


  const handelSearch = event => {
    if(event.target.value)
      setsearchText(event.target.value)
    else
      setsearchText(null)
  };

  const handelDate = event => {
    setRows(ContractsData(rows))
    const value = event.target.value
    if (value) setFilterDate(value)
    else setRows(ContractsData(rows))
  }


  useEffect(() => {
    let date = Rows?.filter(element => {
      return FilterDate == element?.date
    })
    if (date?.length) setRows(date)
    else {
      if (FilterDate) setRows([])
      else setRows(ContractsData(rows))
    }
  }, [FilterDate])


  useEffect(()=>{
    let filterData = ContractsData(rows)
    if(searchText)filterData=filterData?.filter((value,index)=>(
      value?.employee?.toLowerCase()?.includes(searchText?.toLowerCase())||
      value?.employeeLastName?.toLowerCase()?.includes(searchText?.toLowerCase())
    ))
    setFData(filterData)
  },[rows,searchText])






  const gridStyles = {
    root: {
      '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
        borderRight: '0px solid #000'
      },
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#f0f0f0'
      },
      '& .MuiDataGrid-root': {
        scrollbarWidth: 'thin',
        scrollbarColor: '#000 #000',
        '&::-webkit-scrollbar': {
          width: '1px'
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#000'
        }
      }
    }
  }

  return (
<>
    <p className='Pagetitle' >
    {t("Contracts")}

    </p>
    <Card sx={{ marginTop:'24px' }} >
      <CardContent>

        <Stack direction={'row'} width={{sm:'100%',xs:'100%'}} spacing={3} alignItems={'center'}>
        <Box mb={2} width={{ sm:'120px',xs:'100px' }} >
                  <Show10 setShow={setShow}/>
                </Box>
        <TextField
          placeholder={t('Search')}

          InputProps={{
            startAdornment: (
              <Box paddingRight={1}>
                <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <g id='zoom-split'>
                    <path
                      id='Combined Shape'
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z'
                      fill='#8090A7'
                    />
                  </g>
                </svg>
              </Box>
            )
          }}
          onChange={handelSearch}
          sx={{ backgroundColor: '#F5F7FA',border:'none', boxShadow: 'none',width:{sm:'320px',xs:'100%'} }}
          size='small'
        />

        </Stack>
        <Stack direction={"row"} width={"930px"} gap={"12px"}>

             {/* <Controller
            name={``}
            control={control}
            render={({ field }) => ( */}
              <TextField

// {...field}
onChange={handelSearch}
type='date'
placeholder='Start time'
fullWidth
size='small'
sx={{width:"302px"}}
/>
{/* )} */}
{/* /> */}

{/* ******************************************* */}
              {/* <Controller
name={``}
control={control}
render={({ field }) => ( */}
<TextField
sx={{width:"302px"}}

// {...field}

type='date'
placeholder='End time'
fullWidth
size='small'
/>
{/* )}
/> */}

        </Stack>
        <Stack direction={"row"} width={"930px"} gap={"12px"} marginTop={"12px"}>


</Stack>

        <Grid marginTop={'1%'} container spacing={2} alignItems={'center'} justifyContent={'space-around'}>
          <Grid item sm={12} xs={12}>
            <CustomDataGrid columns={columns} show={show}  sx={gridStyles.root} rows={Fdata || []}/>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
    </>
  )
}

export default List
