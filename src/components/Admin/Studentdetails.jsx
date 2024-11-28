import React from 'react'
import SideNav from './SideNav'
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
//import * as React from 'react';
const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const paginationModel = { page: 0, pageSize: 5 };
function Studentdetails() {
  return (
    <>
      <div className='m-0 p-0 d-flex' style={{ backgroundColor: '#fccca8' }}>
        <SideNav />
        <div style={{ padding: '20px' }} className='w-100'>
          <div>
            <div className='rounded-3 row' style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
              <div className='col-md-12'>
                {/*searching for universities and registered students */}
                <div className="admin-dashboard rounded">
                  <h1>Registered Students Details</h1>

                  <section>
                    
                    <div className="table-container">
                      {/*   <table className="styled-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>University</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>*/}
                      {/*students.map((student) => (  *
                <tr >
                  <td>1005</td>
                  <td>Max</td>
                  <td>Max@gmail.com</td>
                  <td>Calicut University</td>
                  <td>BCA</td>
                </tr>
                <tr >
                  <td>1005</td>
                  <td>Max</td>
                  <td>Max@gmail.com</td>
                  <td>Calicut University</td>
                  <td>BCA</td>
                </tr>
                <tr >
                  <td>1005</td>
                  <td>Max</td>
                  <td>Max@gmail.com</td>
                  <td>Calicut University</td>
                  <td>BCA</td>
                </tr>
            {/**  ))}    
            </tbody>
          </table>*/}


                      {/**Material ui custom table */}


                      <Paper sx={{ height: 600, width: '100%', backgroundColor:'beige' }}>
                        <DataGrid
                          rows={rows}
                          columns={columns}
                          initialState={{ pagination: { paginationModel } }}
                          pageSizeOptions={[5, 10]}
                          checkboxSelection
                          sx={{ border: 0 }}
                        />
                      </Paper>

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

export default Studentdetails