import * as yup from 'yup'





export const Schema = yup.object().shape({
  first_name: yup.string().required('first_name is required').min(3, ' min 3 char').max(20, '20 max char'),
  middle_name: yup.string().required('middle_name is required').min(3, ' min 3 char').max(20, '20 max char'),
  last_name: yup.string().required('last_name is required').min(3, ' min 3 char').max(20, '20 max char'),
  email: yup.string().email('Invalid email address').required('Email is required'),

  password: yup
    .string()
    .required('Password is required')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 'Password must contain at least 8 characters, one letter, and one number'),
  confirm_password: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),


   birth_date: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/,'Date of registration is required exampe:2020-02-06'),
   nationalID: yup.string()
   .matches(/^\d{11}$/, 'ID Number must be exactly 11 digits')
   .required('ID Number is required'),   military_situation: yup.string().required(),
   social_situation: yup.string().required(),
   address: yup.string().required(),



   contacts: yup.object().shape({

    phonenumbers: yup.array().of(
      yup.object().shape({
      phone:yup.string().matches(/^09\d{8}$/, 'Invalid Syrian phone number').required('Phone number is required')
    })),

    emails:yup.array().of(
      yup.object().shape({
        email:yup.string().email('Invalid email address').required('Email is required')
      }))

  }),

  birth_date: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Valid date format required Examp : 2020-12-12'),



  emergency_contact: yup.array().of(
    yup.object().shape({
      name: yup.string().required('Name is required'),
      phonenumber: yup.string().matches(/^09\d{8}$/, 'Invalid Syrian phone number').required('Phone Number is required'),
      email: yup.string().email('Invalid email address').required('Email is required'),
    })
  ),

  additionalfiles: yup.array().of(
    yup.object().shape({
      description: yup.string().required('Description is required'),
      file: yup.mixed().required('File is required'),
    })
  ),



  specialization: yup.string().required('Specialization is required'),
  level: yup.string().required('Level is required'),
  department_id: yup.string().required('Department is required'),
  branch_id: yup.string().required('Branch is required'),



  experiences: yup.array().of(
    yup.string().required('Experience is required')
  ),

  certificates: yup.array().of(
    yup.string().required('Certificates is required')
  ),


  educations: yup.array().of(
    yup.object().shape({
      study: yup.string().required('Study is required'),
      degree: yup.string().oneOf(['Degree', 'bachelor', 'master', 'phd'], 'Invalid degree').required('Degree is required'),
    })
  ),



  //  experience: yup.array().of(yup.string().required('Experience is a required field')),


//   skills: yup.array().of(
//     yup.object().shape({
//         skills: yup.string().required('Skills is required'),
//         rating: yup
//             .number()
//             .required('Rating is required')
//             .integer('Rating must be an integer')
//             .min(1, 'Rating must be at least 1')
//             .max(5, 'Rating must be at most 5'),
//     })
// ).required('Skills are required'),




// languages: yup.array().of(
//   yup.object().shape({
//       languages: yup.string().required('Language is required'),
//       rating: yup.number().required('Rating is required').min(1, 'Rating must be at least 1').max(5, 'Rating must be at most 5'),
//   })
// ),
  salary: yup.number().required('Salary is required'),

  secretariats: yup.array().of(
    yup.object().shape({
      object: yup.string().required('Object is required'),
      delivery_date: yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Valid date format required Examp : 2020-12-12'),

    })
  ),



});

 // finance: yup.string().required('wallet is required')

