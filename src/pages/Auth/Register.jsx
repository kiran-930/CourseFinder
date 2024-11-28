import React from 'react'
import './register.css'
import TextField from '@mui/material/TextField';
import { Col, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBuildingColumns} from '@fortawesome/free-solid-svg-icons';
//import ExampleCarouselImage from 'components/ExampleCarouselImage';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import FormControl from "@mui/material/FormControl";
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap';

function Register({uniregister}) {
  const [algorithm, setAlgorithm] = React.useState("");
 const navigate = useNavigate()
    const handleChange = (event) => {
        setAlgorithm(event.target.value);
    };
    const handleuniregister=()=>{
navigate('/otp')
    }
  return (
    <>
      <div className='shadow loginhead'>
       
        <div>
          <Row>
            <Col sm={12} md={6}>
              <div>
                {uniregister?
                <img src="https://t4.ftcdn.net/jpg/08/26/77/59/360_F_826775986_FHB9z6bOrdr7krFijHYBVoyqzmiaWQ7b.jpg" alt="" width={'500px'} height={'620px'}/>
                :
                <img src="https://core-docs.s3.amazonaws.com/searcy_public_schools_ar/article/image/large_06dc2577-1f31-4d97-8bd0-b71d57bd23c7.png" alt="" width={'500px'} height={'700px'}/>
                }
                </div>
            </Col>
            <Col sm={12} md={6}>
              <div className=' text-center m-3 p-4 ms-2 '>
                <div className='d-flex'>
{uniregister?
                <FontAwesomeIcon icon={faBuildingColumns} style={{color: "orangered",}}  size='2x' className='me-3 mt-2' />
                :
                <FontAwesomeIcon icon={faGraduationCap} style={{color: "#030303",}} size='2x' className='me-3 mt-2' />
}
                <h1 className='text-danger'>Register Now to Apply</h1>
                </div>
                <hr />
              </div>
              
              
            <form className='mt-4 p-2'>
{uniregister?
            <div className='mb-3 text-center'>
                  <TextField id="outlined-basic" name='institutionname' label="Institution Name" variant="outlined" className='me-2 mb-4' required />
                  <TextField id="outlined-basic" name='emailid' label="Email Id" variant="outlined" className='me-2' required />
                  <TextField id="outlined-basic" name='mobile' label="Contact Number" variant="outlined" className='me-2' required />
                  <TextField id="outlined-basic" name='institutionid' label="Institution Reference ID" variant="outlined" className='me-2 mb-3' required />
                  <TextField id="outlined-basic" name='city' label="City" variant="outlined" className='me-2 mb-3' required />
                  <TextField id="outlined-basic" name='state' label="State" variant="outlined" className='me-2 mb-3' required />
                  <TextField id="outlined-basic" name='country' label="Country" variant="outlined" className='me-2 mb-3' required />
                  <TextField id="outlined-basic" name='headofficename' label="Head Office" variant="outlined" className='me-2 mb-3' required />
            </div>
                
:

               
               <div className='mb-3 text-center'>
                 <TextField id="outlined-basic" name='name' label="Full Name" variant="outlined" className='me-2 mb-4' required />
                 <TextField id="outlined-basic" name='emailid' label="Email Id" variant="outlined" className='me-2' required />
                 <TextField id="outlined-basic" name='mobile' label="Mobile Number" variant="outlined" className='me-2' required />
                 <TextField id="outlined-basic" name='city' label="City you Live In " variant="outlined" className='me-2 mb-3' required />
                 <TextField id="outlined-basic" name='state' label="State" variant="outlined" className='me-2 mb-3' required />
                 <TextField id="outlined-basic" name='country' label="Country" variant="outlined" className='me-2 mb-3' required />
                 <div className='d-flex ms-2 m-2'>
                   <label>Please Select Your Gender * :</label>
                   <div className="radio-group ms-2">
                     <label>
                       <input
                         type="radio"
                         name="gender"
                         value="male"
                         className='me-2 ms-2'
                         
                       />
                       Male
                     </label>
                     <label>
                       <input
                         type="radio"
                         name="gender"
                         value="female"
                         className='me-2 ms-2'
                         
                       />
                       Female
                     </label>
                     <label>
                       <input
                         type="radio"
                         name="gender"
                         value="other"
                         className='me-2 ms-2'
                         
                       />
                       Rather Not Say
                     </label>
                   </div>
                 </div>
                
                 <div className='d-flex ms-4 mb-2'>
                   <div >
                     <FormControl sx={{ m: 1, minWidth: 200 }} >
                       <InputLabel id="demo-simple-select-label">
                         Course Intrested In
                       </InputLabel>
                       <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={algorithm}
                         label="Course intrested in"
                         onChange={handleChange}
                       >
                         <MenuItem value={1}>Commerse</MenuItem>
                         <MenuItem value={2}>BCA</MenuItem>
                         <MenuItem value={3}>BCOM</MenuItem>
                         <MenuItem value={4}>Bsc</MenuItem>
                       </Select>
                     </FormControl>
                   </div>
                   <div>
                     <FormControl sx={{ m: 1, minWidth: 200 }} >
                       <InputLabel id="demo-simple-select-label">
                         Qualification
                       </InputLabel>
                       <Select
                         labelId="demo-simple-select-label"
                         id="demo-simple-select"
                         value={algorithm}
                         label="Qualification"
                         onChange={handleChange}
                       >
                         <MenuItem value={1}>Degree</MenuItem>
                         <MenuItem value={2}>PG</MenuItem>
                         <MenuItem value={3}>12th Grade</MenuItem>
                       </Select>
                     </FormControl>
                   </div>
                 </div>
                 <TextField id="outlined-basic" name='username' label="Username " variant="outlined" className='me-2 mb-2' required />
                 <TextField id="outlined-basic" type='password' name='password' label="password " variant="outlined" className='me-2' required />
                 </div>
                 }
{uniregister?
                 <div className='text-center'>
                  <button className='btn btn-warning w-25 rounded  university' onClick={handleuniregister}>Register</button>
                  <p className='mt-2'>Already A user? Click here to <Link to={'/Login'} className='text-danger' style={{textDecoration:'none'}}>Login</Link></p>
                </div>
:
               
               <div className='text-center'>
               <button className='btn btn-danger w-25 rounded'>Register</button>
               <p className='mt-2'>Already A user? Click here to <Link to={'/Login'} className='text-danger' style={{textDecoration:'none'}}>Login</Link></p>
               </div>
}   
             </form>



              
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Register