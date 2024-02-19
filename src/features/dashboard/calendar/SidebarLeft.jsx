import * as React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import MobileStepper from '@mui/material/MobileStepper'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { useTranslation } from 'react-i18next'
import Image from 'next/image'
import { Stack } from '@mui/system'
import { Divider } from '@mui/material'

const steps = [
  {
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`
  },
  {
    label: 'Create an ad group',
    description: 'An ad group contains one or more ads which target a shared set of keywords.'
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`
  }
]

export default function SidebarLeft({ DataEventByDay }) {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = steps.length
  const { t } = useTranslation()

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1)
  }

  return (
    <Stack
      width={'300px'}
      height={'300px'}
      overflow={'scroll'}
      sx={{ '&::-webkit-scrollbar': { width: '3px' } }}
      spacing={1}
      direction={'column'}
    >
      {Array.isArray(DataEventByDay?.data?.data) && DataEventByDay.data.data.length > 0 ? (
        DataEventByDay.data.data.map(event => (
          <>
            <Stack
              direction={'row'}
              justifyContent={'start'}
              sx={{ padding: 0, margin: 0, width: '100%', height: '70px' }}
              className='parent'
              key={event.id}
            >
              <Stack alignItems={'center'} direction={'column'}>
                <span style={{ padding: 0, margin: 0 }} className='child'>
                  {event.day}
                </span>

                <Typography width={'54px'} p={0} ml={0} variant='p' fontSize={10}>
                  {event.start}
                </Typography>
              </Stack>

              <Box
                sx={{
                  width: '160px',
                  height: '65px',
                  textAlign: 'start',
                  alignItems: 'center',
                  lineHeight: '15px',
                  overflowY: 'auto',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  '&::-webkit-scrollbar': {
                    width: '0px' /* This will hide the scrollbar on WebKit browsers (e.g., Chrome, Safari) */
                  },
                  scrollbarWidth: 'none' /* This will hide the scrollbar on Firefox */
                }}
              >
                <Typography variant='p' fontSize={12} color={'#000'} style={{ padding: 0, margin: 0 }}>
                  {event.title}
                </Typography>
                <Divider/>
                <Typography variant='p' fontSize={12} color={'#000'} style={{ padding: 0, margin: 0 }}>
                  {event.description}
                </Typography>
              </Box>
            </Stack>
          </>
        ))
      ) : (
        <Box width={'100%'}>
          <img style={{ width: '100%', height: '100%' }} src='/images/notRequest.svg' alt='Alternate Text' />
        </Box>
      )}
    </Stack>
  )
}
