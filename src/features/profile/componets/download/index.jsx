import { Button, Card, CardContent, CircularProgress } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { useReactToPrint } from 'react-to-print'
import useViewContract from 'src/features/Contracts/list/Hooks/useViewContracts'

export default function Download(userData) {
  const userId = userData?.user?.data?.data?.[0]?.id
  const componentRef = useRef()
  const {t} = useTranslation()
  const { data } = useViewContract(userId)


  const handleDownloadClick = () => {
    const downloadLink = document.createElement('a')

    downloadLink.href = `${process.env.NEXT_PUBLIC_BASE_URL}/${data?.data?.data?.[0].path}`
    downloadLink.download = 'your_pdf_filename.pdf'

    downloadLink.style.display = 'none'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <Card>
      <CardContent>
      {data?.data?.data.length ?

        <Stack spacing={2} >

          <Button  onClick={handleDownloadClick} sx={{ height:'56px',width:'100%',color:'#8090A7',backgroundColor:'#DCE1E6','&:hover': {backgroundColor: '#DCE1E6' }}} ><a target='_blank' >{t('Print')} </a></Button>
          <Button onClick={handleDownloadClick} sx={{ height:'56px',width:'100%',color:'#8090A7',backgroundColor:'#DCE1E6','&:hover': {backgroundColor: '#DCE1E6' }}} >{t('Download')} </Button>

        </Stack>

        :
          <Box display={'flex'} justifyContent={'center'} >
            <CircularProgress/>
          </Box>
         }

        </CardContent></Card>
    )
}
