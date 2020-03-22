import React from "react";
import {
  FormControl,
  TextField,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";

export default function SignInForm({ color }) {
  return (
    <Card>
      <CardHeader title="Sign In to Warung-Q" />
      <CardContent>
        <form style={{ display: "flex", flexDirection: "column" }}>
          <FormControl>
            <TextField type="email" label="Email" />
          </FormControl>
          <FormControl>
            <TextField type="password" label="Password" />
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
