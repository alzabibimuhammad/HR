// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import { Checkbox, Input, TextField } from '@mui/material'
import useGetEmployeeDropDown from 'src/features/Contracts/list/Hooks/useEmployee'
import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useGetAllUsers from '../../../hooks/useGetAllEmployee'

const data = [
  {
    amount: '1.2k',
    trendNumber: 4.2,
    icon: 'tabler:shadow',
    title: 'Direct Source',
    subtitle: 'Direct link click'
  },
  {
    amount: '31.5k',
    trendNumber: 8.2,
    icon: 'tabler:globe',
    title: 'Social Networks',
    subtitle: 'Social Channels'
  },
  {
    amount: '893',
    trendNumber: 2.4,
    icon: 'tabler:mail',
    title: 'Email Newsletter',
    subtitle: 'Mail Campaigns'
  },
  {
    amount: '342',
    trendNumber: 0.4,
    trend: 'negative',
    title: 'Referrals',
    icon: 'tabler:external-link',
    subtitle: 'Impact Radius Visits'
  },
  {
    title: 'ADVT',
    amount: '2.15k',
    trendNumber: 9.1,
    subtitle: 'Google ADVT',
    icon: 'tabler:discount-2'
  },
  {
    title: 'Other',
    amount: '12.5k',
    trendNumber: 6.2,
    icon: 'tabler:star',
    subtitle: 'Many Sources'
  }
]

const Members = ({SetteamLeader,Data}) => {
  const {data:UserData,isloading}=useGetAllUsers()
  const [selectedTeamLeader,SetTeamLeader]=useState()
  const [searchText, setSearchText] = useState('');
  const {t} = useTranslation()

  const handleCheckboxChange = (id) => {
    SetTeamLeader(id);
    SetteamLeader(id)
  };




  const filteredData = useMemo(() => {
    if (!searchText || !UserData || !UserData.data || !UserData.data.data) {
      return UserData?.data.data||[];
    }

    return UserData.data.data.filter((item) =>
      item.first_name.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [searchText, UserData]);

  return (
    <>
      <Typography sx={{ fontFamily: 'Montserrat' ,fontSize:'16px',fontWeight:600, marginBottom:'12px' }}>
      {t('Department Leader')}
      </Typography>

      <TextField
        placeholder={t('Search')}
        onChange={(e) => setSearchText(e.target.value)}

        InputProps={{
          startAdornment: (
            <Box paddingRight={1} >
            <svg width="14"  height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="zoom-split">
                <path id="Combined Shape" fillRule="evenodd" clipRule="evenodd" d="M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z" fill="#8090A7"/>
              </g>
            </svg>
            </Box>
          ),
        }}
        sx={{ paddingLeft: '8px',backgroundColor:'#F5F7FA',marginBottom:'12px' }}
        size='small'
        fullWidth
      />


        {filteredData.map((item, index) => {
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                alignItems: 'center',
                mb: index !== data.length - 1 ? [6.25, 6.25, 5.5, 6.25] : undefined
              }}
            >
              <Avatar variant='circular' src={process.env.NEXT_PUBLIC_IMAGES+'/'+item?.user_info?.image} sx={{ mr: 4, width: 34, height: 34 }}>
                <Icon icon={item.first_name} />
              </Avatar>
              <Box
                sx={{
                  rowGap: 1,
                  columnGap: 4,
                  width: '100%',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography sx={{fontSize:'14px',fontWeight:500}}>{item.first_name + '\u00A0\u00A0' + item.last_name}</Typography>
                  <Typography sx={{ fontSize:'12px',fontWeight:400,color:'#7B8794' }}>
                    {t(item.level)}
                  </Typography>
                </Box>
                <Box>
              <Checkbox
                checked={selectedTeamLeader === item.id}
                onChange={() => handleCheckboxChange(item.id)}
              />
            </Box>
              </Box>
            </Box>
          )
        })}
        </>
  )
}

export default Members
