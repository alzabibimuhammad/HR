import React, { useRef } from 'react'
import { Box, Stack } from '@mui/system'
import Typography from '@mui/material/Typography'

import Image from 'next/image'
import Button from '@mui/material/Button'
import PDFViewer from '../list/Profile/PdfViwer'
import useViewContract from '../list/Hooks/useViewContracts'
import { useRouter } from 'next/router'
import { useDeleteContract } from '../list/Hooks/useDeleteContract'
import { useReactToPrint } from 'react-to-print'
import Logo from './logo'
import Profile from 'src/pages/profile/[id]'
import { useTranslation } from 'react-i18next'
import { CircularProgress } from '@mui/material'

export default function View({ id }) {
  const componentRef = useRef()

  const {t} = useTranslation()

  const router = useRouter()

  const { data, isLoading, isError } = useViewContract(id)

  const { mutate: deleteContract } = useDeleteContract()

  const deleteContractt = async id => {
    try {
      await deleteContract(id)
      // router.push('/contracts/list')
    } catch (error) {}
  }

  const handlePrint = (path) => {
    const downloadLink = document.createElement('a')

    downloadLink.href = `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`
    downloadLink.download = 'your_pdf_filename.pdf'

    downloadLink.style.display = 'none'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  const handleDownloadClick = (path) => {
    const downloadLink = document.createElement('a')

    downloadLink.href = `${process.env.NEXT_PUBLIC_BASE_URL}/${path}`
    downloadLink.download = 'your_pdf_filename.pdf'

    downloadLink.style.display = 'none'
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
  }

  return (
    <>
      <Logo />

      <Stack marginTop={'20px'} direction={'column'} justifyContent={'space-between'} spacing={12}>
        {data?.data?.data?.length?
        <>
        {data?.data?.data.map(ele => (
          <Stack direction={'row'} spacing={12}>
            <Box
              ref={componentRef}
              sx={{ width: '100%', borderRadius: '12px', backgroundColor: '#FFFFFF', textAlign: 'center' }}
            >
              <iframe
                style={{
                  width: '100%',
                  height: '100vh',
                  border: 'none',
                  borderRadius: 'inherit'
                }}
                src={`${process.env.NEXT_PUBLIC_BASE_URL}/${ele.path}`}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <Box
                sx={{
                  width: '380px',
                  height: '131px',
                  backgroundColor: '#FFFFFF',
                  borderRadius: '12PX',
                  padding: '12px 19px'
                }}
              >
                <Typography sx={{ marginTop: '4px', fontWeight: '600', fontSize: '16px', color: '#3F4458' }}>
                {t('Contract')} #{ele.id}
                </Typography>

                <Typography sx={{ marginTop: '4px', fontWeight: '600', fontSize: '14px', color: '#8090A7' }}>
                {t('Name')} : {ele.user.first_name} {ele.user.last_name}
                </Typography>
                <Typography sx={{ marginTop: '4px', fontWeight: '600', fontSize: '14px', color: '#8090A7' }}>
                {t('Start Date')} : {ele.startTime}
                </Typography>

                <Typography sx={{ marginTop: '4px', fontWeight: '600', fontSize: '14px', color: '#8090A7' }}>
                {t('End Date')} : {ele.endTime}
                </Typography>
              </Box>

              <Box
                sx={{
                  backgroundColor: '#FFFFFF',
                  width: '380px',
                  height: '240px',
                  borderRadius: '12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                  padding: '0 15px'
                }}
              >
                <Button sx={{ width: '100%' }} size='large' variant='contained' onClick={()=>handlePrint(ele?.path)}>
                  {t('Print')}
                </Button>
                <Button sx={{ width: '100%' }} size='large' variant='contained' onClick={()=>handleDownloadClick(ele?.path)}>
                {t('Download')}
                </Button>
                <Button
                  sx={{ width: '100%', backgroundColor: '#DF2E38' }}
                  size='large'
                  variant='contained'
                  onClick={() => deleteContractt(ele?.id)}
                >
                  {t('Delete')}
                </Button>
              </Box>
            </Box>
          </Stack>
        ))}
        </>
              :<Box height={'50vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} ><CircularProgress/></Box>}

      </Stack>
    </>
  )
}
