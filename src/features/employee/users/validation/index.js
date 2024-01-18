import * as yup from 'yup'

export const Schema = yup.object().shape({
  name: yup.string().required('name is required').min(3, ' min 3 char').max(20, '20 max char'),
  birthDate: yup.string().required('Date of registration is required'),

  // password: yup.string().matches(/^(?=.*\d).{4,8}$/ ,'password is required'),

  phoneNumber: yup.string().matches(/^\+?09\d{8}$/, 'Invalid Syrian phone number'),

  finance: yup.string().required('wallet is required')
})
