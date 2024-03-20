import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Select master blaster campaign settings',
  'Create an ad group',
  'Create an ad',
];

export default function HorizontalLinearAlternativeLabelStepper() {
  // Hakkımda yazısı
  const aboutMe = "I am an AI language model created by OpenAI, called ChatGPT. I'm designed to assist users in various tasks and provide helpful responses.";
  
  // Tarih
  const currentDate = new Date();
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;

  return (
    <Box sx={{ width: '100%' }}>
      {/* Stepper */}
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {/* Hakkımda yazısı */}
      <Box sx={{ mt: 2 }}>
        <h2>About Me</h2>
        <p>{aboutMe}</p>
      </Box>

      {/* Tarih */}
      <Box sx={{ mt: 2 }}>
        <h2>Current Date</h2>
        <p>{formattedDate}</p>
      </Box>
    </Box>
  );
}
