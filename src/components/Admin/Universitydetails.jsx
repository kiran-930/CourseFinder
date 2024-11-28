import React from 'react'
import SideNav from './SideNav'

function Universitydetails() {
  return (
    <>
      <div className='m-0 p-0 d-flex' style={{ backgroundColor: '#fccca8' }}>
        <SideNav />
        <div style={{ padding: '20px' }} className='w-100'>
          <div>
            <div className='rounded-3 p-4 mb-3 row' style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
              <div className='col-md-12'>
                {/*searching for universities and registered students */}
                <div className="admin-dashboard rounded">
                  <h1>Admin Dashboard</h1>

                  <section>
                    <h2>Registered Universities Details</h2>
                    <div className="table-container">
                      <table className="styled-table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Established</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*universities.map((university) => (  */}
                          <tr >
                            <td>1</td>
                            <td>Mahathma Gandhi University</td>
                            <td>Kottayam</td>
                            <td>since 1976</td>
                          </tr>
                          <tr >
                            <td>2</td>
                            <td>Kerala Technical University</td>
                            <td>Kottayam</td>
                            <td>since 1976</td>
                          </tr>
                          <tr >
                            <td>3</td>
                            <td>Cochin University Sicence and Technology</td>
                            <td>Ernakulam</td>
                            <td>since 1976</td>
                          </tr>
                          <tr >
                            <td>4</td>
                            <td>APJ Abdul Kalam Technological University</td>
                            <td>Thiruvananthapuram</td>
                            <td>since 1976</td>
                          </tr>
                          {/**    ))}    */}
                        </tbody>
                      </table>
                    </div>
                  </section>


                </div>


              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Universitydetails