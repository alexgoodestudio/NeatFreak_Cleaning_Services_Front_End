import React from 'react';
import SubscriberTable from './SubscriberTable';
import EstimateTable from './EstimateTable';


const EmployeeHome = () => {

  return (
    <div className=" mt-3 d-flex row">
        <div className='col-2'></div>
        <div className='col-4'>
          <EstimateTable />
        </div>
        <div className='col-4'>
          <SubscriberTable />
        </div>
        <div className='col-2'></div>
    </div>
  );
};

export default EmployeeHome;
