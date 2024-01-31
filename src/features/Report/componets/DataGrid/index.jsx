import React, { useEffect, useState } from 'react';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  MenuItem,
  Divider,
  Stack,
  TextField,
  Paper,
  Typography,
} from '@mui/material';
import CustomDataGrid from 'src/@core/components/custom-datagrid';
import { useTranslation } from 'react-i18next';
import useReportColumns from '../../hooks/useReportColumns';
import { ReportData } from '../../infrstructure';

const ReportGrid = ({ rows }) => {
  console.log("🚀 ~ ReportGrid ~ rows:", rows)
  const columns = useReportColumns();
  const [reportDataGrid, setReportData] = useState([]);
  const [expandedRow, setExpandedRow] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().slice(0, 10));
  const { t } = useTranslation();

  useEffect(() => {
    setReportData(rows);
  }, [rows]);

  const handleRowClick = (rowId) => {
    setExpandedRow((prevRowId) => (prevRowId === rowId ? null : rowId));
  };

  return (
    <>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card>
            <CardHeader title={`${t('Filters')}`} />
            <CardContent>
              {/* ... (existing code) */}

              <CustomDataGrid
        columns={columns}
        rows={ReportData(rows)||[]}

      />


              {/* ... (existing code) */}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ReportGrid;
