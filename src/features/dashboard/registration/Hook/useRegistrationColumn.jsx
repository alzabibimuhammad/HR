import { useMemo, useState } from 'react'

import { Avatar, Button, Chip, IconButton, Rating } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/system'

const useRegistrationColumn = () => {
  const { t } = useTranslation()

  return useMemo(() => [


    {
      field: 'first_name',
      headerName: t('first Name'),
      flex: 3
    },

    {
      field: 'last_name',
      headerName: t('Last name'),
      flex: 3
    },
    {
      field: 'department',
      headerName: t('Department'),
      flex: 3
    },
    {
      field: 'status',
      headerName: t('Status'),
      headerAlign: 'center',
      align: 'center',
      flex: 6,
      renderCell: params => {
        return (
          <Chip
            label={t(params?.row?.status)}
            sx={{
              backgroundColor:
                params?.row?.status === 'Arrived'
                  ? 'rgba(145, 196, 131, 0.20)'
                  : params?.row?.status.includes('Late')
                  ? 'rgba(106, 178, 223, 0.20)'
                  : params?.row?.status === 'Out'
                  ? 'rgba(106, 178, 223, 0.20)'
                  : params?.row?.status === 'Absent'
                  ? 'rgba(223, 46, 56, 0.20)'
                  : 'rgba(223, 46, 56, 0.20)',
              color:
                params?.row?.status === 'Arrived'
                  ? '#91C483'
                  : params?.row?.status.includes('Late')
                  ? '#6AB2DF'
                  : params?.row?.status === 'Out'
                  ? '#6AB2DF'
                  : params?.row?.status === 'Absent'
                  ? '#DF2E38'
                  : '#DF2E38',
              fontSize: '12px',
              height: '30px',
              width: 'auto',
              padding: '5px'
            }}
          />
        )
      }
    },

    {
      field: 'checkIn',
      headerName: t('Check in'),
      flex: 3
    },
    {
      field: 'checkOut',
      headerName: t('Check out'),
      flex: 3
    }
  ])
}

export default useRegistrationColumn
