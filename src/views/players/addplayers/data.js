import { width } from '@mui/system'
import Typography from '@mui/material/Typography'
import Box from '@mui/system/Box'

export const rows = [
  {
    id: 1,
    name: 'Abood',
    email: 'rahmonn@gmail.com',
    age: 24,
    phone: '0951332060',
    access: 'Admin'
  },
  {
    id: 2,
    name: 'Abood',
    email: 'rahmonn@gmail.com',
    age: 623,
    phone: '0951332060',
    access: 'Admin'
  },
  {
    id: 3,
    name: 'dani',
    email: 'rahmonn@gmail.com',
    age: 32,
    phone: '0951332060',
    access: 'coach'
  },
  {
    id: 4,
    name: 'dani',
    email: 'rahmonn@gmail.com',
    age: 254,
    phone: '0951332060',
    access: 'coach'
  }
]

export const columns = [
  { field: 'id', headerName: 'ID', width: 33, align: 'center', headerAlign: 'center' },
  { field: 'name', headerName: 'Name', align: 'center', headerAlign: 'center', flex: 1 },
  { field: 'email', headerName: 'Email', align: 'center', headerAlign: 'center', flex: 1 },
  { field: 'age', headerName: 'Age', align: 'center', headerAlign: 'center', flex: 1 },
  { field: 'phone', headerName: 'Phone', align: 'center', headerAlign: 'center', flex: 1 },
  {
    field: 'access',
    headerName: 'Access',
    align: 'center',
    headerAlign: 'center',
    flex: 1,
    renderCell: () => {
      return (
        <Box>
          <Typography variant='body1'>Admin</Typography>
        </Box>
      )
    }
  }
]
