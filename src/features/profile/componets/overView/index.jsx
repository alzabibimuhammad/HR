// ** MUI Components
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { Divider, Rating } from '@mui/material'
import { Stack } from '@mui/system'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from 'react'
import { useReportByDay } from 'src/features/Report/hooks/useReportByDay'





const AboutOverivew = ({ userDataClean, Data, ProfileData }) => {
  console.log("🚀 ~ AboutOverivew ~ userDataClean:", userDataClean)



  const { t } = useTranslation();
  const [isWarDetails, setisWarDetails] = useState(false)
  const [isAlertDetails, setisAlertDetails] = useState(false)
  const [isoverDetails, setisoverDetails] = useState(false)
  const [isRewardDetails, setisRewardDetails] = useState(false)
  const [isAdvanceDetails, setisAdvanceDetails] = useState(false)
  const [isDeductionDetails, setisDeductionDetails] = useState(false)
  const [isCheckin, setisCheckin] = useState(false)
  const [isCheckout, setisCheckout] = useState(false)
  const [isAbsences, setisAbsences] = useState(false)
  const [isPenalty, setisPenalty] = useState(false)

  const { data, isloading } = useReportByDay()


  const Header = styled('p')(({ }) => ({
    fontSize: '16px',
    margin: 0,
    padding: 1,
    lineHeight: '25px',
    color: '#131627',
    fontWeight: 500,
    fontStyle: 'normal'
  }));


  const Text = styled('p')(({ }) => ({
    margin: 0,
    fontSize: '14px',
    fontStyle: 'normal',
    color: '#8090A7',
    marginLeft: 3
  }));

  const Detail = styled('p')(({ }) => ({
    margin: 0,
    marginLeft: 6,
    fontSize: '10px',
    color: '#8090A7',
  }));

  const StackRow = styled(Stack)(({ }) => ({
    flexDirection: 'row',
    marginLeft: 4,
  }));

  const Typo = styled(Typography)(({ }) => ({
    fontSize: '14px',
    fontWeight: 600,
    fontStyle: 'normal',
    color: '#3F4458',
    margin: 0
  }))

  const handleDetails = _ => {
    setisWarDetails(true)
  }

  const handleLessDetails = _ => {
    setisWarDetails(false)
  }

  const handleAlertSee = _ => {
    setisAlertDetails(true)
  }

  const handleAlertLess = _ => {
    setisAlertDetails(false)
  }

  const handleOverSee = _ => {
    setisoverDetails(true)
  }

  const handleOverLess = _ => {
    setisoverDetails(false)
  }

  const handleRewardSee = _ => {
    setisRewardDetails(true)
  }

  const handleRewardLess = _ => {
    setisRewardDetails(false)
  }

  const handleAdvancesSee = _ => {
    setisAdvanceDetails(true)
  }

  const handleAdvancesLess = _ => {
    setisAdvanceDetails(false)
  }

  const handleDeductionSee = _ => {
    setisDeductionDetails(true)
  }

  const handleDeductionLess = _ => {
    setisDeductionDetails(false)
  }

  const handleCheckinSee = _ => {
    setisCheckin(true)
  }

  const handleCheckinLess = _ => {
    setisCheckin(false)
  }

  const handleCheckoutSee = _ => {
    setisCheckout(true)
  }

  const handleCheckoutLess = _ => {
    setisCheckout(false)
  }

  const handleAbsencesSee = _ => {
    setisAbsences(true)
  }

  const handleAbsencesLess = _ => {
    setisAbsences(false)
  }

  return Object.keys(Data).length > 0 ? (
    <div>

      <Grid >
        <Grid item xs={12}>
          <Card>
            <CardContent>

              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.3746 14.7727C10.3746 15.1519 10.0644 15.4621 9.68523 15.4621H1.32698C0.947843 15.4621 0.63764 15.1519 0.63764 14.7727V3.70882C0.63764 3.32968 0.947843 3.01948 1.32698 3.01948H1.61995V2.38184H1.32698C0.603173 2.38184 0 2.98501 0 3.70882V14.7727C0 15.4965 0.603173 16.0997 1.32698 16.0997H9.68523C10.409 16.0997 11.0122 15.4965 11.0122 14.7727V5.5C10.8054 5.56893 10.5986 5.46553 10.3746 5.5V14.7727Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.3748 3.70882V5.51833C10.5989 5.5528 10.8057 5.6045 11.0125 5.67343V3.70882C11.0125 2.98501 10.4093 2.38184 9.68549 2.38184H9.34082V3.01948H9.68549C10.0474 3.01948 10.3748 3.32968 10.3748 3.70882Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.70274 2.3815H6.72088C6.73812 2.31256 6.73812 2.24363 6.73812 2.17469C6.73812 1.46812 6.16941 0.899414 5.46284 0.899414C4.75626 0.899414 4.18756 1.46812 4.18756 2.17469C4.18756 2.24363 4.18756 2.31256 4.20479 2.3815H2.24017V4.17378H8.70274V2.3815ZM5.46284 2.81233C5.11817 2.81233 4.8252 2.51936 4.8252 2.17469C4.8252 1.83002 5.11817 1.53705 5.46284 1.53705C5.80751 1.53705 6.10048 1.83002 6.10048 2.17469C6.10048 2.5366 5.82474 2.81233 5.46284 2.81233Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.03092 5.91406H1.86133V6.5517H7.18648C7.42775 6.2932 7.72072 6.0864 8.03092 5.91406Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.41097 7.62012H1.86133V8.25776H6.1697C6.2214 8.03372 6.30757 7.80969 6.41097 7.62012Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.03184 9.32715H1.86133V9.96479H6.10077C6.0663 9.74075 6.03184 9.53395 6.03184 9.32715Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.47972 11.0156H1.86115V11.6533H6.91056C6.75546 11.4637 6.60036 11.2397 6.47972 11.0156Z" fill="black" />
                    <path d="M8.25478 12.7217H1.86115V13.3593H8.25478V12.7217Z" fill="black" />
                  </svg>
                  <Header ariant='body2' sx={{ textTransform: 'uppercase' }}>
                    {t('General')}
                  </Header>
                  <Divider sx={{ width: '85%' }} style={{ background: '#8090A7' }} />
                </Box>
                <Stack direction={'column'}  >

                  <StackRow >

                    <Typo >{t('Warnings')} :</Typo>
                    <Text style={{ color: 'red' }} >{userDataClean?.warnings?.length?userDataClean?.warnings?.length:0}</Text>
                    {/* for data see details arrow  */}

                    {!isWarDetails ?
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('See Details')}
                          </Detail>
                          <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={handleDetails} fontSize='10px' />
                        </Stack>
                      </>
                      :
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('Less Details')}
                          </Detail>
                          <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} onClick={handleLessDetails} fontSize='10px' />
                        </Stack>
                      </>
                    }
                  </StackRow>

                  {/* for data inside warning  */}
         {isWarDetails ?

                <Stack marginLeft={6} direction={'column'} justifyContent={'space-between'}>
                  {userDataClean?.warnings?.map((ele,index)=>(
                      <Stack key={index} direction={'row'} justifyContent={'space-between'} width={'100%'}>
                      <Text>{ele.content}</Text>
                      <Text>{ele.dateTime}</Text>
                    </Stack>

                  ))
                  }

                </Stack>
              :
              null
              }

                  <StackRow>
                    <Typo>{t('Alerts')}:</Typo>
                    <Text >{userDataClean?.alerts?.length ? userDataClean?.alerts?.length : 0}</Text>

                    {!isAlertDetails ?
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('See Details')}
                          </Detail>
                          <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={handleAlertSee} fontSize='10px' />
                        </Stack>
                      </>
                      :
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('Less Details')}
                          </Detail>
                          <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} onClick={handleAlertLess} fontSize='10px' />
                        </Stack>
                      </>
                    }

                  </StackRow>
                  {isAlertDetails ?

                    <Stack marginLeft={6} direction={'column'} justifyContent={'space-between'}>
                      {userDataClean?.alerts?.map((ele, index) => (
                        <Stack key={index} direction={'row'} justifyContent={'space-between'} width={'100%'}>
                          <Text>{ele.content}</Text>
                          <Text>{ele.dateTime}</Text>
                        </Stack>

                      ))
                      }

                    </Stack>
                    :
                    null
                  }
                  <StackRow alignItems={'center'} >
                    <Typo>{t('Penalties')} :</Typo>
                    <Text   >{userDataClean?.penalties?.length ? userDataClean?.penalties?.length : 0} </Text>
                    {!isPenalty ?
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('See Details')}
                          </Detail>
                          <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={() => { setisPenalty(true) }} fontSize='10px' />
                        </Stack>
                      </>
                      :
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('Less Details')}
                          </Detail>
                          <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} onClick={() => { setisPenalty(false) }} fontSize='10px' />
                        </Stack>
                      </>
                    }

                  </StackRow>

                </Stack>

                {/* for data inside warning  */}
                {isPenalty ?

                  <Stack marginLeft={6} direction={'column'} justifyContent={'space-between'}>
                    {userDataClean?.penalties?.map((ele, index) => (
                      <Stack key={index} direction={'row'} justifyContent={'space-between'} width={'100%'}>
                        <Text>{ele.content}</Text>
                        <Text>{ele.dateTime}</Text>
                      </Stack>

                    ))
                    }

                  </Stack>
                  :
                  null
                }
              </Box>


              {/* second section */}

              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="17" viewBox="0 0 13 17" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.3746 14.7727C10.3746 15.1519 10.0644 15.4621 9.68523 15.4621H1.32698C0.947843 15.4621 0.63764 15.1519 0.63764 14.7727V3.70882C0.63764 3.32968 0.947843 3.01948 1.32698 3.01948H1.61995V2.38184H1.32698C0.603173 2.38184 0 2.98501 0 3.70882V14.7727C0 15.4965 0.603173 16.0997 1.32698 16.0997H9.68523C10.409 16.0997 11.0122 15.4965 11.0122 14.7727V12.8081C10.8054 12.877 10.5986 12.9287 10.3746 12.9632V14.7727Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.3748 3.70882V5.51833C10.5989 5.5528 10.8057 5.6045 11.0125 5.67343V3.70882C11.0125 2.98501 10.4093 2.38184 9.68549 2.38184H9.34082V3.01948H9.68549C10.0474 3.01948 10.3748 3.32968 10.3748 3.70882Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.70274 2.3815H6.72088C6.73812 2.31256 6.73812 2.24363 6.73812 2.17469C6.73812 1.46812 6.16941 0.899414 5.46284 0.899414C4.75626 0.899414 4.18756 1.46812 4.18756 2.17469C4.18756 2.24363 4.18756 2.31256 4.20479 2.3815H2.24017V4.17378H8.70274V2.3815ZM5.46284 2.81233C5.11817 2.81233 4.8252 2.51936 4.8252 2.17469C4.8252 1.83002 5.11817 1.53705 5.46284 1.53705C5.80751 1.53705 6.10048 1.83002 6.10048 2.17469C6.10048 2.5366 5.82474 2.81233 5.46284 2.81233Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M8.03092 5.91309H1.86133V6.55073H7.18648C7.42775 6.29222 7.72072 6.08542 8.03092 5.91309Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.41097 7.62012H1.86133V8.25776H6.1697C6.2214 8.03372 6.30757 7.80969 6.41097 7.62012Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.03184 9.32715H1.86133V9.96479H6.10077C6.0663 9.74075 6.03184 9.53395 6.03184 9.32715Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M6.47991 11.0166H1.86133V11.6542H6.91074C6.75564 11.4647 6.60054 11.2406 6.47991 11.0166Z" fill="black" />
                    <path d="M8.25496 12.7217H1.86133V13.3593H8.25496V12.7217Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.80642 6.10449C8.08307 6.10449 6.66992 7.50041 6.66992 9.24099C6.66992 10.9643 8.06584 12.3775 9.80642 12.3775C11.5298 12.3775 12.9429 10.9816 12.9429 9.24099C12.9257 7.51764 11.5298 6.10449 9.80642 6.10449ZM9.80642 11.7398C8.42774 11.7398 7.30756 10.6197 7.30756 9.24099C7.30756 7.86231 8.42774 6.74213 9.80642 6.74213C11.1851 6.74213 12.3053 7.86231 12.3053 9.24099C12.3053 10.6197 11.1851 11.7398 9.80642 11.7398Z" fill="black" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.1331 9.05165C10.0297 9.01718 9.94353 8.98271 9.84013 8.93101C9.68503 8.86208 9.5127 8.79315 9.4093 8.65528C9.32313 8.55188 9.32313 8.37954 9.37483 8.25891C9.461 8.0521 9.70227 8.0004 9.90907 8.0004C10.2537 8.0004 10.5812 8.24167 10.6501 8.24167C10.788 8.24167 10.7707 7.8453 10.6501 7.77637C10.5467 7.6385 10.2537 7.56957 10.0814 7.55233V7.34553C10.0814 7.25936 10.0125 7.19043 9.9263 7.19043H9.70227C9.6161 7.19043 9.54716 7.25936 9.54716 7.34553V7.5868C9.2542 7.65573 8.99569 7.82807 8.87506 8.10381C8.78889 8.31061 8.77166 8.58634 8.87506 8.81038C9.01293 9.12058 9.28866 9.25845 9.58163 9.37908C9.68503 9.41355 9.7712 9.44802 9.85737 9.48249C10.0814 9.56865 10.3399 9.70652 10.3399 9.98226C10.3399 10.2408 10.202 10.3786 9.96077 10.4476C9.78843 10.4993 9.54717 10.482 9.3576 10.4303C9.23696 10.3959 8.84059 10.1891 8.80612 10.1891C8.66826 10.1891 8.68549 10.6027 8.78889 10.6888C8.94399 10.8267 9.34036 10.9129 9.52993 10.9301V11.1369C9.52993 11.2231 9.59886 11.292 9.68503 11.292H9.90907C9.99524 11.292 10.0642 11.2231 10.0642 11.1369V10.8956C10.5467 10.7922 10.8914 10.4648 10.8914 9.94779C10.9086 9.43079 10.5639 9.22398 10.1331 9.05165Z" fill="black" />
                  </svg>
                  <Header ariant='body2' sx={{ textTransform: 'uppercase' }}>
                    {t('Financial')}
                  </Header>
                  <Divider sx={{ width: '80%' }} style={{ background: '#8090A7' }} />
                </Box>
                <Stack direction={'column'}  >
                  <StackRow   >
                    <Typo  >{t('Salary')} :</Typo>
                    <Text>{userDataClean?.BaseSalary ? userDataClean?.BaseSalary : 0} {t('L.S')} </Text>
                  </StackRow>
                  <StackRow>
                    <Typo>{t('Overtime')} :</Typo>
                    <Text >{userDataClean?.overTimes?.length ? userDataClean?.overTimes?.length : 0} {t('hours')} </Text>
                    {/* for data see details arrow  */}

                    {!isoverDetails ?
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('See Details')}
                          </Detail>
                          <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={handleOverSee} fontSize='10px' />
                        </Stack>
                      </>
                      :
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('Less Details')}
                          </Detail>
                          <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} onClick={handleOverLess} fontSize='10px' />
                        </Stack>
                      </>
                    }
                  </StackRow>
                  {isoverDetails ?

                    <Stack marginLeft={6} direction={'column'} justifyContent={'space-between'}>
                      {userDataClean?.overTimes?.map((ele,index)=>(
                          <Stack direction={'row'} justifyContent={'space-between'} width={'100%'}>
                            <Text >{ele?.type}</Text>
                                              <Text>{ele?.status}</Text>
                                              <Text>{ele?.lateDate}</Text>
                        </Stack>

                      ))
                      }

                    </Stack>
                    :
                    null
                    }
                  <StackRow>
                    <Typo>{t('Rewards')} :</Typo>
                    <Text   >{userDataClean?.rewards?.length ? userDataClean?.rewards?.length : 0} {t('L.S')} </Text>
                    {/* for data see details arrow  */}

                    {!isRewardDetails ?
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('See Details')}
                          </Detail>
                          <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={handleRewardSee} fontSize='10px' />
                        </Stack>
                      </>
                      :
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('Less Details')}
                          </Detail>
                          <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} onClick={handleRewardLess} fontSize='10px' />
                        </Stack>
                      </>
                    }
                  </StackRow>
                  {isRewardDetails && userDataClean?.rewards?.length ?
                    <Stack marginLeft={6} direction={'column'} >
                      {userDataClean?.rewards?.map((ele, index) => (
                        <Stack key={index} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                          <Text>{ele?.amount}</Text>
                          <Text>{ele?.dateTime}</Text>
                        </Stack>
                      ))
                      }
                    </Stack>
                    : null}
                  <StackRow>
                    <Typo>{t('Advances')} :</Typo>
                    <Text   >{userDataClean?.advances?.length ? userDataClean?.advances?.length : 0} {t('L.S')}</Text>

                    {!isAdvanceDetails ?
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('See Details')}
                          </Detail>
                          <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={handleAdvancesSee} fontSize='10px' />
                        </Stack>
                      </>
                      :
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('Less Details')}
                          </Detail>
                          <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} onClick={handleAdvancesLess} fontSize='10px' />
                        </Stack>
                      </>
                    }
                  </StackRow>
                  {isAdvanceDetails &&userDataClean?.advances?.length ?
                    <Stack marginLeft={6} direction={'column'} >
                      {userDataClean?.advances?.map((ele, index) => (
                        <Stack key={index} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                          <Text>{ele?.amount}</Text>
                          <Text>{ele?.dateTime}</Text>
                        </Stack>
                      ))
                      }
                    </Stack>
                    : null}
                  <StackRow>
                    <Typo>{t('Deduction')} :</Typo>
                    <Text   >{userDataClean?.deductions?.length ? userDataClean?.deductions?.length : 0} {t('L.S')}</Text>
                    {!isDeductionDetails ?
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('See Details')}
                          </Detail>
                          <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={handleDeductionSee} fontSize='10px' />
                        </Stack>
                      </>
                      :
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('Less Details')}
                          </Detail>
                          <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} onClick={handleDeductionLess} fontSize='10px' />
                        </Stack>
                      </>
                    }
                  </StackRow>
                  {isDeductionDetails &&userDataClean?.deductions?.length   ?
                    <Stack marginLeft={6} direction={'column'} >
                      {userDataClean?.deductions?.map((ele, index) => (
                        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                          <Text>{ele?.amount}</Text>
                          <Text>{ele?.dateTime}</Text>
                        </Stack>
                      ))
                      }
                    </Stack>
                    : null}
                  <StackRow>
                    <Typo>{t('Total Salary')} :</Typo>
                    <Text   >{isNaN(userDataClean?.BaseSalary + userDataClean?.reward + userDataClean?.advance - userDataClean?.deduction) ? 0 : userDataClean?.BaseSalary + userDataClean?.reward + userDataClean?.advance - userDataClean?.deduction} {t('L.S')}</Text>
                  </StackRow>
                </Stack>
              </Box>

              {/* third section */}
              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} >

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.70588 3.39655V1.94727C4.70588 1.14799 5.33639 0.5 6.11531 0.5H9.88469C10.6628 0.5 11.2941 1.14946 11.2941 1.94727V3.39655H14.1195C15.1576 3.39655 16 4.26184 16 5.32644V12.5701C16 13.6355 15.1571 14.5 14.1195 14.5H1.88052C0.842366 14.5 0 13.6347 0 12.5701V5.32644C0 4.26107 0.842877 3.39655 1.88052 3.39655H4.70588ZM5.88235 10.1552H3.76621C2.72596 10.1552 1.88235 9.29153 1.88235 8.22551V4.36207H1.88052C1.36264 4.36207 0.941176 4.79435 0.941176 5.32644V12.5701C0.941176 13.1018 1.36244 13.5345 1.88052 13.5345H14.1195C14.6374 13.5345 15.0588 13.1022 15.0588 12.5701V5.32644C15.0588 4.79479 14.6376 4.36207 14.1195 4.36207H14.1176V8.22551C14.1176 9.29184 13.2749 10.1552 12.2338 10.1552H10.1176V10.3966C10.1176 10.9302 9.69551 11.3621 9.17509 11.3621H6.82491C6.30432 11.3621 5.88235 10.9317 5.88235 10.3966V10.1552ZM10.1176 9.18966H12.2338C12.7554 9.18966 13.1765 8.75831 13.1765 8.22551V4.36207H2.82353V8.22551C2.82353 8.75784 3.24532 9.18966 3.76621 9.18966H5.88235V8.94819C5.88235 8.41462 6.30449 7.98276 6.82491 7.98276H9.17509C9.69568 7.98276 10.1176 8.41313 10.1176 8.94819V9.18966ZM6.82353 10.3966C6.82353 10.3972 9.17509 10.3966 9.17509 10.3966C9.1763 10.3966 9.17647 8.94819 9.17647 8.94819C9.17647 8.94763 6.82491 8.94828 6.82491 8.94828C6.8237 8.94828 6.82353 10.3966 6.82353 10.3966ZM10.3529 1.94727C10.3529 1.6821 10.1424 1.46552 9.88469 1.46552H6.11531C5.85657 1.46552 5.64706 1.68084 5.64706 1.94727V3.39655H10.3529V1.94727Z" fill="#131627" />
                  </svg>

                  <Header ariant='body2' sx={{ textTransform: 'uppercase' }}>
                    {t('WorkTime')}
                  </Header>
                  <Divider sx={{ width: '80%' }} style={{ background: '#8090A7' }} />
                </Box>
                <Stack direction={'column'}  >
                  <StackRow   >
                    <Typo  >{t('Check-in')} :</Typo>
                    <Text >{userDataClean?.CheckInPercentage ? (userDataClean?.CheckInPercentage)?.toFixed(1) : 0}% </Text>
                    </StackRow>
                  <StackRow>
                    <Typo>{t('Check-out')} :</Typo>
                    <Text >{userDataClean?.CheckOutPercentage ? userDataClean?.CheckOutPercentage?.toFixed(1) : 0}%  </Text>

                  </StackRow>
                  <StackRow>
                    <Typo>{t('Absences')} :</Typo>
                    <Text   >{userDataClean?.absences?.length ? userDataClean?.absences?.length : 0} {t('days')} </Text>
                    {!isAbsences ?
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('See Details')}
                          </Detail>
                          <KeyboardArrowDownIcon style={{ cursor: 'pointer' }} onClick={handleAbsencesSee} fontSize='10px' />
                        </Stack>
                      </>
                      :
                      <>
                        <Stack direction={'row'} justifyContent={'center'} alignItems={'center'} >
                          <Detail>
                            {t('Less Details')}
                          </Detail>
                          <KeyboardArrowUpIcon style={{ cursor: 'pointer' }} onClick={handleAbsencesLess} fontSize='10px' />
                        </Stack>
                      </>
                    }
                  </StackRow>
                  {isAbsences ?
                    <Stack direction={'column'} >
                      {userDataClean?.absences?.map((ele, index) => (
                        <Stack key={index} direction={'row'} justifyContent={'space-around'} alignItems={'center'}>
                          <Text >{ele?.type}</Text>
                          <Text>{ele?.status}</Text>
                          <Text>{ele?.startDate}</Text>
                        </Stack>
                      ))
                      }
                    </Stack>
                    : null}
                </Stack>
              </Box>

              {/*fourth section */}
              <Box sx={{ mb: 6 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }} >

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.70588 3.39655V1.94727C4.70588 1.14799 5.33639 0.5 6.11531 0.5H9.88469C10.6628 0.5 11.2941 1.14946 11.2941 1.94727V3.39655H14.1195C15.1576 3.39655 16 4.26184 16 5.32644V12.5701C16 13.6355 15.1571 14.5 14.1195 14.5H1.88052C0.842366 14.5 0 13.6347 0 12.5701V5.32644C0 4.26107 0.842877 3.39655 1.88052 3.39655H4.70588ZM5.88235 10.1552H3.76621C2.72596 10.1552 1.88235 9.29153 1.88235 8.22551V4.36207H1.88052C1.36264 4.36207 0.941176 4.79435 0.941176 5.32644V12.5701C0.941176 13.1018 1.36244 13.5345 1.88052 13.5345H14.1195C14.6374 13.5345 15.0588 13.1022 15.0588 12.5701V5.32644C15.0588 4.79479 14.6376 4.36207 14.1195 4.36207H14.1176V8.22551C14.1176 9.29184 13.2749 10.1552 12.2338 10.1552H10.1176V10.3966C10.1176 10.9302 9.69551 11.3621 9.17509 11.3621H6.82491C6.30432 11.3621 5.88235 10.9317 5.88235 10.3966V10.1552ZM10.1176 9.18966H12.2338C12.7554 9.18966 13.1765 8.75831 13.1765 8.22551V4.36207H2.82353V8.22551C2.82353 8.75784 3.24532 9.18966 3.76621 9.18966H5.88235V8.94819C5.88235 8.41462 6.30449 7.98276 6.82491 7.98276H9.17509C9.69568 7.98276 10.1176 8.41313 10.1176 8.94819V9.18966ZM6.82353 10.3966C6.82353 10.3972 9.17509 10.3966 9.17509 10.3966C9.1763 10.3966 9.17647 8.94819 9.17647 8.94819C9.17647 8.94763 6.82491 8.94828 6.82491 8.94828C6.8237 8.94828 6.82353 10.3966 6.82353 10.3966ZM10.3529 1.94727C10.3529 1.6821 10.1424 1.46552 9.88469 1.46552H6.11531C5.85657 1.46552 5.64706 1.68084 5.64706 1.94727V3.39655H10.3529V1.94727Z" fill="#131627" />
                  </svg>

                  <Header ariant='body2' sx={{ textTransform: 'uppercase' }}>
                    {t('Secretariats')}
                  </Header>
                  <Divider sx={{ width: '74%' }} style={{ background: '#8090A7' }} />
                </Box>

                {userDataClean?.deposits?.map((element) => (
                  <Stack direction={'column'}  >
                    <StackRow justifyContent={'space-between'} >
                      <Typo>{element?.description}</Typo>
                      <Text >{element?.received_date}</Text>
                    </StackRow>
                  </Stack>
                ))}
              </Box>

            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>

  ) : null

}

export default AboutOverivew
