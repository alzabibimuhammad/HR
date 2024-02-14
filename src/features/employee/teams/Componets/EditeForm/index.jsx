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
import CloseIcon from '@mui/icons-material/Close'

import Icon from 'src/@core/components/icon'
import useGetEmployeeDropDown from 'src/features/Contracts/list/Hooks/useEmployee'
import { useEditTeam } from '../../hooks/useEditTeam'

const drawerWidth = 440

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

export default function EditeForm({ open, setOpenParent, SelectedRow }) {
  const { data: UserData, isloading } = useGetEmployeeDropDown()
  const { mutate: EditTeam } = useEditTeam()
  const [members, SetMembers] = useState([])
  const [teamLeader, SetteamLeader] = useState()
  const [teamName, setTeamName] = useState(SelectedRow.name)

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

  const [selectedItems, setSelectedItems] = useState([])
  const [searchText, setSearchText] = useState('')

  const deletee = index => {
    setSelectedItems(prevItems => prevItems.filter((_, i) => i !== index))
  }

  const toggleSelect = icon => {
    const isSelected = selectedItems.includes(icon)
    if (isSelected) {
      setSelectedItems(selectedItems.filter(item => item !== icon))
      SetMembers(selectedItems.filter(item => item !== icon))
    } else {
      SetMembers([...selectedItems, icon])
      setSelectedItems([...selectedItems, icon])
    }
  }

  const filteredData = useMemo(() => {
    if (!searchText || !UserData || !UserData.data || !UserData.data.data) {
      return UserData?.data.data || []
    }

    return UserData.data.data.filter(item => item.first_name.toLowerCase().includes(searchText.toLowerCase()))
  }, [searchText, UserData])

  return (
    <Drawer
      backgroundColor='#fff'
      sx={{
        width: drawerWidth,
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
      <Box sx={{ padding: '12px' }}>
          <Typography sx={{ fontFamily: 'Montserrat' }}>Name</Typography>
          <TextField
            fullWidth
            style={{ height: '10px' }}
            placeholder="Team Name"
            size='small'
            value={teamName}
            onChange={handleTeamNameChange}
          />
        </Box>

        <Box sx={{ padding: '12px' }}>
          <Members SetMembers={SetMembers} SelectedRow={SelectedRow.user} />
        </Box>
        {/* ********************** */}

        <Box sx={{ padding: '12px' }}>
          <TeamLeaders SetteamLeader={SetteamLeader} Data={SelectedRow} />
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
              Cancle
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
              Edit
            </Button>
          </Stack>
        </Box>
      </Stack>
      </Drawer>
  )
}
