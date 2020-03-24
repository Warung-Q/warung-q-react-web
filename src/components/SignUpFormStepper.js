import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {
  FormControl,
  TextField,
  Box,
  CircularProgress
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import setLoading from "../store/actionCreators/setLoadingAction";
import setMessage from "../store/actionCreators/setMessageAction";
import signUpAction from "../store/actionCreators/signUpAction";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  actionsContainer: {
    marginBottom: theme.spacing(2)
  },
  resetContainer: {
    padding: theme.spacing(3)
  }
}));

function getSteps() {
  return ["Input Your Data", "Input Your Warung Name", "Confirm Your Data"];
}

function getStepContent(
  step,
  username,
  setUsername,
  warungName,
  setWarungName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword
) {
  switch (step) {
    case 0:
      return (
        <>
          <Typography variant="body2">
            This is your first step to become good at managing your own market.
          </Typography>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <FormControl>
              <TextField
                type="text"
                label="Username"
                value={username}
                onChange={event => setUsername(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                type="email"
                label="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                type="password"
                label="Password"
                value={password}
                onChange={event => setPassword(event.target.value)}
              />
            </FormControl>
            <FormControl>
              <TextField
                type="password"
                label="Confirm Password"
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
              />
            </FormControl>
          </form>
        </>
      );
    case 1:
      return (
        <>
          <Typography variant="body2">
            Default warung name will be your username input from previous step.
            If you desire to change your warung name, you can change it below.
          </Typography>
          <FormControl>
            <TextField
              type="text"
              label="Warung Name"
              value={warungName}
              onChange={event => setWarungName(event.target.value)}
            />
          </FormControl>
        </>
      );
    case 2:
      return (
        <>
          <Typography variant="body2">
            Please check your input data. Make sure your data is valid. Then you
            can confirm and start your management.
          </Typography>
          <form style={{ display: "flex", flexDirection: "column" }}>
            <FormControl>
              <TextField
                type="text"
                label="Username"
                value={username}
                disabled
              />
            </FormControl>
            <FormControl>
              <TextField
                type="text"
                label="Warung Name"
                value={warungName}
                disabled
              />
            </FormControl>
            <FormControl>
              <TextField type="email" label="Email" value={email} disabled />
            </FormControl>
            <FormControl>
              <TextField
                type="password"
                label="Password"
                value={password}
                disabled
              />
            </FormControl>
          </form>
        </>
      );
    default:
      return "Unknown step";
  }
}

export default function SignUpFormStepper({ color }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [username, setUsername] = React.useState("");
  const [warungName, setWarungName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const { loading, message } = useSelector(
    state => state.loadingMessageReducer
  );
  const steps = getSteps();
  const dispatch = useDispatch();
  const history = useHistory();

  const handleNext = () => {
    if (activeStep === 0) {
      if (password === confirmPassword) {
        setActiveStep(activeStep + 1);
      } else {
      }
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleSkip = () => {
    setWarungName(username);
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async function(event) {
    event.preventDefault();
    await dispatch(
      signUpAction({ username, email, password, warung_name: warungName })
    );
    history.push("/signin");
  };

  // const handleReset = () => {
  //   setActiveStep(0);
  // };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Box>
                {getStepContent(
                  index,
                  username,
                  setUsername,
                  warungName,
                  setWarungName,
                  email,
                  setEmail,
                  password,
                  setPassword,
                  confirmPassword,
                  setConfirmPassword
                )}
              </Box>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  {activeStep === 1 && (
                    <Button
                      variant="contained"
                      onClick={handleSkip}
                      className={classes.button}
                      style={{ color: "white", backgroundColor: color }}
                    >
                      Skip
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    onClick={
                      activeStep === steps.length - 1
                        ? handleSubmit
                        : handleNext
                    }
                    className={classes.button}
                    disabled={loading}
                    style={{ color: "white", backgroundColor: color }}
                  >
                    {activeStep === steps.length - 1 ? "Confirm" : "Next"}
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      style={{
                        color: color,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        marginTop: -12,
                        marginLeft: -12
                      }}
                    />
                  )}
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )} */}
    </div>
  );
}
