// import * as React from 'react';
// import PropTypes from 'prop-types';
// import { styled } from '@mui/material/styles';
// import Stack from '@mui/material/Stack';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Check from '@mui/icons-material/Check';
// import SettingsIcon from '@mui/icons-material/Settings';
// import GroupAddIcon from '@mui/icons-material/GroupAdd';
// import VideoLabelIcon from '@mui/icons-material/VideoLabel';
// import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';

// const QontoConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 10,
//     left: 'calc(-50% + 16px)',
//     right: 'calc(50% + 16px)',
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       borderColor: '#784af4',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderTopWidth: 3,
//     borderRadius: 1,
//   },
// }));

// const QontoStepIconRoot = styled('div')(({ theme, ownerState }) => ({
//   color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
//   display: 'flex',
//   height: 22,
//   alignItems: 'center',
//   ...(ownerState.active && {
//     color: '#784af4',
//   }),
//   '& .QontoStepIcon-completedIcon': {
//     color: '#784af4',
//     zIndex: 1,
//     fontSize: 18,
//   },
//   '& .QontoStepIcon-circle': {
//     width: 8,
//     height: 8,
//     borderRadius: '50%',
//     backgroundColor: 'currentColor',
//   },
// }));

// function QontoStepIcon(props) {
//   const { active, completed, className } = props;

//   return (
//     <QontoStepIconRoot ownerState={{ active }} className={className}>
//       {completed ? (
//         <Check className="QontoStepIcon-completedIcon" />
//       ) : (
//         <div className="QontoStepIcon-circle" />
//       )}
//     </QontoStepIconRoot>
//   );
// }

// QontoStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
// };

// const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
//   [`&.${stepConnectorClasses.alternativeLabel}`]: {
//     top: 22,
//   },
//   [`&.${stepConnectorClasses.active}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//     },
//   },
//   [`&.${stepConnectorClasses.completed}`]: {
//     [`& .${stepConnectorClasses.line}`]: {
//       backgroundImage:
//         'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
//     },
//   },
//   [`& .${stepConnectorClasses.line}`]: {
//     height: 3,
//     border: 0,
//     backgroundColor:
//       theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
//     borderRadius: 1,
//   },
// }));

// const ColorlibStepIconRoot = styled('div')(({ theme, ownerState }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
//   zIndex: 1,
//   color: '#fff',
//   width: 50,
//   height: 50,
//   display: 'flex',
//   borderRadius: '50%',
//   justifyContent: 'center',
//   alignItems: 'center',
//   ...(ownerState.active && {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//     boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
//   }),
//   ...(ownerState.completed && {
//     backgroundImage:
//       'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
//   }),
// }));

// function ColorlibStepIcon(props) {
//   const { active, completed, className } = props;

//   const icons = {
//     1: <SettingsIcon />,
//     2: <GroupAddIcon />,
//     3: <VideoLabelIcon />,
//   };

//   return (
//     <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
//       {icons[String(props.icon)]}
//     </ColorlibStepIconRoot>
//   );
// }

// ColorlibStepIcon.propTypes = {
//   /**
//    * Whether this step is active.
//    * @default false
//    */
//   active: PropTypes.bool,
//   className: PropTypes.string,
//   /**
//    * Mark the step as completed. Is passed to child components.
//    * @default false
//    */
//   completed: PropTypes.bool,
//   /**
//    * The label displayed in the step icon.
//    */
//   icon: PropTypes.node,
// };

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

// export default function CustomizedSteppers() {
//   return (
//     <Stack sx={{ width: '100%' }} spacing={4}>
//       <Stepper alternativeLabel activeStep={1} connector={<QontoConnector />}>
//         {steps.map((label) => (
//           <Step key={label}>
//             <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>

//     </Stack>
//   );
// }





import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Search2 from './Search2';
import ResultCard from './ResultCardEdit'
import SummaryCard3 from './SummaryCard3';
import SeatPickerTheSequel from './SeatPickerTheSequel';
import { connect } from 'react-redux';

// import { Button } from '@material-ui/core';
const steps = ['Search for flight', 'Select Flight', 'Select Seats', "Confirm"];
const mapStateToProps = (state) => {
    return {
        details: state.DetailsReducer.details,
        //  token: state.DetailsReducer.details.token,
    };
};
export default connect(mapStateToProps)(HorizontalLinearStepper);
function HorizontalLinearStepper({ details }) {
    console.log(details)
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };
    const renderSwitch = (i) => {
        switch (i) {
            case 0:
                return <React.Fragment>
                    <Typography style={{ fontSize: 24, marginTop: "5%", marginLeft: "-55%" }}>Search for a new returning flight </Typography>
                    <Search2 />


                    <Button style={{ background: "#10404c ", color: "wheat", marginTop: "36.5%", marginLeft: "90%" }} onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </React.Fragment>;
            case 1:
                return <React.Fragment>
                    <div><ResultCard /></div>
                    <Button
                        style={{ background: "#10404c ", color: "wheat", borderWidth: 1, position: 'absolute', bottom: 100, alignSelf: 'flex-start', marginLeft: "-30%" }}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    {/* style={{ background: "#10404c ", color: "wheat", marginTop: "10%", marginLeft: "90%", position: "sticky" }} onClick={handleNext} */}
                    <Button style={{ background: "#10404c ", color: "wheat", borderWidth: 1, position: 'absolute', bottom: 100, alignSelf: 'flex-end', marginLeft: "25%" }} onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>

                </React.Fragment>
            case 3: return <React.Fragment>
                <div><SummaryCard3 /></div>

                <Button
                    style={{ background: "#10404c ", color: "wheat", borderWidth: 1, position: 'absolute', bottom: 100, alignSelf: 'flex-start', marginLeft: "-30%" }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                {/* style={{ background: "#10404c ", color: "wheat", marginTop: "10%", marginLeft: "90%", position: "sticky" }} onClick={handleNext} */}
                <Button style={{ background: "#10404c ", color: "wheat", borderWidth: 1, position: 'absolute', bottom: 100, alignSelf: 'flex-end', marginLeft: "25%" }} onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
            </React.Fragment>

            case 2: return <React.Fragment>
                <div>
                    <SeatPickerTheSequel flight={2} />
                </div>
                <Button
                    style={{ background: "#10404c ", color: "wheat", borderWidth: 1, position: 'absolute', bottom: 100, alignSelf: 'flex-start', marginLeft: "-30%" }}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                    Back
                </Button>
                {/* style={{ background: "#10404c ", color: "wheat", marginTop: "10%", marginLeft: "90%", position: "sticky" }} onClick={handleNext} */}
                <Button style={{ background: "#10404c ", color: "wheat", borderWidth: 1, position: 'absolute', bottom: 100, alignSelf: 'flex-end', marginLeft: "25%" }} onClick={handleNext}>
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>


            </React.Fragment>



        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    // if (isStepOptional(index)) {
                    //     labelProps.optional = (
                    //         <Typography variant="caption">Optional</Typography>
                    //     );
                    // }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {renderSwitch(activeStep)}
            {/* {activeStep === 0 ? (
                <React.Fragment>
                    <Search2 />
                  

                    <Button style={{ background: "#10404c ", color: "wheat", marginTop: "45%", marginLeft: "90%" }} onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </React.Fragment>
            ) : (

                <React.Fragment>
                    <div><ResultCard /></div>
                    <Button
                        style={{ background: "#10404c ", color: "wheat", marginTop: "10%", marginLeft: "0%", position: "sticky" }}
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>

                    <Button style={{ background: "#10404c ", color: "wheat", marginTop: "10%", marginLeft: "90%", position: "sticky" }} onClick={handleNext}>
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
               
                </React.Fragment>
            )} */}
        </Box>
    );
}
