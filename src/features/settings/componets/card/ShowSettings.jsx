import { Button, Card, CardContent, Grid, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import useShowAllBranches from '../../hooks/useShowAllBranches'
import EditIcon from '@mui/icons-material/Edit'
import { useState } from 'react'
import AlertDialog from '../deleteDialog'
import AlertDialogEdit from '../editDialog'
import AddIcon from '@mui/icons-material/Add'
import AlertDialogAdd from '../addDialog'
import { useTranslation } from 'react-i18next'
import { useAuth } from 'src/hooks/useAuth'

export default function ShowSetting() {

  const { data, isloading } = useShowAllBranches()
  const {t} = useTranslation()
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [isEditPopupOpen, setisEditPopupOpen] = useState(false)
  const [isAdd, setisAdd] = useState(false)
  const { logout } = useAuth()

  const [branchRow, setBranch] = useState()

  const handleDelete = branch => {
    setBranch(branch)
    setIsDeletePopupOpen(true)
  }

  const handleClose = () => {
    setIsDeletePopupOpen(false)
  }

  const handleEdit = branch => {
    setisEditPopupOpen(true)
    setBranch(branch)
  }

  const handleCloseEdit = () => {
    setisEditPopupOpen(false)
  }

  const handleAdd=_=>{
    setisAdd(true)
  }

  const handleCloseAdd = _=>{
    setisAdd(false)
  }
  const handleLogout=_=>{
    logout()
  }

  return (
    <>
    <Stack direction={'row'}  width={'100%'}  justifyContent={'space-between'} >

    <Typography variant='h4' paddingBottom={'10px'}>
        {t("Settings")}
        </Typography>
      <Stack direction={'row'} spacing={2}>
      <Button
        onClick={handleAdd}
        sx={{
          color: '#8090A7',
          backgroundColor: '#DCE1E6',
          '&:hover': { color: '#8090A7', background: '#DCE1E6' }
        }}
      >
        <Stack direction={'row'}>
          <AddIcon />
          <Typography>{t("Add new branch")}</Typography>
        </Stack>
      </Button>
      <Button
        onClick={handleLogout}
        sx={{
          color: '#fff',
          backgroundColor: '#DF2E38',
          '&:hover': { color: '#fff', background: '#DF2E38' }
        }}
      >
        <Typography color={'#fff'} >{t("Logout")}</Typography>
    </Button>
    </Stack>
      </Stack>

      {isDeletePopupOpen && (
                  <AlertDialog Branch={branchRow} open={isDeletePopupOpen} handleClose={handleClose} />
                )}

                {isEditPopupOpen && (
                  <AlertDialogEdit Branch={branchRow} open={isEditPopupOpen} handleClose={handleCloseEdit} />
                )}
                {isAdd ?
                  <AlertDialogAdd open={isAdd} handleClose={handleCloseAdd} />:null
                }
      <Grid marginTop={'0%'} container spacing={2}>
        {data?.data?.data?.map((branch, index) => (
          <Grid item sm={6} xs={12} key={index}>
            <Card>
              <CardContent>
                <Stack direction='row' justifyContent='space-between'>
                  <Box sx={{ marginBottom: 20 }}>
                    <Typography>{branch.name}</Typography>
                    <Typography>{branch.users_count} {t("Employees")}</Typography>
                  </Box>
                </Stack>
                <Stack direction='row' spacing={2} justifyContent='flex-end'>
                  <Button
                    onClick={() => {
                      handleEdit(branch)
                    }}
                    sx={{
                      backgroundColor: 'rgba(128, 144, 167,0.2)',
                      '&:hover': { color: '#8090A7', background: 'rgba(128, 144, 167,0.2)' }
                    }}
                  >
                    <Stack direction={'row'} spacing={2}>
                      <EditIcon sx={{ color: '#8090A7', fontSize: '20px' }} />
                      <Typography sx={{ color: '#8090A7' }}>{t("Edit")}</Typography>
                    </Stack>
                  </Button>
                  <Button
                    sx={{
                      color: '#DF2E38',
                      border: '1px solid #DF2E38',
                      '&:hover': { color: '#DF2E38', background: 'none' }
                    }}
                    onClick={() => {
                      handleDelete(branch)
                    }}
                  >
                    {t("Delete")}
                  </Button>
                </Stack>


              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  )
}
