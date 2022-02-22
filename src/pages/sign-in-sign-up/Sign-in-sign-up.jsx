import React from "react";
import SignIn from "../../components/sign-in/Sign-in";
import SignUp from "../../components/sign-up/sign-up";
import { SignInSignUpContainer } from "./sign-in-sign-up.styles";

const SignInAndSignUp = () => {
  return (
    <SignInSignUpContainer>
      <SignIn />
      <SignUp />
    </SignInSignUpContainer>
  );
};

export default SignInAndSignUp;
