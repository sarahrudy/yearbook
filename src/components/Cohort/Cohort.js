import React from 'react';
import Person from '../Person/Person';
import './Cohort.css';

const Cohort = ({staff}) => {
  const allStaff = staff.map(staffMember => { 
    return <Person 
        key={staffMember.id} 
        id={staffMember.id} 
        name={staffMember.name} 
        quote={staffMember.quote} 
        superlative={staffMember.superlative} 
        photo={staffMember.photo} 
      />

  })
  return (
    <div className="cohort-card">
      <h2>what's up party people</h2>
      <div>{allStaffMember}</div>
    </div>
  )
}


export default Cohort;
