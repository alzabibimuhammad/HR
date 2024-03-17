import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'

import { Button, TextField, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import TeamLeaders from '../DrawerForm/teamLeaders'
import Members from '../DrawerForm/members'
import { useEditTeam } from '../../hooks/useEditTeam'
import { useTranslation } from 'react-i18next'
import ParentTeam from '../DrawerForm/parentTeam'

const drawerWidth = 440



export default function EditeForm({ open, setOpenParent, SelectedRow,data }) {
  const { mutate: EditTeam } = useEditTeam()
  const [members, SetMembers] = useState([])
  const [teamLeader, SetteamLeader] = useState()
  const [teamName, setTeamName] = useState(SelectedRow.name)
  const { t } = useTranslation()





  const handleTeamNameChange = event => {
    setTeamName(event.target.value)
  }

  const handleDrawerClose = () => {
    setOpenParent(false)
    open = false
  }

  const handlerSendData = () => {
    const formData = new FormData()
    formData.append('name', teamName)
    formData.append('team_leader', teamLeader)
    members.forEach((user, index) => {
      formData.append(`users_array[${index}]`, user)
    })

    EditTeam({ formData: formData, id: SelectedRow.id })
    handleDrawerClose()
  }


  return (
    <Drawer
      backgroundColor='#fff'
      sx={{
        width: { xl:drawerWidth,md:drawerWidth , sm:drawerWidth, xs: '90%' },
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth
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
          {t('EDIT DEPARTMENT')}
        </Box>
        <Box sx={{ padding: '24px' }}>
          <Typography sx={{ fontFamily: 'Montserrat' ,fontSize:'16px',fontWeight:600, marginBottom:'12px' }}>{t('Name')}</Typography>
          <TextField
            fullWidth
            style={{ height: '10px' }}
            placeholder='Team Name'
            size='small'
            value={teamName}
            onChange={handleTeamNameChange}
          />
        </Box>

        <Box sx={{ padding: '24px' }}>
          <Members SetMembers={SetMembers} SelectedRow={SelectedRow.user} />
        </Box>
        {/* ********************** */}

        <Box sx={{ padding: '24px' }}>
          <TeamLeaders SetteamLeader={SetteamLeader} Data={SelectedRow} />
        </Box>

        <Box sx={{ padding: '24px' }}>
          <ParentTeam data={data} />
        </Box>


        {/* ****************** */}

        <Box sx={{ display: 'flex', width: '100%', padding: '10px' }}>
          <Stack sx={{ marginLeft: '50%' }} direction={'row'} spacing={2}>
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
              {t('Cancle')}
            </Button>
            <Button
              onClick={handlerSendData}
              sx={{
                backgroundColor: '#6AB2DF',
                color: '#fff',
                borderRadius: '4px',
                padding: '8px 24px',
                '&:hover': { backgroundColor: '#6AB2DF' }
              }}
            >
              {t('Edit')}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  )
}
