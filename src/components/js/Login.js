import "./../css/Login.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import { getUser } from "./services/api.js"
import { decrypt } from "./services/crypt";

function Login() {
  const[ email, setEmail ] = useState('');
  const[ password, setPassword ] = useState('');
  const[ users, setUsers ] = useState('');
  const[ alertFailed, setAlertFailed ] = useState(true);
  const[ alertSuccess, setAlertSuccess ] = useState(true);
  const[ msgAlert, setMsgAlert ] = useState('');

  useEffect(() => {
    getUser
    .then((response) => (
      setUsers(response.data.results)
    ))
  }, []);

  function submit() {
    if(users?.filter(u=>u.email === email).length === 0) {
      setAlertSuccess(true);
      setAlertFailed(false);
      setMsgAlert('Email not registered');
    } else if(decrypt(users?.filter(u=>u.email == email)[0].password) == password) {
      setAlertSuccess(false);
      setAlertFailed(true);
      setMsgAlert('Login successful');
    } else {
      setAlertSuccess(true);
      setAlertFailed(false);
      setMsgAlert('Incorrect password');
    }
  }

  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <img className="img-logo" src="./assets/img/logo-spotify.png" alt="logo-spotify"/>

              <div class="alert alert-failed" hidden={alertFailed}>
                  <strong>Failed!</strong> {msgAlert}
              </div>

              <div class="alert alert-success" hidden={alertSuccess}>
                  <strong>Success!</strong> {msgAlert}
              </div>

              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' value={email} onChange={(e)=>setEmail(e.target.value)} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' value={password} onChange={(e)=>setPassword(e.target.value)} labelClass='text-white' label='Password' id='formControlLg2' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <button className='btn-login' onClick={submit}>
                Login
              </button>

              <div>
                <p className="mb-0">Don't have an account? <Link to="/signup" class="text-white-50 fw-bold">Sign Up</Link></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Login;