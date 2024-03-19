import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/system';



const CustomDataGrid = ({ rows, columns, show, rowHeight }) => {

  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: show });

  useEffect(() => {
    setPaginationModel(prevModel => ({
      ...prevModel,
      pageSize: show
    }));
  }, [show]);



  return (
    <>
      <Box sx={{ height: 500, width: '100%'}}>
        <DataGrid

          columns={columns}
          rows={rows || []}
          pageSizeOptions={[7, 10, 25, 50]}
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowHeight={rowHeight}
          className="custom-data-grid" // Apply custom class here
          getRowHeight={() => 'auto'}
        />
      </Box>
    </>
  );
};

export default CustomDataGrid;
