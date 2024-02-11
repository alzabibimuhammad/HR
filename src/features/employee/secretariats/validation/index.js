import * as yup from 'yup'

const dateRegex = /^\d{4}-\d{2}-\d{2}$/

export const Schema = yup.object().shape({
  description: yup.string().required('Description is required'),
  received_date: yup
    .string()
    .required('Date of registration is required')
    .matches(dateRegex, 'Date format should be YYYY-MM-DD')
})
