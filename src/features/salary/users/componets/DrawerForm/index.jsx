import React, { useEffect, useMemo, useState } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { Button, TextField, Typography, Stack, Divider ,MenuItem} from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'
import { useTranslation } from 'react-i18next'
import ParentTeam from './parentTeam'
import Avatar from '@mui/material/Avatar'
import { Checkbox } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useForm, Controller } from 'react-hook-form'
import { useAddDecision } from '../../hooks/useAddDecision'

const drawerWidth = 440

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),

  ...theme.mixins.toolbar,
  justifyContent: 'flex-start'
}))

export default function DrawerFormSalary({ openParent, setOpenParent, Data}) {

  const {data}= Data?.data
  console.log("🚀 ~ DrawerFormSalary ~ data:", data)

  const theme = useTheme()
  const [teamName, setTeamName] = useState('')
  const [Type, setType] = useState("");
  const [Value, seValue] = useState("");
  const [selectedItems, setSelectedItems] = useState( [])

  const { mutate: AddDecision, isloading } = useAddDecision()




  const { t } = useTranslation()

  const handleTeamNameChange = event => {
    setTeamName(event.target.value)
  }

  const handleDrawerClose = () => {
    setOpenParent(false)
  }


  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleValueChange = (e) => {
    seValue(e.target.value);
  };


  useEffect(() => {
    if (selectedItems.length === 0) {
      const allIds = data.map(item => item.id);
      setSelectedItems(allIds);
    }
  }, [data, ]);

  const toggleSelectAll = () => {
    if (selectedItems.length === 0) {
      const allIds = data.map(item => item.id);
      setSelectedItems(allIds);
    } else {
      setSelectedItems([]);
    }
  };


  const toggleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(itemId => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }


  const defaultValues ={
    amount :"",
    type:"",

  }


  const {
    control,

    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onBlur',
  });



  const handlerSendData = () => {
     const formData = new FormData()

     formData.append('type', Type)
       formData.append('amount', Value)
     selectedItems.forEach((user, index) => {
       formData.append(`users[${index}]`, user)

     })
    console.log(formData);
     AddDecision(formData)

    // handleDrawerClose()
  }

  return (
    <Drawer
      backgroundColor='#fff'
      sx={{
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: { xl: drawerWidth, md: drawerWidth, sm: drawerWidth, xs: '90%' },
          overflowY: 'auto',
          overflowX: 'hidden'
        },
        overflow: 'visible',
        borderRadius: '15px'
      }}
      anchor='right'
      open={openParent}
      variant='temporary'
      ModalProps={{
        keepMounted: true
      }}
    >
      <Stack spacing={3}>
        <Box
          sx={{
            width: '100%',
            backgroundColor: '#DCE1E6',
            fontSize: '20px',
            gap: '10px',
            padding: '24px',
           color:'#8090A7',
            fontFamily: 'Montserrat',
            fontWeight:600
          }}
        >
          {t('Add Reward & deducation')}
        </Box>

          <Stack spacing={4} sx={{padding:"0px 24px 0px 24px" }}>
            <Box>

         <Controller
            name={`type`}
            control={control}
            render={({ field }) => (
              <TextField

              {...field}
              select
              fullWidth
              value={Type}
              SelectProps={{
                displayEmpty: true,
                onChange: (e) => {
                  handleTypeChange(e);
                },
              }}
              size='small'
                  >
                    <MenuItem  disabled="true" value=''>{`${t("Type")}`}</MenuItem>
                    <MenuItem value='reward'>{`${t("Reward")}`}</MenuItem>
                    <MenuItem value='deducations'>{`${t("Deducations")}`}</MenuItem>
                </TextField>
   )}
 />
</Box>


<Box>
         <Controller
            name={`amount `}
            control={control}
            render={({ field }) => (
            <TextField
            fullWidth
            style={{ height: '10px' }}
            placeholder={t('Value')}
            size='small'
            value={Value}
            onChange={handleValueChange}
          />
             )}
 />
</Box>

          </Stack>



        <Box sx={{ padding: '24px', width:"100%",display:"flex",alignItems:"center",justifyContent:"center" }}>
          <TextField
            fullWidth
            style={{ height: '10px',width:"90%" }}
            placeholder={t('Search...')}
            size='small'
            value={teamName}
            onChange={handleTeamNameChange}
          />
<Box sx={{marginTop:"20px"}}>


<Checkbox
  onChange={() => toggleSelectAll()}
  checked={selectedItems.length > 0}
/>
  </Box>


        </Box>
            {/* ***************** */}
            {data?.map((item,index)=>(

            <Box
          key={index}
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '0px 24px 0px 24px'
          }}
        >
          <Avatar
            variant='circular'
            src={process.env.NEXT_PUBLIC_IMAGES + '/' + item?.user_info?.image}
            sx={{ mr: 4, width: 36, height: 36 }}
          >
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
              <Typography  sx={{ fontSize:'12px',fontWeight:400,color:'#7B8794' }}>
                {t(item.level)}
              </Typography>
            </Box>
            <Box>
            <Checkbox
            onChange={() => toggleSelect(item.id)}
            checked={selectedItems.includes(item.id)}
          />
            </Box>
          </Box>
        </Box>
            ))}

            {/* ***************** */}




        <Box sx={{ display: 'flex', width: '100%', padding: '10px' }}>
          <Stack sx={{ marginLeft: { sm: '55%' } }} direction={'row'} spacing={2}>
            <Button
              onClick={handleDrawerClose}
              sx={{
                backgroundColor: '#DCE1E6',
                color: '#8090A7',
                borderRadius: '4px',
                padding: '8px 24px',
                '&:hover': { backgroundColor: '#DCE1E6' }
              }}
            >
              {t('Cancel')}
            </Button>
            <Button
              onClick={handlerSendData}
              loadingPosition='start'
              variant='contained'
              sx={{

                borderRadius: '4px',
                padding: '8px 24px',

              }}
            >
              {t('Add')}
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Drawer>
  )
}
