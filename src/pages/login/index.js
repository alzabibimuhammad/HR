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
import { useTranslation } from 'react-i18next';

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
  email: 'raneemma934@gmail.com',
  password: 'password',
};

const LoginPage = () => {
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const {t} = useTranslation()
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

      <Grid container spacing={0}  sx={{backgroundColor:"#E9ECF3",}}>
        <Grid item   xs={0}   md={7} sm={7}>

          <Stack className="log" position={"relative"}  width={'100%'} sx={{ height: '100vh',backgroundColor:"#3f4458"}}>
             <Stack width={'100%'} height={'100%'}>
             <Box className="photo" zIndex={"444444444"}  width={'100%'} height={'100%'} marginLeft={"50%"} >
                <Box    sx={{  backgroundImage: `url('/images/loginRectangel.svg')`,backgroundRepeat:"no-repeat",width:"100%",height:"100%" }} ></Box>
              </Box>

            <Box id='photo2' className="photo"  display={'flex'} marginTop={"50px"} justifyContent={'start'} alignItems={'end'} width={'100%'} height={'100%'}>
                <Box   sx={{  backgroundImage: `url('/images/loginRectangleButtom.svg')`,backgroundRepeat:"no-repeat",width:"100%",height:"100%" }} ></Box>
            </Box>
            <Box sx={{position:{sm:"absolute"},left:{sm:"40%"},top:{sm:"44%"}}}>
            <div className="animate__animated animate__backInDown" >
          <img width={200} height={200}  src='/images/policesIcon/pageLogo/logo.svg'/>

              </div>            </Box>
             </Stack>

          </Stack>

        </Grid>

        <Grid sx={{position:"relative",zIndex:"2222222222222222"}} item xs={12} width={{  xs:'50%' }}  sm={5} md={5} display={"flex"} justifyContent={'center'} alignItems={'center'} >
        <form noValidate autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
             <Box >
                <Typography   variant='h3' sx={{ color: '#000',fontSize:"24px",lineHeight: "130%" }}>
                  Hello👋🏻
                </Typography>
                <Typography sx={{ color: '#000000' }}>
                Log in to get started
                 </Typography>
              </Box>
                <Box  sx={{ mt:5,mb: 4 }}>
                  <Controller
                    name='email'
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { value, onChange, onBlur } }) => (
                      <CustomTextField
                        fullWidth
                        sx={{ color:'#8090A7' }}
                        autoFocus
                        label='Email'
                        value={value}
                        onBlur={onBlur}
                        onChange={onChange}
                        placeholder='samy16@gmail.com'
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
                <Box >
                  <Button type='submit' variant='contained' sx={{

                    width: "100%",
                    display: "flex",
                    padding: "15px 0px 16px 0px",
                    height: "52px",
                    alignItems: "center",
                    flexShrink: "0",
                    borderRadius: "8px",
                    background: "#3F4458",
                    justifyContent: "center",

                   }}
                   >
                    Login
                  </Button>
                </Box>
                <div  style={{ height:"300px" ,width:"300px",backgroundImage: `url('/images/image.svg')  `, backgroundPosition: 'no-repeat',backgroundSize: 'cover',}}>

                </div>
              </form>
        </Grid>
      </Grid>


  </>

};

LoginPage.getLayout = (page) => <BlankLayout>{page}</BlankLayout>;
LoginPage.guestGuard = true;

export default LoginPage;
