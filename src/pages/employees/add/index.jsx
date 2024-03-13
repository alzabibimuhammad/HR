import React, { useEffect, useState } from 'react'
import { Button, CircularProgress, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import Account from 'src/features/employee/add/Componets/Account'
import Contact from 'src/features/employee/add/Componets/Contact'
import Employment from 'src/features/employee/add/Componets/Employment'
import Info from 'src/features/employee/add/Componets/Personal Info'
import Professional from 'src/features/employee/add/Componets/Professional'
import Skills from 'src/features/employee/add/Componets/Skills'
import Snapshot from 'src/features/employee/add/Componets/Snapshot'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useFieldArray } from 'react-hook-form'
import EmergencyContact from 'src/features/employee/add/Componets/emergenc-contact'
import AdditionalFiles from 'src/features/employee/add/Componets/additional-fils'
import { Schema } from './validation'
import { useAddUsers } from './hook/useAddUsers'
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next'
import { showErrorToast } from 'src/utiltis/showErrorToast'
import { useRouter } from 'next/router'
import useGetUser from './hook/useGetUser'
import { useEditUsers } from './hook/useEditUserTotal'

export default function Add() {
  const [snapshotData, setSnapshotData] = useState({})
  const [accountData, setAccountData] = useState({})
  const [infoData, setInfoData] = useState({})
  const [contactData, setContactData] = useState({})
  const [professionalData, setProfessionalData] = useState({})
  const [skillsData, setSkillsData] = useState({})
  const [employmentData, setEmploymentData] = useState({})
  const [AdditionalFilesData, setAdditionalFilesData] = useState({})
  const [EmergencyContactData, setEmergencyContacttData] = useState({})
  const [ProfileImage, setProfileImage] = useState()
  const { t } = useTranslation()

  const { mutate: addUsers, } = useAddUsers()

  const { mutate: EditUsers, } = useEditUsers()

  const router = useRouter();
  let { user_id } = router.query;


  const { data: ShowUser, isLoading, } = useGetUser(user_id)


  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }))
  }

  ShowUser?.data?.data?.[0]?.deposits?.forEach((element,key) => {
    element.object = element?.description
    element.delivery_date = element?.received_date
  });



  const phonenumbers=  ShowUser?.data?.data?.[0]?.my_contacts.map(contact => ({ phone: contact.phone_num }))

 const defaultValues = {
          first_name: ShowUser?.data?.data[0]?.first_name||"",
          middle_name: ShowUser?.data?.data[0]?.middle_name||"",
          last_name: ShowUser?.data?.data[0]?.last_name||"",
          email: ShowUser?.data?.data[0]?.email||"",
          birth_date: ShowUser?.data?.data[0]?.user_info?.birth_date||"",
          nationalID: ShowUser?.data?.data[0]?.user_info?.nationalID||"",
          health_status: ShowUser?.data?.data[0]?.user_info?.health_status||"",
          gender: ShowUser?.data?.data[0]?.user_info?.gender||"",
          military_situation: ShowUser?.data?.data[0]?.user_info?.military_situation||"Exempt",
          level: ShowUser?.data?.data[0]?.user_info?.level||"",
          social_situation: ShowUser?.data?.data[0]?.user_info?.social_situation||"",
          health_status: ShowUser?.data?.data[0]?.user_info?.health_status||"",
          salary: ShowUser?.data?.data[0]?.user_info?.salary||"",
          address: ShowUser?.data?.data[0]?.address||"",
          specialization: ShowUser?.data?.data[0]?.specialization||"",
          branch_id: ShowUser?.data?.data[0]?.branch_id||"",
          contacts: {
            emails: ShowUser?.data?.data[0]?.emails || [{ email: '' }],
            phonenumbers: ShowUser?.data?.data[0]?.phone_number || [{ phone: '' }],
          },
          skills: ShowUser?.data?.data[0]?.skills||[
            { skills: '', rate:''  }
          ],
          educations: ShowUser?.data?.data[0]?.study_situations||[{ study: '', degree: '' }],
          degree: ShowUser?.data?.data[0]?.study_situations?.degree||"",

          languages: ShowUser?.data?.data[0]?.languages||[{ languages: '',rate:"" }],

          experiences:ShowUser?.data?.data[0]?.careers||[{ experience: '' }],
          certificates:ShowUser?.data?.data[0]?.certificates||[{content:''}],
          secretaraits:ShowUser?.data?.data[0]?.deposits||[{object:"",delivery_date:""}],
          emergency_contact:ShowUser?.data?.data[0]?.emergency,
          role:ShowUser?.data?.data[0]?.role
        }












        const {
          control,
          setError,
          handleSubmit,
          getValues,
          setValue,
          register,
          watch,
          reset,
          formState: { errors }
        } = useForm({
          defaultValues,
          mode: 'onBlur',
          resolver: Boolean(ShowUser?.data?.data?.length) ? undefined :yupResolver(Schema) ,
        });


  const handleDataSubmit = data => {
  console.log("🚀 ~ handleDataSubmit ~ data:", data)



      const formData = new FormData()
      formData.append('image', ProfileImage)

      data.image = ProfileImage

      addUsers(data)



}

const handleDataEditSubmit = data => {



  const formData = new FormData()
  formData.append('image', ProfileImage)

  data.image = ProfileImage

  EditUsers({id:user_id,data:data})



}


  const handleRatingChange = (index, newValue) => {
    const updatedSkills = [...getValues('skills')]
    updatedSkills[index].rate = newValue
    setValue('skills', updatedSkills)
  }

  const handleLanguageChange = (index, newValue) => {
    const updatedLanguages = [...getValues('languages')]
    updatedLanguages[index].rate = newValue
    setValue('languages', updatedLanguages)
  }


  useEffect(() => {


      Object.entries(defaultValues).forEach(([field, value]) => {
      setValue(field, value);

      });




  }, [ShowUser]);





  if (isLoading) {
    return <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%'}}><CircularProgress/></div>;
}



return (
  <>


        <Box width={'100%'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <p className='Pagetitle'>
        {ShowUser.data.data.length === 0 ? t("Add Employee") : t("Edit Employee")}
      </p>
          <Button
            type='submit'
            sx={{
              backgroundColor: '#6AB2DF',
              color: '#fff',
              ':hover': { color: '#fff', backgroundColor: '#2A4759' }
            }}
            onClick={handleSubmit(ShowUser.data.data.length === 0 ? handleDataSubmit : handleDataEditSubmit)}
          >
            <Stack direction={'row'}>
              <AddIcon />
              <Typography color={'inherit'}>
                {ShowUser.data.data.length === 0 ? t("Add Employee") : t("Edit Employee")}
              </Typography>
            </Stack>
          </Button>
        </Box>
        <Stack marginTop={'1%'} direction={{ sm: 'row', xs: 'column' }} spacing={8}>
          <Stack spacing={8} width={{ sm: '50%' }} direction={{ sm: 'column', xs: 'column' }}>
            <Box>
              <Snapshot
                onDataChange={setSnapshotData}
                errors={errors}
                defaultValues={defaultValues}
                setError={setError}
                control={control}
                Controller={Controller}
                setProfileImage={setProfileImage}
                ShowUser={ShowUser}
              />
            </Box>
            <Box>
              <Account
                errors={errors}
                onDataChange={setAccountData}
                setError={setError}
                defaultValues={defaultValues}
                control={control}
                Controller={Controller}
                watch={watch}
                register={register}
                ShowUser={ShowUser}
              />
            </Box>
            <Box>
              <Info
                errors={errors}
                onDataChange={setInfoData}
                defaultValues={defaultValues}
                setError={setError}
                control={control}
                Controller={Controller}
                passwordValue={getValues('password')}
                ShowUser={ShowUser}

              />
            </Box>
            <Box>
              <Contact
                errors={errors}
                defaultValues={defaultValues}
                handleFieldChange={handleFieldChange}
                setError={setError}
                control={control}
                Controller={Controller}
                onDataChange={setContactData}
              />
            </Box>
            <Box>
              <EmergencyContact
                errors={errors}
                handleFieldChange={handleFieldChange}
                setError={setError}
                control={control}
                Controller={Controller}
                onDataChange={setEmergencyContacttData}
              />
            </Box>
            <Box>
              <AdditionalFiles
                errors={errors}
                handleFieldChange={handleFieldChange}
                setError={setError}
                control={control}
                Controller={Controller}
                onDataChange={setAdditionalFilesData}
              />
            </Box>
          </Stack>


          <Stack flex={1} direction={'column'} spacing={8}>
              <Box>
                <Professional
                  onDataChange={setProfessionalData}
                  setError={setError}
                  control={control}
                  Controller={Controller}
                  errors={errors}
                  ShowUser={ShowUser}

                />
              </Box>
              <Box>
                <Skills
                  errors={errors}
                  handleLanguageChange={handleLanguageChange}
                  handleRatingChange={handleRatingChange}
                  handleFieldChange={handleFieldChange}
                  setError={setError}
                  control={control}
                  Controller={Controller}
                  onDataChange={setSkillsData}
                  ShowUser={ShowUser}
                />
              </Box>
              <Box>
                <Employment
                  errors={errors}
                  onDataChange={setEmploymentData}
                  handleFieldChange={handleFieldChange}
                  setError={setError}
                  control={control}
                  Controller={Controller}
                  ShowUser={ShowUser}
                />
              </Box>
            </Stack>
          </Stack>



    </>

  )
}
