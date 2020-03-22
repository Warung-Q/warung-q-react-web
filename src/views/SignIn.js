import React, { useEffect } from "react";
import AppbarSignUp from "../components/AppbarSignUp";
import SignInGrid from "../components/SignInGrid";
import Footer from "../components/Footer";

export default function SignUpPage(props) {
  useEffect(() => {
    document.title = "Sign In - Warung-Q";
  }, []);
  return (
    <>
      <AppbarSignUp color={props.color} />
      <SignInGrid color={props.color} />
      <Footer color={props.color} />
    </>
  );
}
