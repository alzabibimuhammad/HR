import { Button, Card, CardContent, CircularProgress, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React, { useEffect, useRef } from 'react'
import PDFGenerator from '../pdf'
import { t } from 'i18next'

const Download = ({user,ProfileData}) => {



  const  data = user?.data?.data?.[0]


  const contentRef = useRef(null);

  useEffect(() => {

    if (typeof window !== 'undefined') {
      import('html2pdf.js').then(html2pdfModule => {
        window.html2pdf = html2pdfModule.default || html2pdfModule;
      });
    }
  }, []);

  const generatePDF = async () => {
    const content = contentRef.current;

    if (typeof window !== 'undefined' && window.html2pdf) {
      const html2pdf = window.html2pdf;

      html2pdf(content).outputPdf().then(pdf => {
        const blob = new Blob([pdf], { type: 'application/pdf' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = 'generated.pdf';
        link.click();



      });
    } else {
    }
  };

  return (
    <>
    <div style={{display:"none"}}>

<PDFGenerator contentRef={contentRef} ProfileData={ProfileData} user={user}/>
    </div>


      <Card>
      <CardContent>
      {user?.data?.data?.length && ProfileData ?

        <Stack spacing={2} >

          {/* <Button  onClick={handleDownloadClick} sx={{ height:'56px',width:'100%',color:'#8090A7',backgroundColor:'#DCE1E6','&:hover': {backgroundColor: '#DCE1E6' }}} ><a target='_blank' >{t('Print')} </a></Button> */}
          <Button onClick={generatePDF} sx={{ height:'56px',width:'100%',color:'#8090A7',backgroundColor:'#DCE1E6','&:hover': {backgroundColor: '#DCE1E6' }}} >{t('Download')} </Button>

        </Stack>

        :
          <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} spacing={2} >
              <Typography variant='h5'>{t('Loading contract...')}</Typography>
              <CircularProgress/>
          </Stack>

}

        </CardContent>
        </Card>
        </>
    )
}

export default Download
