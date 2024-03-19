import React, { useEffect, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import { useForm, Controller } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import useUpdateSecretariats from '../../hooks/useUpdateSecretariats'
import { Schema } from '../../validation'
import { yupResolver } from '@hookform/resolvers/yup'
import { Avatar,  FormControlLabel, Radio, RadioGroup,Typography } from '@mui/material'
import { Stack } from '@mui/system'
import EditIcon from '../../../../../../public/images/IconInput/edit'
import useGetSecretariats from '../../hooks/useGetAllSecretariats'
import useGetAllUsers from 'src/features/employee/users/hooks/useGetAllUsers'

const drawerWidth = 440

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

export default function DrawerForm({ open, setOpenParent, Data, }) {
console.log("🚀 ~ DrawerForm ~ Data:", Data)




  const { mutate: UpdateSecretariats, isLoading } = useUpdateSecretariats();

  const { data } = useGetAllUsers()
  const [ users , setUsers] = useState(data?.data?.data)

  useEffect(()=>{
    setUsers(data?.data?.data)
  },[data])



  const theme = useTheme()
  const { t } = useTranslation()

  const handleDrawerClose = () => {
    setOpenParent(false)
    open = false
    reset()
  }
  const [selectedUser, setSelectedUser] = useState()
  const [showFileInput, setShowFileInput] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState('');
  const toggleFileInput = () => {
    setShowFileInput(!showFileInput);
};

  const defaultValues = {
    Secretariat_name:Data?.title,
    description: Data?.description,
    received_date: Data?.date
  }

  useEffect(() => {
    reset(defaultValues);

  }, [Data]);

  const handleFileChange = (event) => {

    const file = event.target.files[0]; 
 
   
  
    setSelectedFileName(file);
  };


  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset
  } = useForm({
    defaultValues,
    resolver: yupResolver(Schema),
    mode: 'onBlur'
  })


  const onSubmit = data => {

    const formData = new FormData()
    formData.append('path',selectedFileName)
    formData.append('title',data.Secretariat_name)
    formData.append('description',data.description)
    formData.append('received_date',data.received_date)
    formData.append('user_id',selectedUser)

    UpdateSecretariats({id:Data?.id,data:formData})

    handleDrawerClose()
  }

  const handelSearch = e => {
    const searchText = e.target.value

    let searchData;

    if(searchText){

      searchData = users?.filter((user)=>{return user?.first_name?.toLowerCase()?.includes(searchText.toLowerCase())})
      setUsers(searchData)
    }
    else{
      setUsers(data?.data?.data)

    }

  }

  const handleUserSelection = userId => {
  console.log("🚀 ~ handleUserSelection ~ userId:", userId)

    setSelectedUser(userId)


  }

  return (
    <Box sx={{ display: 'flex' }}>
    <Drawer
      sx={{
        width: drawerWidth,

        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: {sm:drawerWidth}
        }
      }}
      anchor='right'
      open={open}
      variant='temporary'
      ModalProps={{
        keepMounted: true
      }}
    >
    {theme.direction === 'rtl' ?

<DrawerHeader sx={{height:"72px",backgroundColor:"#DCE1E6",padding:"24px",borderRadius:"12px 0px 0px 0px",display:"flex",justifyContent:"flex-end"}}>
  <Typography sx={{color:"#8090A7",fontSize:"20px",fontWeight:"600"}}> Edit Secretariats</Typography>
</DrawerHeader>

:
<DrawerHeader sx={{height:"72px",backgroundColor:"#DCE1E6",padding:"24px",borderRadius:"12px 0px 0px 0px",display:"flex",justifyContent:"flex-start"}}>
<Typography sx={{color:"#8090A7",fontSize:"20px",fontWeight:"600"}}> Edit Secretariats</Typography>
</DrawerHeader>
}
      <Box sx={{marginTop:"16px"}} ml={2} pl={2} pr={2}>
        <Stack width={'100%'} direction={'column'}>
          <Typography ml={2}>{t('Employee')}</Typography>

              <Stack  direction={'row'} sx={{marginTop:"12px",marginBottom:"12px"}} justifyContent={'space-between'} alignItems={'center'}>
    <Stack direction={'row'} alignItems={'center'} spacing={3}>
      <Box>
      <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + Data?.user_info} />
      </Box>
      <Box>
      <Typography sx={{color:"#131627",fontWeight:"500",fontSize:"14px"}}>{Data?.first_name} {Data?.last_name}</Typography>
      <Typography sx={{color:"#7b8794",fontWeight:"400",fontSize:"12px"}}>{Data?.specialization} </Typography>

      </Box>



    </Stack>
  </Stack>

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
            sx={{
              paddingLeft: '8px',
              paddingRight: '8px',
              backgroundColor: '#F5F7FA',
              border: 'none',
              boxShadow: 'none'
            }}
            size='small'
          />
        </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
        <Stack direction={'column'} mt={5} spacing={5}>
        <RadioGroup value={selectedUser} onChange={event => handleUserSelection(event.target.value)}>
              {users?.map((user,index) => (

                <Stack key={index} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>

                  <Stack sx={{marginTop:"8px",marginBottom:"8px"}} direction={'row'}  alignItems={'center'} spacing={1}>
                  <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + user?.user_info?.image}  />
                <Typography>{user.first_name} {user.last_name}</Typography>
                </Stack>
                  <FormControlLabel
                    key={user.id}
                    value={user.id}
                    control={<Radio />}

                  />
              </Stack>
              ))}

            </RadioGroup>


        </Stack>



              <Controller
                name='Secretariat_name'
                control={control}

                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{ marginTop:5 }}
                    placeholder='2000-01-01'
                    fullWidth
                    label={t('Secretariat name')}
                    variant='outlined'

                  />
                )}
              />
               <Controller
                  name='description'
                  defaultValue=''
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      sx={{ marginTop:5 }}
                      autoFocus
                      multiline
                      rows={1}
                      maxRows={4}
                      label={`${t('Description')}`}
                      variant='outlined'
                      error={!!errors.description}
                      helperText={t(errors.description) ? t(errors.description.message) : ''}
                    />
                  )}
                />
              <Controller
                name='received_date'
                control={control}

                defaultValue=''
                render={({ field }) => (
                  <TextField
                    {...field}
                    sx={{ marginTop:5 }}
                    placeholder='2000-01-01'
                    fullWidth
                    label={t('Received Date')}
                    variant='outlined'
                    error={!!errors.received_date}
                    helperText={t(errors.received_date) ? t(errors.received_date.message) : ''}
                  />
                )}
              />

{/* ************************* */}

              <Box sx={{ my: '10px' }}>

            {showFileInput && (
            <Stack height={"64px"} padding={"16px"} justifyContent={"space-between"} flexDirection={"row"} alignItems={"center"}>
              <Box>
              <Button component="span" onClick={() => document.getElementById('fileInput').click()}>
                      <EditIcon />
                    </Button>
               
                  <Controller
                    name={`file`}
                    control={control}
                    render={({ field }) => (
                      <input
                      {...field}
                      id="fileInput"
                        type="file"
                        accept=".pdf"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                      />
                    )}
                  />
              </Box>
              <Box display={"flex"} alignItems={"center"} gap={"12px"}>
                <Typography sx={{ fontWeight: "500", fontSize: "14px", color: "#3f4458" }}>{selectedFileName ? selectedFileName.name :"contract"}   </Typography>
                <img src='/images/pdf-icon.svg' alt="PDF Icon" />
              </Box>
            </Stack>
          )}
                {!showFileInput ?
                  <Button
                  type='button'
                  onClick={toggleFileInput}
                  sx={{ fontSize: '12px', fontWeight: '400', color: '#6ab2df', padding: '0' }}
                >
                  {t('Upload File')}
                </Button>
                :""}

              </Box>

              <Stack direction={'row'} sx={{gap:"12px"}}>
                  <Button type='submit' sx={{marginTop:"12px"}} variant='contained' color='primary'>
                    {`${t('Submit')}`}
                  </Button>
                  <Button  onClick={handleDrawerClose} sx={{marginTop:"12px",padding:"8px 24px 8px 24px",backgroundColor:"#dce1e6",color:"#8090a7",fontWeight:"500",fontSize:"14px"}} variant='contained' >
                  {`${t('Cancle')}`}
                </Button>

                </Stack>
          </form>
      </Box>
    </Drawer>
  </Box>
  )
}
