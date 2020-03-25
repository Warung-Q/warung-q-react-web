import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  CircularProgress,
  Typography
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import signInAction from "../store/actionCreators/signInAction";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

export default function SignInForm({ color }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading } = useSelector(state => state.loadingMessageReducer);
  const history = useHistory();

  const handleSignIn = async function(event) {
    try {
      event.preventDefault();
      await dispatch(
        signInAction({
          email,
          password
        })
      );

      history.push("/dashboard/summary");
    } catch (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true
      });
    }
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Card>
        <CardHeader title="Sign In to Warung-Q" />
        <CardContent>
          <form
            style={{ display: "flex", flexDirection: "column" }}
            onSubmit={handleSignIn}
          >
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

            <CardActions>
              <Button
                variant="contained"
                style={{
                  color: "white",
                  backgroundColor: loading ? "grey" : color,
                  width: 280
                }}
                type="submit"
                disabled={loading}
              >
                Sign In
              </Button>
            </CardActions>
            {loading && (
              <CardActions>
                <Typography variant="h6" style={{ color: color }}>
                  Loading
                </Typography>
                <CircularProgress
                  size={24}
                  style={{
                    color: color,
                    position: "relative"
                  }}
                />
              </CardActions>
            )}
          </form>
        </CardContent>
      </Card>
    </>
  );
}
