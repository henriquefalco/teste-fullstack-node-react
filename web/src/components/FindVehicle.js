import React, { useState, useEffect, useCallback } from 'react';

import Api from '../services/Api'
import useDebounce from '../services/useDebounce'
import Loader from './Loader';
import RotateRightIcon from '@material-ui/icons/RotateRight'


const FindVehicle = ({ setVehicleData, getVehicles }) => {

  const [isLoading, setIsLoading] = useState(false)
  const [vehicles, setVehicles] = useState('')

  const [results, setResults] = useState([])

  const debounceSearch = useDebounce(vehicles, 1000);

  const searchVehicle = useCallback(async () => {
    if (vehicles !== "") {
      setIsLoading(true)
      searchVehiclesByName()
    } else { getVehicles() }
  }, [debounceSearch]);

  useEffect(() => {
    searchVehicle();
  }, [debounceSearch]);

  const searchVehiclesByName = () => {
    Api
      .get(`/veiculos/find?vehicle=${vehicles}`)
      .then((res) => {
        console.log(res.data)
        setResults(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    if (results.length !== 0) {
      setVehicleData(results)
    } else {
      getVehicles()
    }
  }, [results])

  return (
    <div className='flex'>
      <input
        className='p-2 m-2 bg-gray-800'
        placeholder='BUSCAR por um veículo  outline-none'
        onChange={(e) => setVehicles(e.target.value)}
      />
      {isLoading && (
        <span className='flex items-center text-orange-500 animate-spin'>
          <RotateRightIcon />
        </span>
      )}
    </div>
  );
}

export default FindVehicle;