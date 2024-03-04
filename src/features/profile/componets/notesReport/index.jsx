import React from 'react'

import { Button, Card, CardContent, CircularProgress, Divider, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import  { useEffect, useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import EditIcon from '@mui/icons-material/Edit'
import useGetNotes from './hooks/useGetUserNotes'
import EditNote from './componets/edit'
import AddIcon from '@mui/icons-material/Add';
import AddNote from './componets/add'
import AlertDialogDeleteNote from './componets/delete'
import { useTranslation } from 'react-i18next'

const NoteReport = (user_id) => {
  const [open, setOpen] = useState(false)
  const [editData, setEditData] = useState()

  const [openAdd, setOpenAdd] = useState(false)
  const [Delete, setDelete] = useState(false)
  const [DeleteID, setDeleteID] = useState()
  const {t} = useTranslation()

  const NoteSvg = `<svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M9.79251 0.512695H2.4317C1.09377 0.512695 0 1.60396 0 2.93839V13.0607C0 14.3952 1.09377 15.4864 2.4317 15.4864H9.79251C11.13 15.4864 12.2242 14.3946 12.2242 13.0607V2.93839C12.2242 1.60456 11.1298 0.512695 9.79251 0.512695ZM8.92937 2.75145H7.28733C6.5624 2.75145 5.96971 3.34247 5.96971 4.06581V5.7038C5.96971 6.42654 6.56299 7.01816 7.28733 7.01816H8.92937C9.6531 7.01816 10.2472 6.42575 10.2472 5.7038V4.06581C10.2472 3.34327 9.6539 2.75145 8.92937 2.75145ZM7.28733 3.25744H8.92937C9.37548 3.25744 9.73974 3.6208 9.73974 4.06581V5.7038C9.73974 6.1496 9.37628 6.51216 8.92937 6.51216H7.28733C6.84102 6.51216 6.47696 6.14881 6.47696 5.7038V4.06581C6.47696 3.6214 6.84181 3.25744 7.28733 3.25744ZM4.64253 3.12613H2.53426C1.61197 3.12613 1.61197 4.52433 2.53426 4.52433H4.64253C5.56482 4.52433 5.56482 3.12613 4.64253 3.12613ZM2.53426 3.63213H4.64253C4.89705 3.63213 4.89705 4.01833 4.64253 4.01833H2.53426C2.27954 4.01833 2.27954 3.63213 2.53426 3.63213ZM4.64253 5.30726H2.53426C1.61197 5.30726 1.61197 6.70546 2.53426 6.70546H4.64253C5.56482 6.70546 5.56482 5.30726 4.64253 5.30726ZM2.53426 5.81326H4.64253C4.89705 5.81326 4.89705 6.19947 4.64253 6.19947H2.53426C2.27954 6.19947 2.27954 5.81326 2.53426 5.81326ZM9.69015 7.48781H2.53406C1.61197 7.48781 1.61197 8.8862 2.53406 8.8862H9.69015C10.612 8.8862 10.612 7.48781 9.69015 7.48781ZM2.53406 7.994H9.69015C9.94467 7.994 9.94467 8.38021 9.69015 8.38021H2.53406C2.27954 8.38021 2.27954 7.994 2.53406 7.994ZM9.69015 9.66855H2.53406C1.61197 9.66855 1.61197 11.0669 2.53406 11.0669H9.69015C10.612 11.0669 10.612 9.66855 9.69015 9.66855ZM2.53406 10.1747H9.69015C9.94467 10.1747 9.94467 10.5609 9.69015 10.5609H2.53406C2.27954 10.5609 2.27954 10.1747 2.53406 10.1747ZM7.1981 11.8493H2.53446C1.61197 11.8493 1.61197 13.2477 2.53446 13.2477H7.1981C8.12059 13.2477 8.12059 11.8493 7.1981 11.8493ZM2.53446 12.3553H7.1981C7.45302 12.3553 7.45302 12.7417 7.1981 12.7417H2.53446C2.27934 12.7417 2.27934 12.3553 2.53446 12.3553ZM2.4317 1.01869H9.79251C10.8512 1.01869 11.717 1.88249 11.717 2.93839V13.0607C11.717 14.1166 10.8512 14.9804 9.79251 14.9804H2.4317C1.37338 14.9804 0.507251 14.1162 0.507251 13.0607V2.93839C0.507251 1.88288 1.37338 1.01869 2.4317 1.01869Z" fill="#131627"/>
  </svg>`

  const { data: DataDecision } = useGetNotes(user_id?.user_id)
  const notes = DataDecision?.data?.data


  const handleCloseDelete =_=>{
    setDelete(false)
  }


  const handleDelete = id => {
    setDeleteID(id)
    setDelete(true)
  }

  const handleEdit = note => {
    setOpen(true)
    setEditData(note)
  }

  const handleAdd =_=>{
    setOpenAdd(true)
  }

  return (
    <Box height={'100%'} overflow={{ sm: 'auto', xs: 'hidden' }}>
      <Card>
        <CardContent>
          <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} >
            <Stack direction={'row'} spacing={1} alignItems={'center'} >
            <div dangerouslySetInnerHTML={{ __html: NoteSvg }} />
            <Typography fontSize={'16px'} color={'#131627'}>
            {t('Notes')}
            </Typography>
            </Stack>
            <Button onClick={handleAdd} sx={{ backgroundColor:'none','&:hover': { backgroundColor:'inherit !important ' } }} >
              <Box display={'flex'}  >
                <AddIcon sx={{ color:'#6AB2DF' }} />
               <Typography sx={{ color:'#6AB2DF' }} > {t('Add')} </Typography>
              </Box>
            </Button>
          </Stack>

          {notes?.map((element, index) => (

            <Stack key={index}>
              <Typography color={'#3F4458'} fontSize={'14px'}>
              {t('Note')}  {index + 1}:
              </Typography>
              <Stack direction={'row'} width={'100%'}>
                <Stack
                  direction={'row'}
                  width={'100%'}
                  spacing={1}
                  justifyContent={'space-between'}
                  alignItems={'start'}
                >
                  <Typography color={'#8090A7'} fontSize={'14px'}>
                    {element?.content}
                  </Typography>
                  <Stack direction={'row'} spacing={1}>
                    <EditIcon sx={{ cursor:'pointer' }} onClick={()=>{handleEdit(element)}} fontSize='20px' />

                    <DeleteOutlineIcon sx={{ cursor:'pointer' }} onClick={()=>{handleDelete(element?.id)}} fontSize='20px' />
                  </Stack>
                </Stack>
              </Stack>

              <Divider />
            </Stack>
          ))}

        </CardContent>
      </Card>
        {editData?<EditNote oldNote={editData} open={open} setOpen={setOpen} />:null}
        {openAdd?<AddNote user_id={user_id?.user_id} open={openAdd} setOpen={setOpenAdd} />:null}
        {Delete?<AlertDialogDeleteNote id={DeleteID} open={Delete} handleClose={handleCloseDelete} />:null}

    </Box>
  )
}


export default NoteReport;
