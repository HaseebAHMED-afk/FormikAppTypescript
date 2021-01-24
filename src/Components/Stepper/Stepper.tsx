import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Email from '../Email/Email';
import Personal from '../Personal/Personal';
import Professional from '../Professional/Professional';
import Review from '../Review/Review';


function getSteps() {
  return ['Provide a valid Email and Password', 'Tell us about yourself', 'Tell us what you do', 'Review your info'];
}

function getStepContent(stepIndex : Number) {
  switch (stepIndex) {
    case 0:
      return <Email />;
    case 1:
      return <Personal />;
    case 2:
      return <Professional />;
    case 3:
      return <Review />
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();


  return (
    <div >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {
          getStepContent(activeStep)
      }
     
    </div>
  );

  };


        
