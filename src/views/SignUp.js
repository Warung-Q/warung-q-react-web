import React, { useEffect } from "react";
import AppbarSignUp from "../components/AppbarSignUp";
import SignUpGrid from "../components/SignUpGrid";
// import Footer from "../components/Footer";

export default function SignUpPage(props) {
  useEffect(() => {
    document.title = "Sign Up - Warung-Q";
  }, []);
  return (
    <>
      <AppbarSignUp color={props.color} />
      <SignUpGrid color={props.color} />
      {/* <Footer color={props.color} /> */}
    </>
  );
}
