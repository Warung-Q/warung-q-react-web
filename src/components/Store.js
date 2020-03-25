import React from "react";
import { Grid, Box, Typography, Button } from "@material-ui/core";
import logoApp from "../assets/logos/Warung-Q_logo_draft_2.png";
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Store({ color }) {
  const { username } = useSelector(state => state.ownerReducer);
  const history = useHistory();
  const handleSignOut = event => {
    event.preventDefault();
    toast.warn(`See you again, ${username}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    localStorage.removeItem("warung_q_token_data");
    history.push("/");
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <img src={logoApp} alt="Warung-Q" style={{ width: 321 }} />
        </Grid>
        <Grid item>
          <Box>
            <Typography variant="h4">
              {
                JSON.parse(localStorage.getItem("warung_q_token_data"))
                  .warung_name
              }
            </Typography>
            <Typography variant="h4">
              Owner:{" "}
              {JSON.parse(localStorage.getItem("warung_q_token_data")).username}
            </Typography>
            <Typography variant="h6">
              email:
              {JSON.parse(localStorage.getItem("warung_q_token_data")).email}
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <Button
            variant="container"
            style={{ color: "white", backgroundColor: color }}
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
