import { useMemo, useState } from 'react'

import { Avatar, Chip, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Box, Stack } from '@mui/system'
import Link from 'next/link'
import Modal from '@mui/material/Modal';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,

};

const useRegistrationColumn = () => {
  const { t } = useTranslation()




  const [open, setOpen] = useState(false);
  const [value, setValue] = useState();


  const [selectedPaid, setSelectedPaid] = useState(false);
  const [selectedUnpaid, setSelectedUnpaid] = useState(false);

  const handleChangePaid = () => {
    setSelectedPaid(!selectedPaid);
  };

  const handleChangeUnpaid = () => {
    setSelectedUnpaid(!selectedUnpaid);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedUnpaid(false);
    setSelectedPaid(false);
  };



  const handleChange = (event) => {
    setValue(event.target.value);

  };

  return useMemo(() => [
    {
      field: 'first_name',
      headerName: t('Name'),
      flex: 2,
      renderCell: params => {
        return (
          <Link style={{ textDecoration: 'none' }} href={`/profile/${params?.row?.id}`}>
            <Stack spacing={1} direction={'row'} alignItems={'center'}>
              <Avatar src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} alt='' />
              <Stack direction={'column'}>
                <Typography className='custome-data-grid-font'>
                  {params?.row?.first_name} {params?.row?.last_name}
                </Typography>
                <Typography className='custome-data-grid-font2'>{params?.row?.specialization}</Typography>
              </Stack>
            </Stack>
          </Link>
        )
      }
    },
    {
      field: 'department',
      headerName: t('Department'),

      flex: 1.5,
      renderCell: params => <Typography className='custome-data-grid-font'>{params?.row?.department}</Typography>
    },
    {
      field: 'status',
      headerName: t('Status'),
      headerAlign: 'center',
      align: 'center',
      flex: 2,
      renderCell: params => {
        return (

          <>
          <Box
            sx={{
              backgroundColor:
                params?.row?.status === 'Arrived'
                  ? 'rgba(145, 196, 131, 0.20)'
                  : Boolean(params?.row?.status?.includes('Late'))
                  ? 'rgba(106, 178, 223, 0.20)'
                  : params?.row?.status === 'out'
                  ? 'rgba(145, 196, 131, 0.20)'
                  : params?.row?.status === 'Absent'
                  ? 'rgba(223, 46, 56, 0.20)'
                  : Boolean(params?.row?.status?.includes('Early'))
                  ? 'rgba(106, 178, 223, 0.20)'
                  : 'rgba(223, 46, 56, 0.20)',

              borderRadius: '4px',
              display: 'flex',
              padding: '4px 8px',
              alignItems: 'flex-start',
              gap: '10px'
            }}
          >
            {' '}
            <Typography
              sx={{
                fontFamily: 'DM Sans',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 500,
                lineHeight: '130%',
                color:
                  params?.row?.status === 'Arrived'
                    ? '#91C483'
                    : Boolean(params?.row?.status?.includes('Late'))
                    ? '#6AB2DF'
                    : params?.row?.status === 'out'
                    ? '#91C483'
                    : params?.row?.status === 'Absent'
                    ? '#DF2E38'
                    : Boolean(params?.row?.status?.includes('Early'))
                    ? '#6AB2DF'
                    : '#DF2E38'
              }}
            >

              {t(params?.row?.status)}
            </Typography>

          </Box>

          {params?.row?.status === 'Absent' && (

<>
<Typography onClick={handleOpen} sx={{  cursor: "pointer",position:"relative" }}>
  <img src='/images/absence-options.svg' alt='' />
</Typography>
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="child-modal-title"
  aria-describedby="child-modal-description"
>
  <Box sx={{ ...style, width: "400px", height: "auto", padding: "16px 24px 16px 24px", borderRadius: "12px" }}>
    <Stack direction={'row'} spacing={4}>
      <Avatar alt="Remy Sharp" src={process.env.NEXT_PUBLIC_IMAGES + '/' + params?.row?.user_info} sx={{ width: 40, height: 40 }} />
      <Box>
        <Typography>{params?.row?.first_name}  {params?.row?.last_name}</Typography>
        <Typography>{params?.row?.specialization}</Typography>
      </Box>
    </Stack>
    <Typography style={{ fontWeight: "600", fontSize: "16px", color: "#3f4458" }} my={'16px'}>Record absence as : </Typography>
    <Stack>
      <FormControlLabel
        control={<Radio checked={selectedPaid} onChange={handleChangePaid} name="radio-buttons-Paid" />}
        label="Paid"
      />
      {selectedPaid &&
        <FormControl sx={{ marginLeft: "25px" }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group-Paid"
            name="controlled-radio-buttons-group-Paid"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="Justified" control={<Radio />} label="Justified" />
            <FormControlLabel value="Unjustified" control={<Radio />} label="Unjustified" />
          </RadioGroup>
        </FormControl>
      }
    </Stack>
    <Stack>
      <FormControlLabel
        control={<Radio checked={selectedUnpaid} onChange={handleChangeUnpaid} name="radio-buttons-Unpaid" />}
        label="Unpaid"
      />
      {selectedUnpaid &&
        <FormControl sx={{ marginLeft: "25px" }}>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group-Unpaid"
            name="controlled-radio-buttons-group-Unpaid"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="Justified" control={<Radio />} label="Justified" />
            <FormControlLabel value="Unjustified" control={<Radio />} label="Unjustified" />
          </RadioGroup>
        </FormControl>
      }

    </Stack>
    <Stack>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="Sick" control={<Radio />} label="Sick" />
        <FormControlLabel value="Present" control={<Radio />} label="Present" />
      </RadioGroup>
    </Stack>
    <Stack direction={'row'} justifyContent={'flex-end'} spacing={3} textAlign={'end'}>
      <Button  onClick={handleClose} sx={{ width: "106px", height: "34px", backgroundColor: "#6ab2df", padding: "8px 24px 8px 24px", color: "#fff", "&:hover": { backgroundColor: "#6ab2df" } }}>Confirm</Button>
      <Button  onClick={handleClose} sx={{ width: "106px", height: "34px", backgroundColor: "#8090A733", padding: "8px 24px 8px 24px", color: "#8090A7", "&:hover": { backgroundColor: "#8090A733" } }}>cancel</Button>
    </Stack>
  </Box>
</Modal>
</>

)}
          </>

        )
      }
    },
    {
      field: 'checkIn',
      headerName: t('Check in'),
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: params => <Typography className='custome-data-grid-font'>{params?.row?.checkIn}</Typography>
    },
    {
      field: 'checkOut',
      headerName: t('Check out'),
      headerAlign: 'center',
      align: 'center',
      flex: 1,
      renderCell: params => <Typography className='custome-data-grid-font'>{params?.row?.checkOut}</Typography>
    }
  ])
}

export default useRegistrationColumn
