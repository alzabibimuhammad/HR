import * as yup from 'yup'

export const Schema = yup.object().shape({
  first_name: yup.string().required('first_name is required').min(3, ' min 3 char').max(20, '20 max char'),
  middle_name: yup.string().required('middle_name is required').min(3, ' min 3 char').max(20, '20 max char'),
  last_name: yup.string().required('last_name is required').min(3, ' min 3 char').max(20, '20 max char'),
  email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,' email is Invalid'),
   password: yup.string().matches(/^\d{4,8}$/ ,'password is required'),
   confirm_password: yup.string().oneOf([yup.ref('password'), null], 'password in not matches').required(),
   birth_date: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/,'Date of registration is required exampe:2020-02-06'),
   nationalID: yup.number().integer().positive().min(10000000000).max(99999999999).required(),
   military_situation: yup.string().required(),
   social_situation: yup.string().required(),
   address: yup.string().required(),
   phoneNumbers: yup.string().matches(/^09\d{8}$/, 'رقم الهاتف السوري غير صحيح').required(),
  emergencycontact: yup.array().of(
    yup.object().shape({
      address: yup.string().required(),
      name: yup.string().required(),
      phonenumber: yup.string().matches(/^09\d{8}$/, 'رقم الهاتف السوري غير صحيح').required(),
      email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,' email is Invalid'),
    })
  ).required(),

  additionalfiles: yup.array().of(
    yup.object().shape({
      description: yup.string().required(),

    })
  ).required(),

  education: yup.array().of(
    yup.object().shape({
      study: yup.string().required(),

    })
  ).required(),

  certificate: yup.array().of(
    yup.object().shape({
      certificate: yup.string().required(),

    })
  ).required(),

  experience: yup.array().of(
    yup.object().shape({
      experience: yup.string().required(),

    })
  ).required(),

  skills: yup.array().of(
    yup.object().shape({
      skills: yup.string().required(),
      rating: yup.string().required(),

    })
  ).required(),

  languages: yup.array().of(
    yup.object().shape({
      languages: yup.string().required(),
      rating: yup.string().required(),

    })
  ).required(),
  salary:yup.number(),
  secretariats: yup.array().of(
    yup.object().shape({
      secretariats: yup.string().required(),
      deliveryDate: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/,'Date of registration is required exampe:2020-02-06'),

    })
  ).required(),
  phoneNumbers: yup.array().of(
    yup.object().shape({
      number: yup.string().matches(/^09\d{8}$/, 'رقم الهاتف السوري غير صحيح').required(),

    })
  ).required(),
  email: yup.array().of(
    yup.object().shape({
      email: yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,' email is Invalid'),

    })
  ).required(),

  contact: yup.array().of(
    yup.object().shape({
      address: yup.string().required('Address is required'),
      phoneNumbers: yup.array().of(
        yup.object().shape({
          number: yup.string().matches(/^09\d{8}$/, 'Invalid Syrian phone number').required('Phone number is required'),
        })
      ).required('At least one phone number is required'),
      email: yup.array().of(
        yup.object().shape({
          email: yup.string().email('Invalid email address').required('Email is required'),
        })
      ).required('At least one email is required'),
    })
  ).required('At least one contact is required'),



});

 // finance: yup.string().required('wallet is required')

