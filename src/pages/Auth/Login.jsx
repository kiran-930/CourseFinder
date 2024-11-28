import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import './login.css'
import "../../bootstrap.min.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

// URL of the backend API endpoint
const API_URL = "https://bdea-2401-4900-1f2a-2fb7-592c-118e-a0c-6c7.ngrok-free.app/api/login/";

function Login() {
  const navigate= useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    


    try {
      // Send a POST request with credentials using axios
      const response = await axios.post(
        API_URL,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Assuming response is successful, handle success
      setSuccessMessage("Login successful!");
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      console.log(response.data);
      
      localStorage.setItem('token',response.data.access)
      navigate('/admin')
      setErrorMessage("");

      // If the API returns a token, you might store it for future requests
       localStorage.setItem("token", response.data.token);

    } catch (error) {
      // Check if error response is available to provide more details
      if (error.response) {
        setErrorMessage(error.response.data.message || "Login failed");
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      setSuccessMessage("");
    }
  };
  return (
    <>
      <div className='outerdiv'>
        <Row>
          <Col sm={12} md={6}></Col>
          <Col sm={12} md={6}>
          
            <div className='innerdiv rounded py-3'>
              <div className='d-flex justify-content-center align-items-center py-3'>
               {/* <h1 className='text-light fw-bolder p-2 px-3 text-center'>Welcome.</h1>*/}
                <img src="https://cdn-icons-png.flaticon.com/512/4661/4661334.png" alt="image not found" width={'100px'} height={'100px'} />
                
              </div>
              <h1 className='text-primary text-center fw-bolder'>Login Here!</h1>
              {errorMessage && <div className="error text-center">{errorMessage}</div>}
              {successMessage && <div className="success text-center">{successMessage}</div>}
              <div className='d-flex justify-content-center align-items-center w-100'>
              
                <form className='w-50' onSubmit={handleSubmit}>
                  <div className='mb-3 py-3 m-3'>
                    <input type="text" placeholder='Email id' className='form-control bg-light rounded-5'  id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required/>
                  </div>
                  <div className='mb-3 py-3 m-3'>
                    <input type="password" placeholder='Password' className='form-control bg-light rounded-5 '   id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required/>
                    <a href="" style={{ textDecoration: 'none' }} className='text-danger'>Forgot Password ?</a>
                  </div>
                  <div className='mb-3 py-2 ms-5'>
                    <button className='btn btn-warning w-75 rounded-5 '  type="submit">
                      Login
                    </button>
                    <p className='text-primary'>New user? Click to <span className='text-dark fw-bolder'><Link to={'/flow'} style={{textDecoration:'none',color:'black'}}>Register</Link></span> here</p>
                  </div>
                </form>
              </div>
            </div>
          
          </Col>
          <Col sm={12} md={6}></Col>
        </Row>
      </div>
    </>
  )
}

export default Login