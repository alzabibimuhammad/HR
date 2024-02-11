
import { Button, Card, CardContent, MenuItem, Rating, TextField, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import { useState } from 'react';
import Avatar from 'src/@core/components/mui/avatar';
import { useFieldArray, useForm, Controller } from 'react-hook-form';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';
import AttachmentIcon from '@mui/icons-material/Attachment';
export default function Employment({onDataChange,Controller,control,errors}) {
  const [contract, setContract] = useState(null);
  const {t} = useTranslation()
  const date = new Date();

  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;


  const handleFieldChange = (field, value) => {
    onDataChange(prevData => ({ ...prevData, [field]: value }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setContract(reader.result);
        onDataChange("contract"+reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const { fields, append, remove } = useFieldArray({
    control,
    name: "secretaraits"
  });

  const handleAddClick = () => {
   append('secretaraits', { object: '', delivery_date: '' });
   };

   const handleRemoveClick = (index) => {
     remove(index);
   };


   useEffect(()=>{
    append('secretaraits', { object: '', delivery_date: '' });


  },[append])



  const SvgDate = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M14.1667 2.5L14.1667 5.83333" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M5.83325 2.5L5.83325 5.83333" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M2.5 9C2.5 7.11438 2.5 6.17157 3.08579 5.58579C3.67157 5 4.61438 5 6.5 5H13.5C15.3856 5 16.3284 5 16.9142 5.58579C17.5 6.17157 17.5 7.11438 17.5 9V9.16667H2.5V9Z" stroke="#8090A7" stroke-width="1.2"/>
  <rect x="2.5" y="5" width="15" height="12.5" rx="2" stroke="#8090A7" stroke-width="1.2"/>
  <path d="M5 12.5H8.33333" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M11.6667 12.5H15.0001" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M5 15H8.33333" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
  <path d="M11.6667 15H15.0001" stroke="#8090A7" stroke-width="1.2" stroke-linecap="round"/>
</svg>
  `;

  const SvgSalary = `
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.7174 9.32258C9.0164 8.76422 8.53878 7.77972 8.6468 7.10564C8.74426 6.49514 9.3541 5.87826 10.4952 5.87826C11.9644 5.87826 12.2748 7.27086 12.3056 7.43498C12.3751 7.82218 12.7623 8.0721 13.13 8.01072C13.5185 7.94252 13.7402 7.5727 13.6723 7.18506C13.5251 6.34554 12.8609 4.84228 11.1009 4.51602V3.28138C11.1009 2.88736 10.8349 2.56836 10.4409 2.56836C10.0467 2.56836 9.7809 2.88736 9.7809 3.28138V4.52042C8.4609 4.76748 7.44824 5.66926 7.25486 6.8808C7.05862 8.1084 7.7272 9.83914 10.281 10.6773C11.6238 11.1182 12.3512 11.8242 12.2328 12.5678C12.1312 13.2069 11.359 13.8698 10.2464 13.8698C8.34012 13.8698 8.20328 12.8322 8.1958 12.6373C8.1958 12.2433 7.87658 11.9245 7.48234 11.9245C7.08832 11.9245 6.78516 12.2433 6.78516 12.6373C6.78516 13.4986 7.3609 15.08 9.7809 15.2756V16.2772C9.7809 16.6715 10.0467 16.9902 10.4409 16.9902C10.8349 16.9902 11.1009 16.6715 11.1009 16.2772V15.186C12.4209 14.878 13.4155 13.9507 13.5997 12.7918C13.6903 12.2321 13.7801 10.3264 10.7174 9.32258Z" fill="#8090A7"/>
</svg>`;

  return (
    <Card>
        <CardContent>

          <Typography >{t("Employment")}</Typography>
          <br/>

          <Stack direction={'column'} spacing={3} width={'100%'} >
              <Typography>{t("Salary")}</Typography>

              <Controller
                name={`salary`}
                control={control}
                render={({ field }) => (
                  <TextField
                  {...field}
                fullWidth
                error={Boolean(errors.salary)}
                {...(errors.salary && { helperText: errors.salary.message })}

                size='small'
                label={
                  <Stack direction={'row'} spacing={2}  >
                    <Box>
                    <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgSalary)}`}/>
                      </Box>
                      <Box>
                        {t('Salary')}
                    </Box>
                    <Box width={'100%'} >
                      <Typography sx={{ marginLeft:'410px' }} >s.p</Typography>
                    </Box>
                  </Stack>
                }
              />
                )}
                />







              <Box sx={{display:"flex",alignItems:"center",gap:"16px"}}>
              <Typography>{t("Contract")}</Typography>
              <Box>
      <label htmlFor="contractInput" style={{padding:"2px",cursor:"pointer"}}>
        <Stack spacing={1}  direction={'row'} justifyContent={'center'} >
          <Typography>
        {t("choose file")}
        </Typography>
          <AttachmentIcon/>
        </Stack>
      </label>

     <Controller
                name={`contract`}
                control={control}
                render={({ field }) => (
                  <TextField
                  {...field}
        id="contractInput"
        type="file"
        accept="contract/*"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
                )}
                />
    </Box>
    {contract?.slice(17,27)}

    </Box>






              <Typography>{t("Secretariats")}</Typography>
              {fields.map((field, index) => (
  <Stack direction={"column"} spacing={4} key={index}>
    {index === 1 && (
      <CloseIcon
        sx={{ cursor: 'pointer', '&:hover': { color: 'red' } }}
        onClick={() => handleRemoveClick(index)}
      />
    )}
    <Box>
      <Controller
        name={`secretaraits[${index}].object`}
        control={control}
        defaultValue={field.secretariats}
        render={({ field }) => (
          <TextField
          error={Boolean(errors?.secretariats?.[index]?.object)}
          {...(errors?.secretariats?.[index]?.object && { helperText: errors?.secretariats?.[index]?.object.message })}
            {...field}
            fullWidth
            size='small'
            placeholder={t('Secretariats')}
          />
        )}
      />
    </Box>

    <Controller
      name={`secretaraits[${index}].delivery_date`}
      control={control}
      defaultValue={field.deliveryDate}
      render={({ field }) => (
        <TextField
          {...field}
          fullWidth
          error={Boolean(errors?.secretariats?.[index]?.delivery_date)}
          {...(errors?.secretariats?.[index]?.delivery_date && { helperText: errors?.secretariats?.[index]?.delivery_date.message })}
          size='small'
          label={
            <Stack direction={'row'} spacing={2}>
              <Box>
                <img src={`data:image/svg+xml;utf8,${encodeURIComponent(SvgDate)}`} />
              </Box>
              <Box>
                {t('Delivery Date')} {formattedDate}
              </Box>
            </Stack>
          }
        />
      )}
    />
  </Stack>
))}


<Typography sx={{cursor:"pointer",width:"20%",}} color="primary" onClick={handleAddClick}>
{t("Add Secretariats")}
          </Typography>

          </Stack>
        </CardContent>
    </Card>

  )
}
