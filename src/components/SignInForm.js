import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  CircularProgress
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import signInAction from "../store/actionCreators/signInAction";
import { useHistory } from "react-router-dom";

export default function SignInForm({ color }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loading, message } = useSelector(
    state => state.loadingMessageReducer
  );
  const history = useHistory();

  const handleSignIn = async function(event) {
    try {
      await event.preventDefault();
      await dispatch(
        signInAction({
          email,
          password
        })
      );
      await history.push("/dashboard");
    } catch (error) {
      await history.push("/signin");
    }
  };
  return (
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
                backgroundColor: color,
                width: 280
              }}
              type="submit"
            >
              Sign In
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
          </CardActions>
        </form>
      </CardContent>
    </Card>
  );
}
