import "./../css/Login.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from "axios";

function Login() {
  const[ email, setEmail ] = useState('');
  const[ password, setPassword ] = useState('');
  const[ users, setUsers ] = useState('');

  const headers = {
    Authorization: "Token 86e2Mv0sDRaFtuwMdnzxMD9D99wgYEYh"
  };
  axios.get("https://api.baserow.io/api/database/rows/table/103692/?user_field_names=true", { headers })
      .then(response => setUsers(response.data.results));
  
  console.log(users);


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <img className="img-logo" src="./assets/img/logo-spotify.png" alt="logo-spotify"/>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' value={email} onChange={e=>setEmail(e.target.value)} labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' value={password} onChange={e=>setPassword(e.target.value)} labelClass='text-white' label='Password' id='formControlLg2' type='password' size="lg"/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>

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