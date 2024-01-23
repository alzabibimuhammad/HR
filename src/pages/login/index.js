import { useState } from 'react';
import Link from 'next/link';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box, Stack } from '@mui/system'
import { styled, useTheme } from '@mui/material/styles';
import InputAdornment from '@mui/material/InputAdornment';
import MuiFormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField'; // Import TextField from MUI
import Icon from 'src/@core/components/icon';
import * as yup from 'yup';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSettings } from 'src/@core/hooks/useSettings';
import BlankLayout from 'src/@core/layouts/BlankLayout';
import { useAuth } from 'src/hooks/useAuth';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: `${theme.palette.primary.main} `,
}));

const FormControlLabel = styled(MuiFormControlLabel)(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    color: 'rgba(200,200,200,0.7)',
  },
}));

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(5).required(),
});

const defaultValues = {
  email: 'samy156@gmail.com',
  password: 'password',
};

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // ** Hooks
  const auth = useAuth();
  const theme = useTheme();
  const { settings } = useSettings();


  const {
    control,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const userData = await auth.login(data, rememberMe);
    } catch (error) {
    }
  };

  const CustomTextField = styled(TextField)({
    '& .MuiInputBase-input': {
      color: '#8090A7',
    },
    '& label': {
      color: '#8090A7s',
    },

  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return <>

      <Grid container spacing={0} columns={20} sx={{backgroundColor:"#E9ECF3",}}>
        <Grid item xs={12}>
          <Item sx={{ height: '100vh',backgroundColor:"#3f4458",position:"relative"}}>
              <Box sx={{  backgroundImage: `url('/images/Rectangle.svg')`,backgroundRepeat:"no-repeat",width:"30%",height:"30%",position:"absolute",left:"72.8%",top:"3%", transform: "rotate(-90deg)" }} ></Box>
              <Box sx={{  backgroundImage: `url('/images/Rectangle.svg')`,backgroundRepeat:"no-repeat",width:"30%",height:"30%",position:"absolute",left:"72.8%",top:"-10%", transform: "rotate(-92deg)" }} ></Box>
              <Box sx={{  backgroundImage: `url('/images/Rectangle.svg')`,backgroundRepeat:"no-repeat",width:"30%",height:"30%",position:"absolute",bottom:"-12.8%", left:"-3%",transform: "rotate(70deg)" }} ></Box>
              <Box sx={{  backgroundImage: `url('/images/Rectangle.svg')`,backgroundRepeat:"no-repeat",width:"30%",height:"30%",position:"absolute",bottom:"-1.8%", left:"-2%",transform: "rotate(70deg)" }} ></Box>

          </Item>
        </Grid>

        <Grid item xs={7} display={"flex"} direction={"row"} sx={{marginLeft:'5%',marginTop:'6.3%'}}  >
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
             <Box sx={{ my: 6,  }}>
                <Typography variant='h3' sx={{ color: '#000',fontSize:"24px",lineHeight: "130%" }}>
                  {`Hello! 👋🏻`}
                </Typography>
                <Typography sx={{ color: '#000000' }}>
                Log in to get started
                 </Typography>
              </Box>
                <Box sx={{ mb: 4,  }}>
                  <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        fullWidth
                        sx={{ color:'#8090A7' }}
                        autoFocus
                        label='email'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
<<<<<<< HEAD
                        placeholder=''
=======
                        placeholder='samy16@gmail.com'
>>>>>>> 4a81c8b5a9fd5b9d8b7beafb87cc015fd480857c
                        error={Boolean(errors.email)}
                        {...(errors.email && { helperText: errors.email.message })}
                      />
                    )}
                  />
                </Box>
                <Box sx={{ mb: 1.5 }}>
                  <Controller
                    name='password'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        fullWidth
                        value={value}
                        onBlur={onBlur}
                        label='Password'
                        onChange={onChange}
                        id='auth-login-v2-password'
                        error={Boolean(errors.password)}
                        {...(errors.password && { helperText: errors.password.message })}
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position='end'>
                              <IconButton
                                edge='end'
                                onMouseDown={(e) => e.preventDefault()}
                                onClick={() => setShowPassword(!showPassword)}
                              >
                                <Icon fontSize='1.25rem' icon={showPassword ? 'tabler:eye' : 'tabler:eye-off'} />
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Box>
                <Box
                  sx={{
                    mb: 1.75,
                    textAlign:"end"
                  }}
                >



                  <Typography component={LinkStyled} href='/forgot-password' sx={{ color: '#3F4458',fontSize:"14px",fontWeight: "400",lineHeight: "130%" }}>
                    Forgot Password?
                  </Typography>
                </Box>
                <Box sx={{ }}>
                  <Button type='submit' variant='contained' sx={{

                    width: "360px",
                    display: "flex",
                    padding: "15px 0px 16px 0px",
                    height: "52px",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "8px",
                    background: "#3F4458",
                    justifyContent: "center",
                   }}>
                    Login
                  </Button>
                </Box>
                <Box sx={{ height:"300px" ,width:"300px",backgroundImage: `url('/images/image.svg')  `, backgroundPosition: 'no-repeat',backgroundSize: 'cover',}}>

                </Box>
              </form>
        </Grid>
      </Grid>


  </>

};

LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
LoginPage.guestGuard = true;

export default LoginPage;
