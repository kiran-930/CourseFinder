import React from 'react'

function Coursedetails() {
  return (
    <>
    <div style={{padding:'20px'}}>
        <div>
            <div className='rounded-3 p-4 mb-3 row' style={{boxShadow:'0 4px 8px rgba(0,0,0,0.2)'}}>
                       <div className='col-md-12'>
                          {/*searching for universities and registered students */}
                          <div className="admin-dashboard rounded">
      <h1>Admin Dashboard</h1>

      <section>
        <h2>Course Details</h2>
        <div className="table-container">
          <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>University</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {/*students.map((student) => (  */}
                <tr >
                  <td>1005</td>
                  <td>Max</td>
                  <td>Max@gmail.com</td>
                  <td>Calicut University</td>
                  <td>BCA</td>
                </tr>
            {/**  ))}    */}
            </tbody>
          </table>
        </div>
      </section>
    </div>


                       </div>
            </div>
        </div>

    </div>

    </>
  )
}

export default Coursedetails