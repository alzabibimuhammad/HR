import React, { useEffect, useState, useMemo } from 'react';
import { Box, Typography, TextField, Stack, Checkbox } from '@mui/material';
import { useTranslation } from 'react-i18next';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';

const ParentTeam = ({ data }) => {
  const { t } = useTranslation();
  const [searchText, setSearchText] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedItem, setSelectedItem] = useState({});

  const handleCheckboxChange = (id) => {
    setSelectedItem(id);
  };

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredData = useMemo(() => {
    return data?.data?.data?.filter((user) =>
      user?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
  }, [data, searchText]);


  return (
    <>
      {filteredData && (
        <>
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: '12px' }}>
            <Typography sx={{ fontFamily: 'Montserrat', fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>
              {t('Parent Team')}
            </Typography>
            <Box>
              <img src='/images/Vector.svg' alt='' />
            </Box>
          </Box>
          <TextField
            placeholder={t('Search')}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{
              startAdornment: (
                <Box paddingRight={1}>
                  <svg width='14' height='15' viewBox='0 0 14 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <g id='zoom-split'>
                      <path
                        id='Combined Shape'
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5.75002 11.875C2.64341 11.875 0.125015 9.3566 0.125015 6.25C0.125015 3.1434 2.64341 0.625 5.75002 0.625C8.85662 0.625 11.375 3.1434 11.375 6.25C11.375 9.3566 8.85662 11.875 5.75002 11.875ZM5.75 10.6251C8.16625 10.6251 10.125 8.6663 10.125 6.25005C10.125 3.8338 8.16625 1.87505 5.75 1.87505C3.33376 1.87505 1.375 3.8338 1.375 6.25005C1.375 8.6663 3.33376 10.6251 5.75 10.6251ZM13.692 14.1919C13.936 13.9478 13.936 13.5521 13.692 13.308L11.192 10.808C10.9479 10.5639 10.5522 10.5639 10.3081 10.808C10.064 11.0521 10.064 11.4478 10.3081 11.6919L12.8081 14.1919C13.0522 14.436 13.4479 14.436 13.692 14.1919Z'
                        fill='#8090A7'
                      />
                    </g>
                  </svg>
                </Box>
              ),
            }}
            sx={{ paddingLeft: '8px', backgroundColor: '#F5F7FA', marginBottom: '12px' }}
            size='small'
            fullWidth
          />
          <Stack spacing={5} marginTop={'14px'}>
            {filteredData.map((user, index) => (
              <Box key={index}>
                <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
                  <Typography sx={{ fontWeight: '500', fontSize: '14px', color: '#3f4458' }}>{user?.name}</Typography>
                  <Checkbox
                    checked={selectedItem === user.id}
                    onChange={() => handleCheckboxChange(user.id)}
                  />
                </Stack>
                <Typography
                  component='p'
                  sx={{ fontWeight: '500', fontSize: '13px', color: '#8090a7', display: 'flex', alignItems: 'center' }}
                  onClick={() => handleToggle(index)}
                >
                  {user?.user?.length + ' ' + 'member '}
                  {openIndex === index ? (
                    <KeyboardArrowUpIcon sx={{ cursor: 'pointer' }} />
                  ) : (
                    <KeyboardArrowDownIcon sx={{ cursor: 'pointer' }} />
                  )}
                </Typography>
                <Collapse in={openIndex === index}>
                  {user?.user?.map((member, i) => (
                    <Stack key={i} spacing={-1} marginTop={'8px'} direction={'row'}>
                      <Avatar
                        variant='circular'
                        src={process.env.NEXT_PUBLIC_IMAGES + '/' + member?.user_info?.image}
                        sx={{ mr: 4, width: 36, height: 36 }}
                      />
                      <Box>
                        <Typography component='p' sx={{ fontWeight: '500', fontSize: '14px', color: '#3f4458' }}>
                          {member?.first_name} {member?.last_name}
                        </Typography>
                        <Typography sx={{ fontWeight: '500', fontSize: '13px', color: '#8090a7' }}>
                          {member?.role === 'employee' ? member?.role : ''}
                        </Typography>
                      </Box>
                    </Stack>
                  ))}
                </Collapse>
              </Box>
            ))}
          </Stack>
        </>
      )}
    </>
  );
};

export default React.memo(ParentTeam);
