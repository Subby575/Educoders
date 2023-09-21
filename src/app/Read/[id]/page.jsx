"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Butt from '@mui/material/Button';
import Link from 'next/link';
const steps = [
  {
    label: 'What is Electrostatics?',
    description: "Electrostatics is a branch of physics that deals with the phenomena and properties of stationary or slow-moving electric charges. Electrostatic phenomena arise from the forces that electric charges exert on each other and are described by Coulomb’s law. Even though electrostatically induced forces seem to be relatively weak.",
  },
  {
    label: 'Coulomb’s Law of Electrostatics',
    description:
      'We begin with the magnitude of the electrostatic force between two point charges q  and Q . It is convenient to label one of these charges, q , as a test charge, and call Q a source charge. As we develop the theory, more source charges will be added',
  },
  {
    label: 'Electric field',
    description: `Electric field lines help visualize the electric field. Field lines begin on a positive charge and terminate on a negative charge. Electric field lines are parallel to the direction of the electric field, and the density of these field lines is a measure of the magnitude of the electric field at any given point.`,
  },
];

export default function TextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (

    <section class="flex bg-gray-400 flex-col items-center">
      <div class="flex max-w-xl flex-col items-center pb-16 pt-8 text-center lg:pb-48 lg:pt-32">
       
   
    <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
    <div>
    <Link href='https://docs.google.com/forms/d/e/1FAIpQLSceWNV5VCkMEGrGqIM5-TL5OKjKIBnZdSGJLcfrDONuOclyDg/viewform?usp=sf_link'><Butt className='m-10 bg-yellow-400'variant="contained" disableElevation>
      Take Test
    </Butt></Link>
   <Link href='/Student/Plan/JEE'> <Butt className='bg-green-400'variant="contained" disableElevation>
      Finish
    </Butt></Link>
    </div>
    </div>
    </section>

  );
}
