import React from 'react';
import DataTable from 'react-data-table-component';
import { useSelector } from 'react-redux';



function Employees(props) {
  const columns = [
    {
        name: 'First Name',
        selector: row => row.firstname,
        sortable: true,
    },
    {
        name: 'Last Name',
        selector: row => row.lastname,
        sortable: true,
    },
    {
      name: 'Start Date',
      selector: row => row.startDate,
      sortable: true,
    },
    {
      name: 'Department',
      selector: row => row.department,
      sortable: true,
    },
    {
      name: 'Date of Birth',
      selector: row => row.birthday,
      sortable: true,
    },
    {
      name: 'Street',
      selector: row => row.street,
      sortable: true,
    },
    {
      name: 'City',
      selector: row => row.city,
      sortable: true,
    },
    {
      name: 'State',
      selector: row => row.state,
      sortable: true,
    },
    {
      name: 'Zip Code',
      selector: row => row.zipcode,
      sortable: true,
    },
  ];

  const users = useSelector((state) => state.users.users);
  console.log(users)
  const data = users.map(user => ({
    "firstname": user.firstName,
    "lastname": user.lastName,
    "startDate": user.startDate.toLocaleDateString(),
    "department": user.department,
    "birthday": user.dateOfBirth.toLocaleDateString(),
    "street": user.street,
    "city": user.city,
    "state": user.state,
    "zipcode": user.zipCode,
  }))
  console.log("data",data)
  return (
    <div className='containerEmployee'>
      <div className='containerTitle'>
        <h1>Current Employees</h1>
      </div>
      <DataTable 
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
}

export default Employees;