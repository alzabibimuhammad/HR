import React, { useEffect, useMemo, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Button, CardHeader, Input, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import TeamLeaders from '../DrawerForm/teamLeaders'
import Members from '../DrawerForm/members'
import { useAddTeam } from '../../hooks/useAddTeam'
import { Checkbox } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import CloseIcon from '@mui/icons-material/Close';

import Icon from 'src/@core/components/icon'
import useGetEmployeeDropDown from 'src/features/Contracts/list/Hooks/useEmployee'


const drawerWidth = 440



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))


export default function EditeForm({ open, setOpenParent,Data }) {
  const {data:UserData,isloading}=useGetEmployeeDropDown()
  const theme = useTheme()
  const{mutate:AddTeam}=useAddTeam()
const[members,SetMembers]=useState([])
const[teamLeader,SetteamLeader]=useState()
const [teamName, setTeamName] = useState('');


const handleTeamNameChange = (event) => {
  setTeamName(event.target.value);
};


console.log("data",Data);

  const handleDrawerClose = () => {

    setOpenParent(false)
    open = false
  }

const  handlerSendData =()=>{
const formData = new FormData()
formData.append('name',teamName)
formData.append('team_leader',teamLeader)
members.forEach((user, index) => {
  formData.append(`users_array[${index}]`, user);
});
AddTeam(formData)
handleDrawerClose()
}

const [selectedItems, setSelectedItems] = useState([]);
const [searchText, setSearchText] = useState('');

const deletee = (index) => {
  setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
};

const toggleSelect = (icon) => {
  const isSelected = selectedItems.includes(icon);
  if (isSelected) {
    setSelectedItems(selectedItems.filter((item) => item !== icon));
    SetMembers(selectedItems.filter((item) => item !== icon))
  } else {
    SetMembers([...selectedItems, icon])
    setSelectedItems([...selectedItems, icon]);
  }
};

const filteredData = useMemo(() => {
if (!searchText || !UserData || !UserData.data || !UserData.data.data) {
  return UserData?.data.data||[];
}

return UserData.data.data.filter((item) =>
  item.first_name.toLowerCase().includes(searchText.toLowerCase())
);
}, [searchText, UserData]);

  return (

      <Drawer
        backgroundColor='#fff'
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth
          },
          overflow:'visible',
          borderRadius:'15px',
        }}
        anchor='right'
        open={open}
        variant='temporary'
        ModalProps={{
          keepMounted: true
        }}

      >

        <Stack spacing={3} >

          <Box  sx={{width:'100%',backgroundColor:'#DCE1E6' , fontSize:'20px' ,gap: '10px',padding:'15px',borderRadius:'10px',fontFamily:'Montserrat'  }}>Add team</Box>
          <Box sx={{ padding:'12px' }} >
              <Typography sx={{ fontFamily:'Montserrat' }}>
                Name
              </Typography>

              <TextField
                fullWidth
                style={{ height: '10px' }}
                placeholder="Team Name"
                size='small'
                value={teamName}
                onChange={handleTeamNameChange}
              />


          </Box>
{/* ********************** */}
<Box>
      <Typography sx={{ fontFamily:'Montserrat' }}>
        Members
      </Typography>

      <Stack direction="row" spacing={2} padding={"10px"} position={"relative"} >
    <Avatar  variant='circular' sx={{  width: 34, height: 34 ,overflow:"visible"}}>
      <Icon icon={Data?.icon} />
      <Box onClick={()=>{deletee(index)}}>

      <CloseIcon  sx={{position:"absolute",backgroundColor:"red",width:"10px",height:"10px",borderRadius:"50%",left:"0px",bottom:"23px",color:"#fff",cursor:"pointer"}} />
      </Box>
    </Avatar>

</Stack>


      <TextField
        placeholder='Search'
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <Box paddingRight={1} >
            <svg width="14"  height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="zoom-split">
                <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z" fill="#8090A7"/>
              </g>
            </svg>
            </Box>
          ),
        }}
        sx={{ paddingLeft: '8px',backgroundColor:'#F5F7FA',marginBottom:'2%' }}
        size='small'
        fullWidth
      />

    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Avatar variant="rounded" sx={{ mr: 4, width: 34, height: 34 }}>
        <Icon icon={Data.first_name} />
      </Avatar>
      <Box
        sx={{
          rowGap: 1,
          columnGap: 4,
          width: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography variant="h6">{Data.first_name + '\u00A0\u00A0' + Data.last_name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            {Data.role}
          </Typography>
        </Box>
        <Box>
          <Checkbox

checked={Array.isArray(Data) && Data.includes(Data.id)}
            onChange={() => toggleSelect(Data.id)}
          />
        </Box>
      </Box>
    </Box>


    </Box>
{/* ****************** */}
          <Box sx={{ padding:'12px' }} >
            <TeamLeaders SetteamLeader={SetteamLeader}/>
          </Box>

          <Box sx={{ display:'flex', width:'100%',padding:'10px'}} >
            <Stack sx={{ marginLeft:'50%' }} direction={'row'} spacing={2} >
              <Button onClick={handleDrawerClose} sx={{ backgroundColor:'#DCE1E6',color:'#8090A7',borderRadius:'4px', padding: '8px 24px','&:hover': {backgroundColor: '#DCE1E6'} }}>Cancle</Button>
              <Button onClick={handlerSendData} sx={{ backgroundColor:'#6AB2DF',color:'#fff' ,borderRadius:'4px', padding: '8px 24px', '&:hover': {backgroundColor: '#6AB2DF'}}} >Add</Button>
              </Stack>
          </Box>

        </Stack>

      </Drawer>
  )
}
