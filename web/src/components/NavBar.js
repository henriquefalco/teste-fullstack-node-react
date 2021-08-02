import React from 'react';

import PersonPinIcon from '@material-ui/icons/PersonPin';
import FindVehicle from './FindVehicle';

const NavBar = ({ setVehicleData, isLoading, setIsLoading, getVehicles }) => {
  return (

    <div className='grid h-full grid-cols-2 '>
      <div className='flex items-center px-10 py-3 bg-gray-600 '>
        <PersonPinIcon fontSize="large" style={{ color: 'FFF' }} />
        <span className='p-1 text-xl font-semibold text-white uppercase'>
          fullstack
        </span>
      </div>

      <div className='flex items-center p-3 text-gray-300 bg-gray-800'>
        <FindVehicle
          setVehicleData={setVehicleData}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          getVehicles={getVehicles}
        />
      </div>
    </div>
  );
}

export default NavBar;