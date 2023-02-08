import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import "./Login.css"
import { auth, provider, signinUser } from './util/Firebase_Controller';
import {login} from "./features/userSlice";
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const dispatch = useDispatch();
  const signIn = () => {
    signInWithPopup(auth,provider)
    .then(({user}) => {
      dispatch(
        login({
          displayName: user.displayName,
          email: user.email,
          photoUrl: user.photoURL,

        })
      );
    })
    .catch((error) => alert(error.message));
  };

  
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://cdn.vox-cdn.com/thumbor/jJ_w_lWMMvGKoaLp_zaEXJpyZ9c=/0x0:1320x880/1400x788/filters:focal(660x440:661x441)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg"
          alt=""
        />
        <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
      </div>
    </div>
  );
}

export default Login