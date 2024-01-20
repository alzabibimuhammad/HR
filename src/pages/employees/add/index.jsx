import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Account from 'src/features/employee/add/Componets/Account';
import Contact from 'src/features/employee/add/Componets/Contact';
import Employment from 'src/features/employee/add/Componets/Employment';
import Info from 'src/features/employee/add/Componets/Personal Info';
import Professional from 'src/features/employee/add/Componets/Professional';
import Skills from 'src/features/employee/add/Componets/Skills';
import Snapshot from 'src/features/employee/add/Componets/Snapshot';

export default function Add() {
  const [snapshotData, setSnapshotData] = useState({});
  const [accountData, setAccountData] = useState({});
  const [infoData, setInfoData] = useState({});
  const [contactData, setContactData] = useState({});
  const [professionalData, setProfessionalData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [employmentData, setEmploymentData] = useState({});

  const handleDataSubmit = () => {
    const allData = {
      snapshot: snapshotData,
      account: accountData,
      info: infoData,
      contact: contactData,
      professional: professionalData,
      skills: skillsData,
      employment: employmentData,
    };

    console.log(allData);

  };

  return (
    <>
      <Button
        type='submit'
        sx={{
          marginLeft: '70%',
          width: '30%',
          backgroundColor: '#6AB2DF',
          color: '#fff',
          ':hover': { color: '#fff', backgroundColor: '#2A4759' },
        }}
        onClick={handleDataSubmit}
      >
        +Add Employee
      </Button>
      <br />
      <br />
      <Stack direction={{ sm: 'row', xs: 'column' }} spacing={2}>
        <Stack spacing={2} width={{ sm: '50%' }} direction={{ sm: 'column', xs: 'column' }}>
          <Box>
            <Snapshot onDataChange={setSnapshotData} />
          </Box>
          <Box>
            <Account onDataChange={setAccountData} />
          </Box>
          <Box>
            <Info onDataChange={setInfoData} />
          </Box>
          <Box>
            <Contact onDataChange={setContactData} />
          </Box>
        </Stack>

        <Stack flex={1} direction={'column'} spacing={2}>
          <Box>
            <Professional onDataChange={setProfessionalData} />
          </Box>
          <Box>
            <Skills onDataChange={setSkillsData} />
          </Box>
          <Box>
            <Employment onDataChange={setEmploymentData} />
          </Box>
        </Stack>
      </Stack>
    </>
  );
}
