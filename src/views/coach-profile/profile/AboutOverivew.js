// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Rating } from '@mui/material'
import { Stack } from '@mui/system'
import { useTranslation } from 'react-i18next'

const renderList = arr => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            display: 'flex',
            '&:not(:last-of-type)': { mb: 3 },
            '& svg': { color: 'text.secondary' }
          }}
        >
          <Box sx={{ display: 'flex', mr: 2 }}>
            <Icon fontSize='1.25rem' icon={item.icon} />
          </Box>

          <Box sx={{ columnGap: 2, display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
            <Typography sx={{ fontWeight: 500, color: 'text.secondary' }}>
              {`${item.property.charAt(0).toUpperCase() + item.property.slice(1)}:`}
            </Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
            </Typography>
          </Box>
        </Box>
      )
    })
  } else {
    return null
  }
}

const renderTeams = arr => {
  if (arr && arr.length) {
    return arr.map((item, index) => {
      return (
        <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            '&:not(:last-of-type)': { mb: 3 },
            '& svg': { color: `${item.color}.main` }
          }}
        >
          <Icon fontSize='1.25rem' icon={item.icon} />

          <Typography sx={{ mx: 2, fontWeight: 500, color: 'text.secondary' }}>
            {item.property.charAt(0).toUpperCase() + item.property.slice(1)}
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            {item.value.charAt(0).toUpperCase() + item.value.slice(1)}
          </Typography>
        </Box>
      )
    })
  } else {
    return null
  }
}

const AboutOverivew = (Data) => {
  const {t} = useTranslation();

  return Object.keys(Data).length > 0 ? (
  <div>
  {Data.Data.map((coachData)  => (

    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardContent>
            <Box sx={{ mb: 6 }}>
              <Typography ariant='body2'v sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
                {t('About')}
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'column' }}>

              <Typography ariant='body2'v sx={{ mb: 4, color: 'inherit' }} >
                {t('Birth Date')} :  {coachData.birthDate}
              </Typography>

              <Typography ariant='body2'v sx={{ mb: 4, color: 'inherit' }} >
                <Rating name="read-only" value={coachData.rate} readOnly />
              </Typography>

              </Stack>
            </Box>
            <Box sx={{ mb: 6 }}>
              <Typography variant='body2' sx={{ mb: 4, color: 'text.disabled', textTransform: 'uppercase' }}>
                {t('Description')}
              </Typography>
            </Box>

          </CardContent>
        </Card>
      </Grid>

    </Grid>
  ))}
  </div>

  ) : null

}

export default AboutOverivew
