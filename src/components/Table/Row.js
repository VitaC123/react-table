import React from 'react';


const Row = props => {
  const { firstName, lastName, country, street, city, state, zip, phone } = props;
  return (
    <tr className='table-body-row'>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{country}</td>
      <td>{street}</td>
      <td>{city}</td>
      <td>{state}</td>
      <td>{zip}</td>
      <td>{phone}</td>
    </tr>
  );
}

export default Row;
