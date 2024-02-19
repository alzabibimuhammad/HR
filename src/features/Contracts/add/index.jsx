import React from 'react'
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import { useForm, Controller } from 'react-hook-form'
import Button from '@mui/material/Button'
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined'
import { useDropzone } from 'react-dropzone'
import CustomTextField from 'src/@core/components/mui/text-field'
import useGetEmployeeDropDown from '../list/Hooks/useEmployee'
import { useAddContract } from '../list/Hooks/useAddContract'
import PDFViewer from '../list/Profile/PdfViwer'
import { useTranslation } from 'react-i18next'
import Logo from '../view/logo'

export default function Add() {
  const [age, setAge] = React.useState('')
  const [files, setFiles] = useState([])
  const { mutate: addContract, isLoading } = useAddContract()
  const { data, isloading } = useGetEmployeeDropDown()
  const { t } = useTranslation()

  // ** Hooks
  const onDrop = acceptedFiles => {
    // Store the selected file
    setFiles(acceptedFiles)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'application/pdf', // Specify accepted file types
    maxSize: 50000000, // 50MB limit
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif', '.pdf']
    }
  })

  const img = files.map(file => (
    <img
      key={file.name}
      alt={file.name}
      className='single-file-image'
      src={URL.createObjectURL(file)}
      style={{ width: '743px', height: '365px', borderRadius: '25px' }}
    />
  ))

  const defaultValues = {
    startTime: '',
    endTime: '',
    user_id: ''
  }

  const onSubmit = async data => {
    try {
      const formData = new FormData()
      formData.append('path', files[0])
      formData.append('startTime', data.startTime)
      formData.append('endTime', data.endTime)
      formData.append('user_id', data.user_id)
      addContract(formData)
    } catch (error) {}
  }

  const {
    control,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur'
  })

  return (
    <>
      <Logo/>
      <Box
        sx={{
          marginTop: '20px',
          padding: '30px 30px',
          backgroundColor: '#FFFFFF',
          borderRadius: '12px',
          width: '100%  '
        }}
      >
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
          <FormControl
            sx={{ width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', gap: '26px' }}
          >
            <Controller
              name='user_id'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <CustomTextField
                  select
                  fullWidth
                  label='User Name :'
                  sx={{ mb: 5 }}
                  id='invoice-country'

                  SelectProps={{
                    value: value,
                    onChange: e => onChange(e)
                  }}
                >
                  {data?.data?.data.map(employee => (
                    <MenuItem key={employee.id} value={employee.id}>
                      {employee.first_name + ' ' + employee.last_name}
                    </MenuItem>
                  ))}
                </CustomTextField>
              )}
            />

            <Controller
              name='startTime'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <CustomTextField
                  fullWidth
                  label='Start Date :'

                  autoFocus
                  variant='outlined'
                  InputLabelProps={{ shrink: true }}
                  type='date'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.email)}
                  {...(errors.email && { helperText: errors.email.message })}
                />
              )}
            />
            <Controller
              name='endTime'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange, onBlur } }) => (
                <CustomTextField
                  fullWidth
                  autoFocus
                  label='End Date :'
                  variant='outlined'
                  InputLabelProps={{ shrink: true }}
                  type='date'
                  value={value}
                  onBlur={onBlur}
                  onChange={onChange}
                  error={Boolean(errors.email)}
                  {...(errors.email && { helperText: errors.email.message })}
                />
              )}
            />
          </FormControl>

          <Typography sx={{ color: '#3F4458', fontSize: '16px', fontWeight: '600', marginTop: '20px' }}>
            {t('Contract File')} :
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:"center" }}  marginTop={'25px'}>
            <Box sx={{ width: {sm:'754px'}, height: '380px', borderRadius: '26px', border: {sm:'7px dashed #8090A7'} }} >
              <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>
                <input {...getInputProps()} />
                {files.length ? (
                  <PDFViewer pdfUrl={URL.createObjectURL(files[0])} />
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      textAlign: 'center',
                      alignItems: 'center',
                      flexDirection: 'column',
                      marginTop: '12%'
                    }}
                  >
                    <CloudDoneOutlinedIcon sx={{ width: '56px', height: '56px' }} />
                    <Typography
                      variant='h4'
                      sx={{ width: {sm:'421px'}, height: {sm:'77px'}, fontSize: {sm:'24px'}, fontWeight: '500', my: '10px' }}
                    >
                      {t('Choose a file or drag & drop it here PDF, up to 50MB')}
                    </Typography>
                    <Box
                      sx={{
                        mb: 8.75,
                        width: '160px',
                        height: '52px',
                        display: 'flex',
                        borderRadius: '8px',
                        padding: '16px 33px 16px 33px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`,
                        cursor: 'pointer',

                      }}
                    >
                      <Typography >{t('Browse File')}</Typography>
                    </Box>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>

          <Box sx={{ width: '100%', marginTop: {sm:'24px'} }} textAlign={'end'}>
            <Button sx={{ padding: '16px 33px 16px 33px' }} type='submit' variant='contained'>
              {t('Add Contract')}
            </Button>
          </Box>
        </form>
      </Box>
    </>
  )
}
