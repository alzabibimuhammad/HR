import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, Card, CardContent, Divider, MenuItem, TextField, Typography } from '@mui/material'
import { useForm, Controller, useFieldArray } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import CloseIcon from '@mui/icons-material/Close'
import AddIcon from '@mui/icons-material/Add'
import useViewGetAbsence from '../../hooks/useGetAbsenceById'
import { useDeleteAbsence } from '../../hooks/useDeletedAbsence'
import { Stack } from '@mui/system'
import { useDispatch } from 'react-redux'
import { useAddAbsence } from '../../hooks/useAddAbsence'

const drawerWidth = 440

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

export default function DrawerForm({ open, setOpenParent, Data }) {
  const id = Data?.id
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { data, isLoading, isError } = useViewGetAbsence(id)

  const [fdata, setfdata] = useState('')

  const { mutate: deleteAbcence } = useDeleteAbsence()

  const [fndata, setfndata] = useState('')

  const [deleteDialog, setDeleteDialog] = useState(false)
  const [indexDelete, setIndexDelete] = useState()
  const [typeDelete, setTypeDelete] = useState()

  const handleDrawerClose = () => {
    setOpenParent(false)
  }

  const defaultValues = {
    absence: [{ type: '', date: '' }]
  }
  const [selectedTypes, setSelectedTypes] = useState(Array.from({ length: defaultValues.absence.length }, () => ''))
  const [selectedDates, setSelectedDates] = useState(Array.from({ length: defaultValues.absence.length }, () => ''))

  const handleTypeChange = (e, index) => {
    const newSelectedTypes = [...selectedTypes]
    newSelectedTypes[index] = e.target.value
    setSelectedTypes(newSelectedTypes)
  }

  // Handle change for date field
  const handleDateChange = (e, index) => {
    const newSelectedDates = [...selectedDates]
    newSelectedDates[index] = e.target.value
    setSelectedDates(newSelectedDates)
  }

  const handleDate = e => {
    const date = e.target.value

    let searchData
    if (!date) {
      setfdata(data?.data?.data?.unjustified)
    } else {
      searchData = data?.data?.data?.unjustified?.filter(element => {
        return element?.startDate == date
      })
      setfdata(searchData)
    }
  }
  const handleDateN = e => {
    const date = e.target.value

    let searchData
    if (!date) {
      setfndata(data?.data?.data?.unjustified)
    } else {
      searchData = data?.data?.data?.unjustified?.filter(element => {
        return element?.startDate == date
      })
      setfndata(searchData)
    }
  }
  useEffect(() => {
    setfndata(data?.data?.data?.unjustified)
    setfdata(data?.data?.data?.justified)
    reset(defaultValues)
  }, [data?.data?.data?.unjustified, data?.data?.data?.justified])

  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      absence: Array.from({ length: 1 }, () => ({ type: '', date: '' }))
    },
    mode: 'onBlur'
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'absence'
  })

  const { mutate: AddAbsence } = useAddAbsence()

  const onSubmit = formData => {
    const formDataCopy = { ...formData }

    formDataCopy.absence.forEach((element, index) => {
      element.type = selectedTypes[index]
      element.date = selectedDates[index]
      element.user_id = id
    })
    AddAbsence(formDataCopy)
  }

  const handleDelete = params => {
    deleteAbcence(params?.id)
    handleCloseDeleteDialog()
  }
  const handleDeleteAbsence = (index, type) => {
    setTypeDelete(type)
    setDeleteDialog(true)
    setIndexDelete(index)
  }
  const handleCloseDeleteDialog = _ => {
    setDeleteDialog(false)
  }

  return (
    <Drawer
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xl: drawerWidth, md: drawerWidth, sm: drawerWidth, xs: '90%' },
          overflowX: 'hidden'
        },
        overflow: 'visible',
        borderRadius: '15px'
      }}
      anchor='right'
      open={open}
      variant='temporary'
      ModalProps={{
        keepMounted: true
      }}
    >
      <Box
        sx={{
          width: '100%',
          backgroundColor: '#DCE1E6',
          fontSize: '20px',
          gap: '10px',
          padding: '15px',
          borderRadius: '10px',
          fontFamily: 'Montserrat'
        }}
      >
        {t('Edit Absence')}
      </Box>
      <Stack marginLeft={{ sm: '3%' }} marginTop={{ sm: '2%' }} direction={{ sm: 'column' }} spacing={3}>
        <Typography>{t('Unjustified')}</Typography>
        <Box width={{ sm: '94%' }}>
          <TextField onChange={handleDateN} fullWidth type='date' size='small' />
        </Box>
      </Stack>
      <Stack direction={'column'} marginTop={'2%'} style={{ overflowY: 'scroll', maxHeight: '300px', padding: '15px' }}>
        {fndata &&
          fndata?.map((date, index) => (
            <>
              <Stack direction='row' spacing={70} alignItems='center'>
                <Typography>{date?.startDate}</Typography>
                <CloseIcon
                  sx={{ color: '#df2e38', cursor: 'pointer' }}
                  onClick={() => handleDeleteAbsence(index, 'Unjustified')}
                />
              </Stack>

              {deleteDialog && indexDelete == index && typeDelete == 'Unjustified' ? (
                <Stack
                  spacing={2}
                  height={'24px'}
                  sx={{ backgroundColor: 'none', width: '100%' }}
                  key={index}
                  direction={'row'}
                  justifyContent={'end'}
                >
                  <Button
                    sx={{
                      backgroundColor: '#DF2E38',
                      color: '#fff',
                      ':hover': { backgroundColor: '#DF2E38', color: '#fff' },
                      width: '60px'
                    }}
                    onClick={() => handleDelete(date)}
                  >
                    {t('Delete')}
                  </Button>
                  <Button
                    sx={{ backgroundColor: '#DCE1E6', color: '#8090A7', width: '60px' }}
                    onClick={handleCloseDeleteDialog}
                  >
                    {t('Cancle')}
                  </Button>
                </Stack>
              ) : null}
            </>
          ))}
      </Stack>
      <Divider color={'black'} />

      <Stack marginLeft={{ sm: '3%' }} marginTop={{ sm: '2%' }} direction={{ sm: 'column' }} spacing={3}>
        <Typography>{t('Justified')}</Typography>
        <Box width={{ sm: '94%' }}>
          <TextField fullWidth onChange={handleDate} type='date' size='small' />
        </Box>
      </Stack>

      <Stack direction={'column'} marginTop={'2%'} style={{ overflowY: 'scroll', maxHeight: '300px', padding: '15px' }}>
        {fdata &&
          fdata?.map((date, index) => (
            <>
              <Stack direction='row' spacing={70} alignItems='center'>
                <Typography>{date?.startDate}</Typography>
                <CloseIcon
                  sx={{ color: '#df2e38', cursor: 'pointer' }}
                  onClick={() => handleDeleteAbsence(index, 'Justified')}
                />
              </Stack>
              {deleteDialog && indexDelete == index && typeDelete == 'Justified' ? (
                <Stack
                  spacing={2}
                  height={'24px'}
                  sx={{ backgroundColor: 'none', width: '100%' }}
                  key={index}
                  direction={'row'}
                  justifyContent={'end'}
                >
                  <Button
                    sx={{
                      backgroundColor: '#DF2E38',
                      color: '#fff',
                      ':hover': { backgroundColor: '#DF2E38', color: '#fff' },
                      width: '60px'
                    }}
                    onClick={() => handleDelete(date)}
                  >
                    {t('Delete')}
                  </Button>
                  <Button
                    sx={{ backgroundColor: '#DCE1E6', color: '#8090A7', width: '60px' }}
                    onClick={handleCloseDeleteDialog}
                  >
                    {t('Cancle')}
                  </Button>
                </Stack>
              ) : null}
            </>
          ))}
      </Stack>
      <Divider color={'black'} />
      <Typography ml={'3%'}>{t('Add absence')}</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box width={'90%'} marginLeft={'3%'}>
          {fields.map((absence, index) => (
            <div key={absence.id}>
              <Box onClick={() => remove(index)}>
                <CloseIcon sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }} onClick={() => remove(index)} />
              </Box>
              <Controller
                name={`absence[${index}].type`}
                control={control}
                render={({ field }) => (
                  <TextField
                    select
                    {...field}
                    variant='outlined'
                    fullWidth
                    size='small'
                    defaultValue=''
                    value={selectedTypes[index]}
                    onChange={e => handleTypeChange(e, index)}
                  >
                    <MenuItem value=''>{t('Type')}</MenuItem>
                    <MenuItem value='justified'>{t('Justified')}</MenuItem>
                    <MenuItem value='unjustified'>{t('Unjustified')}</MenuItem>
                  </TextField>
                )}
              />

              <Controller
                name={`absence[${index}].date`}
                control={control}
                render={({ field }) => (
                  <TextField
                    type='date'
                    {...field}
                    variant='outlined'
                    fullWidth
                    value={selectedDates[index]}
                    size='small'
                    onChange={e => handleDateChange(e, index)}
                  />
                )}
              />
            </div>
          ))}
        </Box>
        <Box sx={{ display: 'flex', width: '100%', padding: '10px' }}>
          <Stack sx={{ marginLeft: { sm: '50%' } }} direction={'row'} spacing={2}>
            <Button
              onClick={handleDrawerClose}
              sx={{ backgroundColor: '#DCE1E6', color: '#8090A7', borderRadius: '4px', padding: '8px 24px' }}
            >
              {t('Cancle')}
            </Button>

            <Button
              type='submit'
              /*onClick={handlerSendData}*/ sx={{
                backgroundColor: '#6AB2DF',
                color: '#fff',
                borderRadius: '4px',
                padding: '8px 24px',
                '&:hover': {
                  backgroundColor: '#3F4458'
                }
              }}
            >
              {t('Add')}
            </Button>
          </Stack>
        </Box>
      </form>
      <Stack marginLeft={{ sm: '3%', xl: '0px' }} sx={{ marginTop: '15px' }}>
        <Box
          onClick={() => append({ type: '', date: '' })}
          sx={{ color: '#6AB2DF', cursor: 'pointer' }}
          display={'flex'}
        >
          <AddIcon sx={{ color: '#6AB2DF' }} /> <Typography sx={{ color: '#6AB2DF' }}>{t('Add Absence')}</Typography>{' '}
        </Box>
      </Stack>
    </Drawer>
  )
}
