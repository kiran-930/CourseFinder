import React from 'react'
import Overview from '../components/Admin/Overview'
import SideNav from '../components/Admin/SideNav'

function Adminpanel() {
  return (
    <>
    <div className='m-0 p-0 d-flex' style={{backgroundColor:'white'}}>
        <SideNav/>
        <div className='mt-5 w-100' style={{overflowX:'hidden'}}>
           
            <div className='d-flex justify-content-center align-items-center'>
                <input type="text"  placeholder='search' className='form-control w-75 rounded-4   border-dark'/>
            </div>
            <Overview/>
            
        </div>
    </div>
    </>
  )
}

export default Adminpanel

