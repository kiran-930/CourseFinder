import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons/faArrowRightFromBracket';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons/faBoxesStacked';
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear';
import { faUserTie } from '@fortawesome/free-solid-svg-icons/faUserTie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, useNavigate } from 'react-router-dom';

function SideNav() {
    const [isCollapsed, setIsCollapsed] = useState(false)
    const navigate = useNavigate()

    const openCourse=()=>{
        navigate('/addcourse')
    }

    const handleCollapse = ()=>{
        setIsCollapsed(!isCollapsed)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsCollapsed(true)
            } else {
                setIsCollapsed(false)
            }
        }
        window.addEventListener('resize',handleResize)
        handleResize()
        return ()=>{
            window.addEventListener('resize',handleResize)
        }
    }, [])
  return (
    <>
    <Sidebar collapsed={isCollapsed} className='shadow  border-0' width='200px' style={{height:'100vh',backgroundColor:'white'}}>
     <div className='d-flex'>
     <div className='border border-4 border-warning rounded-circle d-flex align-items-center justify-content-center ms-4 my-5' style={{width:'50px',height:'45px',cursor:'pointer'}} onClick={handleCollapse}>
     <FontAwesomeIcon icon={faUserTie} size='xl' /> 
     </div>
     <div className='mt-5 ms-1 p-1'><h5 className='fw-bolder ms-4'>Admin Panel</h5></div>
     </div>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
          borderEndEndRadius:'20px',
          borderTopRightRadius:'20px'
        },
      },
    }}
  >
    <MenuItem component={<Link to="/admin" />}><FontAwesomeIcon icon={faBoxesStacked} size='xl' className='me-3 ' /> Dashboard</MenuItem>
    <MenuItem onClick={openCourse}> <FontAwesomeIcon icon={faBook} size='xl' className='me-3 '/>Add Courses</MenuItem>
    <MenuItem component={<Link to="/e-commerce" />}><FontAwesomeIcon icon={faGear} size='xl' className='me-3 ' />Settings</MenuItem>
    <MenuItem component={<Link to="/" />}><FontAwesomeIcon icon={faArrowRightFromBracket} size='xl' className='me-3 ' />  Logout</MenuItem>

  </Menu>
</Sidebar>
    </>
  )
}

export default SideNav