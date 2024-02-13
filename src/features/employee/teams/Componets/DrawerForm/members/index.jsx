// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack';
import { Checkbox } from '@mui/material'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import { Input, TextField } from '@mui/material'
import { useEffect, useMemo, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import useGetEmployeeDropDown from 'src/features/Contracts/list/Hooks/useEmployee'



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

const Members = ({SetMembers,SelectedRow}) => {

  const [selectedItems, setSelectedItems] = useState(SelectedRow||[]);
  console.log("🚀 ~ Members ~ selectedItems:", selectedItems)
  const [searchText, setSearchText] = useState('');
  const {data:UserData,isloading}=useGetEmployeeDropDown()

  const deletee = (index) => {
    setSelectedItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const toggleSelect = (icon) => {
    console.log("🚀 ~ toggleSelect ~ icon:", icon)
    const isSelected = selectedItems.includes(icon);
    if (isSelected) {
      setSelectedItems(selectedItems.filter((item) => item !== icon));
      SetMembers(selectedItems.filter((item) => item !== icon))
    } else {
      SetMembers([...selectedItems, icon])
      setSelectedItems([...selectedItems, icon]);
    }
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
    <Box>
      <Typography sx={{ fontFamily:'Montserrat' }}>
        Members
      </Typography>

      <Stack direction="row" spacing={2} padding={"10px"} position={"relative"} >
          {selectedItems?.map((icon, index) => (
      <Avatar key={index} src={process.env.NEXT_PUBLIC_IMAGES+'/'+icon?.user_info?.image}  variant='circular' sx={{  width: 34, height: 34 }}>
      <Icon icon={icon} />
      <Box onClick={()=>{deletee(index)}}>

      <CloseIcon  sx={{position:"absolute",backgroundColor:"red",width:"10px",height:"10px",borderRadius:"50%",left:"0px",bottom:"23px",color:"#fff",cursor:"pointer",zIndex:'999'}} />
      </Box>
    </Avatar>
  ))}

</Stack>


      <TextField
        placeholder='Search'
value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <Box paddingRight={1} >
            <svg width="14"  height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="zoom-split">
                <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z" fill="#8090A7"/>
              </g>
            </svg>
            </Box>
          ),
        }}
        sx={{ paddingLeft: '8px',backgroundColor:'#F5F7FA',marginBottom:'2%' }}
        size='small'
        fullWidth
      />

{
  filteredData.map((item, index) => (
    <Box
      key={index}
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: index !== filteredData.length - 1 ? [6.25, 6.25, 5.5, 6.25] : []
      }}
    >
      <Avatar variant="rounded"  src={process.env.NEXT_PUBLIC_IMAGES+'/'+item?.user_info?.image}  sx={{ mr: 4, width: 34, height: 34 }}>
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
          <Typography variant="h6">{item.first_name + '\u00A0\u00A0' + item.last_name}</Typography>
          <Typography variant="body2" sx={{ color: 'text.disabled' }}>
            {item.role}
          </Typography>
        </Box>
        <Box>
          <Checkbox
            checked={selectedItems?.includes(item.id)}
            onChange={() => toggleSelect(item.id)}
          />
        </Box>
      </Box>
    </Box>
  ))}


    </Box>
  );
}

export default Members
