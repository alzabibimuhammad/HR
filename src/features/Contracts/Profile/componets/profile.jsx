// ** React Imports
import { useState, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'

import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import MuiTabList from '@mui/lab/TabList'
import AboutOverivew from 'src/views/coach-profile/profile/AboutOverivew'
import ActivityTimeline from 'src/views/coach-profile/profile/ActivityTimeline'
import UserProfileHeader from 'src/views/coach-profile/UserProfileHeader'

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


  return(
  <Grid container spacing={6}>
    <Grid item xs={12}>
    <UserProfileHeader Data={data} />
    </Grid>
  <Grid item lg={4} md={5} xs={12}>

    <AboutOverivew Data={data} />
  </Grid>
  <Grid item lg={8} md={7} xs={12}>
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <ActivityTimeline />
      </Grid>
    </Grid>
  </Grid>
</Grid>
  )
}

export default Profiles
