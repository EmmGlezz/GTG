import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import "./LogIn.css";

const LogIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const logInUser = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5500/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
        email,
        password
      })
    })

    const data = await response.json();

    if(data.user) {
      alert('LogIn succesful');
      window.location.href = '/home';
    } else {
      alert('Please check your email or password')
    }
  }

  
  return (
    <div className='bg'>
      
        <MDBContainer fluid>
        <form onSubmit={logInUser}>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
            <MDBCol col='12'>

            <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
                <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">Please enter your login and password!</p>
                
                <MDBInput wrapperClass='mb-4 mx-5 w-100' 
                labelClass='text-white' 
                label='Email address' 
                id='formControlLg' type='email' size="lg"
                value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput wrapperClass='mb-4 mx-5 w-100' 
                labelClass='text-white' 
                label='Password' 
                id='formControlLg' type='password' size="lg"
                value={password} onChange={(e) => setPassword(e.target.value)}
                />

                <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                <MDBBtn type='submit' outline className='mx-2 px-5' color='white' size='lg'>
                    LogIn
                </MDBBtn>

                <div className='d-flex flex-row mt-3 mb-5'>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='facebook-f' size="lg"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='twitter' size="lg"/>
                    </MDBBtn>

                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                    <MDBIcon fab icon='google' size="lg"/>
                    </MDBBtn>
                </div>

                <div>
                    <p className="mb-0">Don't have an account? <button onClick={() => props.onChange(true)} className="text-white-50 fw-bold astext">Sign Up</button></p>

                </div>
                </MDBCardBody>
            </MDBCard>

            </MDBCol>
        </MDBRow>
        </form>
        </MDBContainer>
        
    </div>
  );
}

export default LogIn;