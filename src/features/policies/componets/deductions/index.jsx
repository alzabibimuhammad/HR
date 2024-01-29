import React, { useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Box, Stack } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Deductions() {
  const [selectedOption, setSelectedOption] = useState(''); // State to keep track of the selected option

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <Stack direction={'column'} spacing={2}>
          <Typography fontSize={'20px'}>Deductions</Typography>

          <RadioGroup
            name="deductionOptions"
            value={selectedOption}
            onChange={handleChange}
          >
            <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
              <FormControlLabel
                control={<Radio />}
                value="requestForApproval"
                label="Request for Approval"
                sx={{
                  padding: "0px !important",
                  fontSize: "14px",
                  fontWeight: "600",
                  '& .MuiFormControlLabel-label': {
                    color: "#6ab2df", // Default color
                  },
                  '& .Mui-checked .MuiFormControlLabel-label': {
                    color: "#ff0000", // Color when checked
                  },
                }}
              />
              <Typography sx={{ fontSize: "12px", fontWeight: "400", color: "#3f4458" }}>
                By choosing this option, the system will generate a deduction request for specific cases. Admin approval is required before the deduction is applied. Ideal for situations that may require review or exceptions.
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "start", flexDirection: "column" }}>
              <FormControlLabel
                control={<Radio />}
                value="automaticDeduction"
                label="Automatic Deduction"
                sx={{
                  padding: "0px !important",
                  fontSize: "14px",
                  fontWeight: "600",
                  '& .MuiFormControlLabel-label': {
                    color: "#6ab2df",
                  },
                  '& .Mui-checked .MuiFormControlLabel-label': {
                    color: "#ff0000",
                  },
                }}
              />
              <Typography sx={{ fontSize: "12px", fontWeight: "400", color: "#3f4458" }}>
                Selecting this option will enable automatic deduction of salary for specified cases, such as late arrivals. The system will apply deductions without requiring manual approval.
              </Typography>
            </Box>
          </RadioGroup>

        </Stack>
      </CardContent>
    </Card>
  );
}
