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
import { useFieldArray} from 'react-hook-form';
import EmergencyContact from 'src/features/employee/add/Componets/emergenc-contact';
import AdditionalFiles from 'src/features/employee/add/Componets/additional-fils';
import { Schema } from './validation';
import { useAddUsers } from './hook/useAddUsers';

export default function Add() {
  const [snapshotData, setSnapshotData] = useState({});
  const [accountData, setAccountData] = useState({});
  const [infoData, setInfoData] = useState({});
  const [contactData, setContactData] = useState({});
  const [professionalData, setProfessionalData] = useState({});
  const [skillsData, setSkillsData] = useState({});
  const [employmentData, setEmploymentData] = useState({});
  const [AdditionalFilesData, setAdditionalFilesData] = useState({});
  const [EmergencyContactData, setEmergencyContacttData] = useState({});
  const [ProfileImage,setProfileImage] = useState();




  const { mutate: addUsers, isLoading } = useAddUsers();







  const handleFieldChange = (field, value) => {
    onDataChange((prevData) => ({ ...prevData, [field]: value }));
  };



  const defaultValues = {
     first_name:"",

     contact:{
      phonenumbers:[],
      emails:[]
    },
     middle_name:"",

     last_name:"",

     email: "",
     role:"admin"


  };

  const {
    control,
    setError,
    handleSubmit,
    getValues,
    setValue,
    register,
    formState: { errors, },
  } = useForm({
    defaultValues,
    mode: 'onBlur',

    //  resolver: yupResolver(Schema),
  });

 const handleDataSubmit =  (data) => {
    try {
      const formData = new FormData();
      formData.append('image',ProfileImage)

      data.image = ProfileImage;

      console.log("🚀 ~ handleDataSubmit ~ image:", formData)
      addUsers(data)

    } catch (error) {

    }


 };

  //  const handleDataSubmit = async (data) => {
  //      try {
  //      const formData = new FormData();

      //  formData.append('path', files[0]);
      // formData.append('startTime', data.startTime);
      //  formData.append('endTime', data.endTime);
      //  formData.append('user_id', data.user_id);
      //  formData.append('first_name', data.first_name);
      //  formData.append('first_name', data.middle_name);

      // addUsers(formData)
//  }
     //   catch (error) {
    //    }
    // }



  const handleRatingChange = (index, newValue) => {
    const updatedSkills = [...getValues('skills')];
    updatedSkills[index].rate = newValue;
    setValue('skills', updatedSkills);
  };

  const handleLanguageChange = (index, newValue) => {
    const updatedLanguages = [...getValues('languages')];
    updatedLanguages[index].rate = newValue;
    setValue('languages', updatedLanguages);
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
            <Snapshot
           onDataChange={setSnapshotData}
           errors={errors}
           defaultValues={defaultValues}
           setError={setError}
           control={control}
              Controller={Controller}
              setProfileImage={setProfileImage}
              />
          </Box>
          <Box>
            <Account errors={errors} onDataChange={setAccountData} setError={setError} control={control} Controller={Controller}/>
          </Box>
          <Box>
            <Info errors={errors} onDataChange={setInfoData} setError={setError} control={control} Controller={Controller}/>
          </Box>
          <Box>
            <Contact errors={errors} defaultValues={defaultValues}  handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller} onDataChange={setContactData} />
          </Box>
          <Box>
            <EmergencyContact errors={errors} handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller} onDataChange={setEmergencyContacttData} />
          </Box>
          <Box>
            <AdditionalFiles errors={errors} handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller} onDataChange={setAdditionalFilesData} />
          </Box>
        </Stack>

        <Stack flex={1} direction={'column'} spacing={2}>
          <Box>
            <Professional onDataChange={setProfessionalData}setError={setError} control={control} Controller={Controller} />
          </Box>
          <Box>
            <Skills errors={errors} handleLanguageChange={handleLanguageChange} handleRatingChange={handleRatingChange} handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller} onDataChange={setSkillsData} />
          </Box>
          <Box>
            <Employment errors={errors} onDataChange={setEmploymentData}  handleFieldChange={handleFieldChange}  setError={setError} control={control} Controller={Controller}/>
          </Box>
        </Stack>
      </Stack>


    </>
  );
}
