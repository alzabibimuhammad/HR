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
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Schema } from '@mui/icons-material';
import { useFieldArray} from 'react-hook-form';
import EmergencyContact from 'src/features/employee/add/Componets/emergenc-contact';
import AdditionalFiles from 'src/features/employee/add/Componets/additional-fils';

export default function Add() {
  const [snapshotData, setSnapshotData] = useState({});
  const [accountData, setAccountData] = useState({});
  const [infoData, setInfoData] = useState({});
  const [contactData, setContactData] = useState({});
  const [professionalData, setProfessionalData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [employmentData, setEmploymentData] = useState({});



  const handleFieldChange = (field, value) => {
    onDataChange((prevData) => ({ ...prevData, [field]: value }));
  };

  const onSubmit = (formData) => {
    // Handle form submission here
    console.log('Form Data:', formData);
  };

  const defaultValues = {
    password: 'password',
    email: [

    ],
    address: [

    ],
    name: [

    ],
    phoneNumber:[],
    file:[],
    description:[],
    study:[],
    certificate:[],
    experience:[],
    skills:[],
    languages:[],
    education:[]
  };

  const {
    control,
    setError,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',

    // resolver: yupResolver(Schema),
  });

  const handleDataSubmit =  (data) => {
    // try {
    //   const userData = await auth.login(data, rememberMe);
    // } catch (error) {
    //   console.error('Login error:', error);
    // }
    console.log("handleDataSubmit",data);

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
        onClick={handleSubmit(handleDataSubmit)}
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
            <Contact defaultValues={defaultValues}  handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller} onDataChange={setContactData} />
          </Box>
          <Box>
            <EmergencyContact handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller} onDataChange={setContactData} />
          </Box>
          <Box>
            <AdditionalFiles handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller} onDataChange={setContactData} />
          </Box>
        </Stack>

        <Stack flex={1} direction={'column'} spacing={2}>
          <Box>
            <Professional onDataChange={setProfessionalData} />
          </Box>
          <Box>
            <Skills handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller} onDataChange={setContactData} />
          </Box>
          <Box>
            <Employment onDataChange={setEmploymentData} />
          </Box>
        </Stack>
      </Stack>


    </>
  );
}
