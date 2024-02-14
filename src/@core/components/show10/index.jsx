import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTranslation } from 'react-i18next';

export default function Show10({setShow}) {
  const {t} = useTranslation()
  const [value,setValue] = React.useState(10)
  const handleChange = (event) => {
    setShow(event.target.value);
    setValue(event.target.value)
  };

  return (
    <Box sx={{ minWidth: 120 }}>

      <FormControl fullWidth>
        <Box mt={2} justifyContent={'start'} alignItems={'start'} >
        <InputLabel  id="demo-simple-select-label">{t('Show')}  {value}</InputLabel>
        </Box>
        <Select
          size='small'
          labelId="demo-simple-select-label"

          id="demo-simple-select"
          onChange={handleChange}
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
          <MenuItem value={40}>40</MenuItem>
          <MenuItem value={50}>50</MenuItem>

        </Select>
      </FormControl>
    </Box>
  );
}
