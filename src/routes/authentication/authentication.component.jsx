import { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import Button from '../../components/button/button.component';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';
import './authentication.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
