import React, { useEffect, useState } from 'react'
import './overview.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../assets/admin_images/img1.png';
import img2 from '../../assets/admin_images/img2.png';
import img3 from '../../assets/admin_images/img3.png';
import { Link } from 'react-router-dom';
//import axios from 'axios';
//import '../services/sample'
function Overview() {
  /*const [universities, setUniversities] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const universitiesData = await axios.get('/api/universities');
        const studentsData = await axios.get('/api/students');
        
        setUniversities(universitiesData.data);
        setStudents(studentsData.data);
      } catch (error) {
        console.error("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;*/

  return (
    <>
      <div style={{ padding: '20px' }}>
        <div>
          <div className=' p-4 mb-3 row'>
            <div className='col-md-12'>

              <div className="admin-dashboard rounded">
                <h1>Overview</h1>
 <div className='d-flex justify-content-center align-items-center'>
    <Card style={{ width: '100%' ,backgroundColor:'transparent'}} className=' border-0 me-3 text-center'>
      <Card.Img variant="top" src={img1} style={{width:'50vh',height:'35vh'}} />
      <Card.Body>
        
        
       <Link to={'/studentdetails'}> <Button variant="success">Student List</Button></Link>
      </Card.Body>
    </Card>
    <Card style={{ width: '100%' ,backgroundColor:'transparent'}} className='me-3 border-0  text-center'>
      <Card.Img variant="top" src={img2} style={{width:'50vh',height:'35vh'}} />
      <Card.Body>
        
        
       <Link to={'/universitydetails'}><Button variant="success">University List</Button></Link> 
      </Card.Body>
    </Card>
    <Card style={{ width: '100%' }} className='border-0  text-center'>
      <Card.Img variant="top" src={img3} style={{width:'50vh',height:'35vh'}} />
      <Card.Body>
        
        
        <Button variant="success">Course Details</Button>
      </Card.Body>
    </Card>
    </div>

              </div>


            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Overview