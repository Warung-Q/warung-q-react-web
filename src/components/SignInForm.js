import React, { useState } from "react";
import {
  FormControl,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import signInAction from "../store/actionCreators/signInAction";

export default function SignInForm({ color }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = event => {
    event.preventDefault();
    dispatch(
      signInAction({
        email,
        password
      })
    );
  };
  return (
    <Card>
      <CardHeader title="Sign In to Warung-Q" />
      <CardContent>
        <form style={{ display: "flex", flexDirection: "column" }}>
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
        </form>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          style={{ color: "white", backgroundColor: color }}
        >
          Sign In
        </Button>
      </CardActions>
    </Card>
  );
}
