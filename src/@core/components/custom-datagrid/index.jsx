import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';

const CustomDataGrid = ({ rows, columns, show,rowHeight }) => {

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: show });

  useEffect(() => {
    setPaginationModel(prevModel => ({
      ...prevModel,
      pageSize: show
    }));
  }, [show]);

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
  };

  return (
    <>
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid
          columns={columns}
          classes={gridStyles.root}
          rows={rows || []}
          pageSizeOptions={[7, 10, 25, 50]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowHeight={rowHeight}
        />
      </Box>
    </>
  );
};

export default CustomDataGrid;
