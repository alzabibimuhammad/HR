import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Box } from '@mui/system'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const CustomDataGrid = ({ rows ,columns }) => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 7 })

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    width:"30%",
    color: theme.palette.text.secondary,
  }));




  const gridStyles = {
    root: {
      '& .MuiDataGrid-columnHeader, & .MuiDataGrid-cell': {
        borderRight: '1px solid #e0e0e0'
      },
      '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#f0f0f0'
      },
      '& .custom-header': {
        backgroundColor: '#fff',
        color: '#000',
        fontWeight: 'bold',
      }
    }
  }

  return (
    <>


            <Box sx={{ height: 500, width: '100%'}}>

            <DataGrid
            columns={columns}
            classes={gridStyles}
            rows={rows}
            pageSizeOptions={[7, 10, 25, 50]}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
    />
            </Box>
    </>
  )
}

export default CustomDataGrid
