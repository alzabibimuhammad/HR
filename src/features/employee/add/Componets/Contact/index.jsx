import React from 'react';
import { Button, Card, CardContent, TextField, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import { useFieldArray, Controller, useForm } from 'react-hook-form';
import { styled } from '@mui/material/styles';

export default function Contact({ onDataChange, Controller, control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contact', // Name of the array field
  });

  const isFirstInput = fields.length === 1;

  const CustomTextField = styled(TextField)({
    '& .MuiInputBase-input': {
      color: '#8090A7',
    },
    '& label': {
      color: '#8090A7',
    },
  });

  React.useEffect(() => {
    append({  phoneNumbers: [{ number: '' }], email: [{ email: '' }] });
  }, [append]);

  return (
    <Card>
      <CardContent>
        <Typography>Contact</Typography>
        <br />

        <Stack sx={{ padding: '0' }} direction={'column'} spacing={2} width={'100%'}>
          {fields.map((contact, contactIndex) => (
            <Box key={contact.id}>
              <Box sx={{ margin: '5px 0px' }}>
                <Controller
                  name={`contact.${contactIndex}.address`}
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={`Address`}
                      variant="outlined"
                      fullWidth
                      size="small"
                      error={Boolean(errors?.contact?.[contactIndex]?.address)}
                      {...(errors?.contact?.[contactIndex]?.address && {
                        helperText: errors?.contact?.[contactIndex]?.address.message,
                      })}
                    />
                  )}
                />
              </Box>
              {contact.phoneNumbers?.map((phoneNumber, index) => (
                <Box key={index}>
                  <Controller
                    name={`contact.${contactIndex}.phoneNumbers.${index}.number`}
                    control={control}
                    defaultValue={phoneNumber.number}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={`Phone Number ${index + 1}`}
                        variant="outlined"
                        fullWidth
                        size="small"
                        error={Boolean(
                          errors?.contact?.[contactIndex]?.phoneNumbers?.[index]?.number
                        )}
                        {...(errors?.contact?.[contactIndex]?.phoneNumbers?.[index]?.number && {
                          helperText:
                            errors?.contact?.[contactIndex]?.phoneNumbers?.[index]?.number.message,
                        })


                      }

                      />

                    )

                  }

                  />

                <Button
                        type="button"
                        onClick={() =>
                          append({
                            phoneNumbers: [{ number: '' }],
                          })
                        }
                        sx={{
                          fontSize: '12px',
                          fontWeight: '400',
                          color: '#6ab2df',
                          padding: '0',
                        }}
                      >
                        Add PhoneNumber
                      </Button>
                </Box>
              ))}
              {contact.email?.map((email, index) => (
                <Box key={index}>
                  <Controller
                    name={`contact.${contactIndex}.email.${index}.email`}
                    control={control}
                    defaultValue={email.email}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label={`Email ${index + 1}`}
                        variant="outlined"
                        fullWidth
                        size="small"
                        error={Boolean(errors?.contact?.[contactIndex]?.email?.[index]?.email)}
                        {...(errors?.contact?.[contactIndex]?.email?.[index]?.email && {
                          helperText:
                            errors?.contact?.[contactIndex]?.email?.[index]?.email.message,
                        })}
                      />
                    )}
                  />

                </Box>
              ))}
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
