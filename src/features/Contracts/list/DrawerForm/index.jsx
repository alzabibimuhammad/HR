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
import { yupResolver } from '@hookform/resolvers/yup'
import { useTranslation } from 'react-i18next'
import { useDispatch  } from 'react-redux'
import useEditEmployee from 'src/features/employee/users/hooks/useEditEmployee'
import Typography from '@mui/material/Typography'
import { Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined'
import EditIcon from '../../../../../public/images/IconInput/edit'
import Link from 'next/link'


const drawerWidth = 440



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))


export default function DrawerForm({ open, setOpenParent,Data,pdf }) {


const [selectedFile, setSelectedFile] = useState();




const theme = useTheme()
const {t} = useTranslation()
const dispatch=useDispatch()

const {mutate:EditEmployee,isloading}=useEditEmployee()

const handleDrawerClose = () => {
  setOpenParent(false)
  open = false
  reset();
}



const handleFileChange = (event) => {
  const file = event?.target?.files?.[0];
  setSelectedFile(file);
};

useEffect(() => {
  selectedFile
}, [selectedFile]);






  const defaultValues = {
    startDate: Data?.startDate,
    endDate: Data?.endDate,
    file:pdf,

  }


  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm({
    defaultValues,
    mode: 'onBlur',
  });


  useEffect(() => {
    reset(defaultValues);
  }, [Data]);


  const onSubmit =   data => {


      // handleDrawerClose()
      // reset();

  }

  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer

        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: { xl: drawerWidth, md: drawerWidth, sm: drawerWidth, xs: '90%' },
            overflowX: 'hidden'
          },
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
          <Typography sx={{color:"#8090A7",fontSize:"20px",fontWeight:"600"}}> Edit Contract</Typography>
        </DrawerHeader>

        :
        <DrawerHeader sx={{height:"72px",backgroundColor:"#DCE1E6",padding:"24px",borderRadius:"12px 0px 0px 0px",display:"flex",justifyContent:"flex-start"}}>
        <Typography sx={{color:"#8090A7",fontSize:"20px",fontWeight:"600"}}> Edit Contract</Typography>
      </DrawerHeader>
}
        <List >

        {theme.direction === 'rtl' ?


          <Stack  sx={{ padding: '12px',marginRight:"16px" }} direction={"row"} justifyContent={"flex-end"} alignItems={"center"} spacing={2}  >
        <Box>
        <Box sx={{fontWeight:"500",fontSize:"16px",color:"#3f4458"}}>{Data?.employee} {Data?.employeeLastName}</Box>
  <Box sx={{fontWeight:"400",fontSize:"14px",color:"#8090a7"}}>{Data?.specialization} </Box>


        </Box>
        <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src={ process.env.NEXT_PUBLIC_IMAGES + '/'+Data?.user_info }
                    sx={{ width: 40, height: 40 }}

                  />
                </Box>

          </Stack>

:

<Stack  sx={{ padding: '12px',marginLeft:"16px" }} direction={"row"} justifyContent={"flex-start"} alignItems={"center"} spacing={2}  >
<Box>
          <Avatar
            alt="Remy Sharp"
            src={ process.env.NEXT_PUBLIC_IMAGES + '/'+Data?.user_info }
            sx={{ width: 40, height: 40 }}

          />
        </Box>
<Box>
  <Box sx={{fontWeight:"500",fontSize:"16px",color:"#3f4458"}}>{Data?.employee} {Data?.employeeLastName}</Box>
  <Box sx={{fontWeight:"400",fontSize:"14px",color:"#8090a7"}}>{Data?.specialization} </Box>


</Box>

  </Stack>

}
          <form   onSubmit={handleSubmit(onSubmit)}>
            <Box  marginTop={"24px"}  sx={{ padding: '0px, 24px 0px 24px',marginLeft:"24px",marginRight:"24px",display:"flex",flexDirection:"column",gap:"12px" }} >

          <Controller
            name={`startDate`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type='date'
                placeholder='Start time'
                fullWidth
                size='small'

              />
            )}
          />

                              <Controller
            name={`endDate`}
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                type='date'
                placeholder='End time'
                fullWidth
                size='small'
              />
            )}
          />

{theme.direction === 'rtl' ?

//           <Stack    height={"64px"} padding={"16px"} justifyContent={"space-between"} flexDirection={"row"} alignItems={"center"}>
//             <Box>
// <EditIcon/>


//             </Box>
//             <Box display={"flex"} alignItems={"center"} gap={"12px"}>

//             <Typography sx={{fontWeight:"500",fontSize:"14px",color:"#3f4458"}}>contract</Typography>

//             <img src='/images/pdf-icon.svg'/>



//             </Box>
//           </Stack>

<Stack height={"64px"} padding={"16px"} justifyContent={"space-between"} flexDirection={"row"} alignItems={"center"}>
<Box>
    <label htmlFor="fileInput">
      <Button component="span">
        <EditIcon />
      </Button>
    </label>
    <Controller
      name={`file`}
      control={control}
      render={({ field }) => (
        <input
          id="fileInput"
          type="file"
          accept=".pdf"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
      )}
    />
  </Box>
      <Box display={"flex"} alignItems={"center"} gap={"12px"} >
      <Typography sx={{fontWeight:"500",fontSize:"14px",color:"#3f4458"}}>contract : {pdf || selectedFile?.name}</Typography>
        <img   src='/images/pdf-icon.svg' alt="PDF Icon" />

    </Box>
    </Stack>


          :
          <Stack    height={"64px"} padding={"16px"} justifyContent={"space-between"} flexDirection={"row"} alignItems={"center"}>
 <Box display={"flex"} alignItems={"center"} gap={"12px"}>

<img src='/images/pdf-icon.svg'/>
<Typography sx={{fontWeight:"500",fontSize:"14px",color:"#3f4458"}}>contract</Typography>



</Box>
          <Box>
<EditIcon/>


          </Box>

        </Stack>

}


            </Box>
            <Stack   flexDirection={"row"} alignItems={"end"} gap={"16px"}  sx={{height:"54vh",padding:"24px",width:"258px"}}   >
            <Box>
            <Button variant='contained' type='submit' sx={{width:"97px",height:"39px",borderRadius:"4px",padding:"8px 24px 8px 24px",backgroundColor:"#6ab2df",fontWeight:"500",fontSize:"14px",color:"#fff"}}>Submit</Button>
            </Box>
            <Box >
            <Button onClick={handleDrawerClose} sx={{width:"97px",height:"39px",borderRadius:"4px",padding:"8px 24px 8px 24px",backgroundColor:"#DCE1E6",fontWeight:"500",fontSize:"14px",color:"#8090A7"}}>Cancel</Button>


            </Box>
          </Stack>
          </form>

        </List>
      </Drawer>
    </Box>
  )
}
