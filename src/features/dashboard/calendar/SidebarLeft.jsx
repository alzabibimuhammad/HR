import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const steps = [
  {
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Create an ad group',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Create an ad',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

export default function SidebarLeft({DataEventByDay}) {
  console.log("🚀 ~ SidebarLeft ~ DataEventByDay:", DataEventByDay)
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;
  const { t } = useTranslation()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ backgroundColor:"#E9ECF3",marginTop:"15px" }}>
       {Array.isArray(DataEventByDay?.data?.data) && DataEventByDay.data.data.length > 0 ? (
      DataEventByDay.data.data.map(event => (
        <div className="parent" key={event.id}>
          <div>
            <p><span className="child">{event.day}</span>{event.start}</p>
            {/* <p>{event.time}</p> */}
          </div>
          <div>
            <p className='description'>
              {event.description}
            </p>
          </div>
        </div>
      ))
    ) : (
      <Image
        width={250}
        height={250}
        src="/images/notRequest.svg"
        alt="Alternate Text"
      />
    )}
    </Box>
  );
}
