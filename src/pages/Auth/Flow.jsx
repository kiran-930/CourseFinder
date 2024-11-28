import React from 'react'
import './login.css'
import { Col, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons/faBuildingColumns'
import { Link } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

function Flow() {
  return (
    <>
    <div className='shadow loginhead'>
       
       <div>
         <Row>
           <Col sm={12} md={6}>
             <div>
               <img src="https://cdn.dribbble.com/users/1917942/screenshots/7139971/media/d802dc4eadb049f5a9684759cfdfbffa.gif" alt="" width={'500px'} height={'620px'}/>
             </div>
           </Col>
           <Col sm={12} md={6}>
                          <div className=' text-center m-3 p-4 ms-2 mt-5'>
                              <div className='d-flex w-100 mt-5 studiv shadow'>
                                  <FontAwesomeIcon icon={faGraduationCap} className='p-4 text-warning' size='2x' />
                                  <span className='p-4 fw-bolder fs-2'><Link to={'/'} style={{ textDecoration: 'none', color: 'orangered' }}>Student Register</Link></span>
                              </div>
                              <div className='d-flex mt-5 unidiv shadow'>
                                  <FontAwesomeIcon icon={faBuildingColumns} className='p-4 text-warning' size='2x' />
                                  <span className='p-4 fw-bolder fs-2'><Link to={'/universityregister'} style={{ textDecoration: 'none', color: 'orangered' }}>University Register</Link></span>
                              </div>
                              <div className='d-flex justify-content-evenly'>
                                  <div className='py-5 '>
                                      <FontAwesomeIcon icon={faArrowLeft} className='me-2 text-warning' /> <Link to={'/login'} style={{ textDecoration: 'none' }} className='fw-bolder'> <span className='fs-5 text-warning'>Login</span></Link>
                                  </div>
                                  <div className='py-5 homediv'>
                                      <Link to={'/login'} style={{ textDecoration: 'none' }} className='fw-bolder'> <span className='fs-5 text-warning me-2'>Home</span></Link><FontAwesomeIcon icon={faArrowRight} className=' text-warning' />
                                  </div>
                              </div>

                          </div>






             
           </Col>
         </Row>
       </div>
     </div>
    </>
  )
}

export default Flow