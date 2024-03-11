import React, { useMemo, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { Button, TextField, Typography, Stack, Divider } from '@mui/material'
import Members from './members'
import TeamLeaders from './teamLeaders'
import { useAddTeam } from '../../hooks/useAddTeam'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'
import { useTranslation } from 'react-i18next'

const drawerWidth = 440

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

export default function DrawerForm({ open, setOpenParent, Data }) {
  const theme = useTheme()
  const { mutate: AddTeam, isloading } = useAddTeam()
  const [members, SetMembers] = useState([])
  const [teamLeader, SetteamLeader] = useState()
  const [teamName, setTeamName] = useState('')
  const [searchText, setSearchText] = useState('')

  const { t } = useTranslation()

  const handleTeamNameChange = event => {
    setTeamName(event.target.value)
  }

  const handleDrawerClose = () => {
    setOpenParent(false)
  }

  const handlerSendData = () => {
    const formData = new FormData()
    formData.append('name', teamName)
    if(teamLeader)
      formData.append('team_leader', teamLeader)
    members.forEach((user, index) => {
      formData.append(`users_array[${index}]`, user)
    })
    AddTeam(formData)
    handleDrawerClose()
  }

  return (
    <Drawer
      onClose={handleDrawerClose}
      backgroundColor='#fff'
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xl: drawerWidth, md: drawerWidth, sm: drawerWidth, xs: '90%' },
          overflowY: 'auto',
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
      <Stack spacing={3}>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#DCE1E6',
            fontSize: '20px',
            gap: '10px',
            padding: '24px',
           color:'#8090A7',
            fontFamily: 'Montserrat',
            fontWeight:600
          }}
        >
          {t('ADD DEPARTMENT')}
        </Box>
        <Box sx={{ padding: '24px' }}>
          <Typography sx={{ fontFamily: 'Montserrat' ,fontSize:'16px',fontWeight:600, marginBottom:'12px' }}>{t('Name')}</Typography>
          <TextField
            fullWidth
            style={{ height: '10px' }}
            placeholder={t('Team Name')}
            size='small'
            value={teamName}
            onChange={handleTeamNameChange}
          />
        </Box>
        
        <Box sx={{ padding: '24px' }}>
          <Members SetMembers={SetMembers} />
        </Box>
        <Box sx={{ padding: '24px' }}>
          <TeamLeaders SetteamLeader={SetteamLeader} />
        </Box>
        <Box sx={{ display: 'flex', width: '100%', padding: '10px' }}>
          <Stack sx={{ marginLeft: { sm: '50%' } }} direction={'row'} spacing={2}>
            <Button
              onClick={handleDrawerClose}
              sx={{
                backgroundColor: '#DCE1E6',
                color: '#8090A7',
                borderRadius: '4px',
                padding: '8px 24px',
                '&:hover': { backgroundColor: '#DCE1E6' }
              }}
            >
              {t('Cancel')}
            </Button>
            <Button
              onClick={handlerSendData}
              loading={isloading}
              loadingPosition='start'
              variant='contained'
              sx={{
           
                borderRadius: '4px',
                padding: '8px 24px',
            
              }}
            >
              {t('Add')}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  )
}
