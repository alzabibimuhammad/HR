import React from 'react'
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'
import { useForm, Controller } from 'react-hook-form'
import Button from '@mui/material/Button';
import { IconButton } from '@mui/material';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'


export default function Add() {
  // ** State
  const [age, setAge] = React.useState('');
 const [files, setFiles] = useState([])

 // ** Hooks
 const { getRootProps, getInputProps } = useDropzone({
   multiple: false,
   accept: {
     'image/*': ['.png', '.jpg', '.jpeg', '.gif']
   },
   onDrop: acceptedFiles => {
     setFiles(acceptedFiles.map(file => Object.assign(file)))
   }
 })

 const img = files.map(file => (
   <img key={file.name} alt={file.name} className='single-file-image' src={URL.createObjectURL(file)} />
 ))


 const handleChange = (event) => {
   setAge(event.target.value);
 };

  return <>

  <Stack sx={{backgroundColor:"#FFFFFF",p:"30px",borderRadius:"12px"}}>
      <Box sx={{width:"246px",height:"100px",}}>



      <Typography variant='h2'>
      <span style={{color: '#6AB2DF'}}>A</span><span style={{color:"#131627"}}>xis</span> <span style={{color: '#6AB2DF'}}>Code</span>
    </Typography>


      <Typography sx={{marginTop:"4px",fontWeight:"500",fontSize:"12px",color:"#8090A7"}}>Office 149, 450 South Brand Brooklyn
San Diego Country, CA 91905, USA
+1 (123) 456 7894, +44 (789) 54222</Typography>

      </Box>
    </Stack>
<Box sx={{marginTop:"20px",padding:"30px 30px",backgroundColor:"#FFFFFF",borderRadius:"12px",width:"100%  "}}>

    <FormControl sx={{ width: "100%",display:"flex",flexDirection:"row",justifyContent:"space-around",gap:"26px" }}>
          <InputLabel id="demo-simple-select-helper-label">Employee Name : </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={age}
            label="Employee Name"
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>

          <TextField
                       autoFocus
                      label={`Start Date :`}
                      variant='outlined'
                      fullWidth
                    />
          <TextField
                       autoFocus
                      label={`End Date :`}
                      variant='outlined'
                      fullWidth
                    />
        </FormControl>

        <Typography sx={{color:"#3F4458",fontSize:"16px",fontWeight:"600",marginTop:"20px"}}>Contract File :</Typography>

        <Box  sx={{display:"flex",justifyContent:"center"}} marginTop={"25px"}>
            <Box sx={{width:"754px",height:"380px",borderRadius:"26px",border:"7px dashed #8090A7"}}>
            <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {}}>
      <input {...getInputProps()} />
      {files.length ? (
        img
      ) : (
        <Box sx={{ display: 'flex', textAlign: 'center', alignItems: 'center', flexDirection: 'column',marginTop:"12%" }}>

        <CloudDoneOutlinedIcon sx={{width:"56px",height:"56px"}}/>
          <Typography variant='h4' sx={{ width:"421px",height:"77px",fontSize:"24px",fontWeight:"500",my:"10px" }}>
          Choose a file or drag & drop it here
                PDF, up to 50MB
          </Typography>
          <Box
            sx={{
              mb: 8.75,
              width: "160px",
              height: "52px",
              display: 'flex',
              borderRadius: "8px",
              padding:"16px 33px 16px 33px",
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.08)`,
              cursor:"pointer"
            }}
          >

            <Typography > Browse File</Typography>
          </Box>

        </Box>
      )}
    </Box>
            </Box>
        </Box>
</Box>








  </>

}
