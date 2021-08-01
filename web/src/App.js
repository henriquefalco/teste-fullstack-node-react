import React, { useState, useEffect } from 'react';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import Api from './services/Api'
import Modal from './components/Modal'
import Loader from './components/Loader'

import NavBar from './components/NavBar';
import VehicleList from './components/VehicleList'
import Details from './components/Details'
import AddVehicle from './components/AddVehicle';

const App = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [vehicleData, setVehicleData] = useState(undefined)
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    getVehicles()
  }, [])

  const getVehicles = () => {
    Api
      .get(`/veiculos/find`)
      .then((res) => {
        setVehicleData(res.data)
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
      })
  }

  return (
    <div>
      <NavBar />

      <div className='h-screen bg-gray-200 '>
        <div className='grid grid-cols-2 p-10'>
          <span className='p-2 text-xl font-bold text-gray-800 uppercase'>
            veículo
          </span>

          <div className='flex items-center justify-end col-span-1 p-2 mx-5'>
            <button
              type='button'
              onClick={() => setShowModal(true)}
            >
              <AddCircleIcon fontSize='large' />
            </button>
          </div>
        </div>

        <div className='grid grid-cols-2 px-10'>
          <div className='col-span-1 p-1 m-1'>
            <p className='font-sans'>
              Lista de veículos
            </p>

            {isLoading ? <Loader /> : <VehicleList vehicleData={vehicleData} setSelected={setSelected} />}

          </div>

          <div className='col-span-1 p-1 m-1'>
            <p className='font-sans'>
              Detalhes
            </p>

            {selected ? <Details vehicle={selected}/> : <div></div>}

          </div>

        </div>
      </div>

      {showModal && (
        <Modal handleCloseModal={setShowModal}>
          <AddVehicle handleCloseModal={setShowModal} />
        </Modal>
      )}
    </div>
  );
}

export default App;