// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList from '@mui/lab/TabList'

import AboutOverivew from './overView'
import ActivityTimeline from './timeLine'
import UserProfileHeader from './header'
import { Box, Stack } from '@mui/system'
import TeamLeader from './teamLeader'

const TabList = styled(MuiTabList)(({ theme }) => ({
  borderBottom: '0 !important',
  '&, & .MuiTabs-scroller': {
    boxSizing: 'content-box',
    padding: theme.spacing(1.25, 1.25, 2),
    margin: `${theme.spacing(-1.25, -1.25, -2)} !important`
  },
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    boxShadow: theme.shadows[2],
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 38,
    lineHeight: 1,
    borderRadius: theme.shape.borderRadius,
    '&:hover': {
      color: theme.palette.primary.main
    },
    [theme.breakpoints.up('sm')]: {
      minWidth: 130
    }
  }
}))

const Profiles = ({ tab, data }) => {
  // ** State
  const [activeTab, setActiveTab] = useState(tab)
  const [isLoading, setIsLoading] = useState(true)

  // ** Hooks
  const router = useRouter()
  const hideText = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const handleChange = (event, value) => {
    setIsLoading(true)
    setActiveTab(value)
    router
      .push({
        pathname: `/pages/user-profile/${value.toLowerCase()}`
      })
      .then(() => setIsLoading(false))
  }
  useEffect(() => {
    if (data) {
      setIsLoading(false)
    }
  }, [data])
  useEffect(() => {
    if (tab && tab !== activeTab) {
      setActiveTab(tab)
    }
  }, [tab])


  const  Data = {

    "success": true,
    "message": "success",
    "teamLeader": [
        {
          'total_employees':7,
          'present_employees':6
        },

      ],

    }
    const  Data2 = {

      "success": true,
      "message": "success",

        "projectManeger": [
          {
            'total_employees':20,
            'present_employees':19
          },

        ]

      }

  return(

  <Stack direction={'column'} container spacing={15}>


    <Box item xs={12} sx={{ height:'120px',zIndex:999 }} marginTop={{sm:'0' ,xs:'25px' }}>
     <UserProfileHeader Data={data} />
    </Box>

    <Stack direction={{sm:'row',xs:'column'}} spacing={5} >
    <Box sx={{ flex:1 }}>
      <AboutOverivew Data={data} />
    </Box>
      <Box sx={{ flex:1 }}>
        <ActivityTimeline />
      </Box>

    </Stack>

    <Stack direction={'row'} >
      <Box>
          <TeamLeader Data={Data} />
      </Box>
    </Stack>

</Stack>
  )
}

export default Profiles
