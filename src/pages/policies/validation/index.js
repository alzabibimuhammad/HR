import * as yup from 'yup'





export const Schema = yup.object().shape({
  work_time: yup.object().shape({
    start_time: yup.string().required('Start time is required'),
    cut_off_time: yup.string().required('Cut-off time is required'),
    end_time: yup.string().required('End time is required'),
  }),


  annual_salary_increase: yup.object().shape({
    annual_salary_percentage: yup
      .number()
      .typeError('Please enter a valid percentage') // Displayed for non-numeric values
      .min(0, 'Percentage must be greater than or equal to 0')
      .max(100, 'Percentage must be less than or equal to 100')
      .required('Annual salary percentage is required'),
  }),




});

