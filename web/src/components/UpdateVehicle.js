import React, { useEffect, useState } from 'react';
import Api from '../services/Api';
import Loader from './Loader';

const AddVehicle = ({ handleCloseModal, vehicle, getVehicles }) => {
  const [screen, setScreen] = useState('addVehicle')
  const [isLoading, setIsLoading] = useState('')
  const [message, setMessage] = useState('')

  const [veiculo, setVeiculo] = useState(vehicle.veiculo)
  const [marca, setMarca] = useState(vehicle.marca)
  const [ano, setAno] = useState(vehicle.ano)
  const [descricao, setDescricao] = useState(vehicle.descricao)
  const [vendido, setVendido] = useState(vehicle.vendido)

  const [yearMessage, setYearMessage] = useState('')

  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  const postVehicle = (payload) => {
    Api
      .put(`/veiculos/${vehicle.id}`, payload)
      .then((res) => {
        setScreen('success')
        setMessage('Veículo atualizado com sucesso!')
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error)
        setIsLoading(false)
        setMessage('Ops, ocorreu um erro!')
        setScreen('warning')
      })
  }

  const handleSubmit = () => {
    if (veiculo.length === 0 || marca.length === 0 || !isNumeric(ano) || descricao.length === 0) {
      setMessage('Todos os campos são obrigatórios!')
    } else {
      setIsLoading(true)

      const payload = {
        veiculo: veiculo,
        marca: marca,
        ano: ano,
        descricao: descricao,
        vendido: vendido,
        cod_fipe: ''
      }
      postVehicle(payload)
    }
  }

  const closeAndReload = () => {
    handleCloseModal(false)
    getVehicles()
  }

  useEffect(() => {
    setMessage('')
  }, [veiculo, marca, ano, descricao])

  useEffect(() => {
    if (!isNumeric(ano)) {
      setYearMessage('Este campo deve ser numérico...')
    } else {
      setYearMessage('')
    }
  }, [ano])


  return isLoading ? <Loader /> : (
    <>
      {screen === 'addVehicle' && (
        <>
          <div className='flex flex-col p-3'>
            <span className='text-3xl font-semibold '>
              Novo Veículo
            </span>

            <div className='grid grid-cols-2 py-10 space-x-3'>
              <div className='flex flex-col'>
                <span className='font-semibold text-gray-500'> Veículo </span>
                <input
                  className='bg-gray-200 border-b border-gray-500 outline-none'
                  value={veiculo}
                  onChange={(e) => setVeiculo(e.target.value)}
                />
              </div>

              <div className='flex flex-col'>
                <span className='font-semibold text-gray-500'> Marca </span>
                <input
                  className='bg-gray-200 border-b border-gray-500 outline-none'
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                />
              </div>
            </div>

            <div className='grid grid-cols-2 py-5 space-x-3'>
              <div className='flex flex-col'>
                Ano
                <input
                  onChange={(e) => setAno(e.target.value)}
                  maxLength='4'
                  value={ano}
                  className='bg-gray-200 border-b border-gray-500 outline-none'
                />
                {!isNumeric.ano ?
                  <span className='text-sm italic text-red-600'>
                    {yearMessage}
                  </span> : ''}
              </div>

              <div className='flex flex-col'>
                <span className='font-semibold text-gray-500'> Vendido </span>
                <input type="checkbox"
                  className='w-5 h-5 px-2 mx-2'
                  value={vendido}
                  onChange={(e) => setVendido(!vendido)}
                />
              </div>
            </div>

            <div className='flex flex-col'>
              <span className='font-semibold text-gray-500'> Descrição </span>
              <textarea
                className='p-2 bg-gray-200 border-b border-gray-500 '
                onChange={(e) => setDescricao(e.target.value)}
                value={descricao}
                rows="5" />
            </div>

            <div className='flex justify-center p-2 m-2 text-xl font-bold text-red-600'> {message} </div>
          </div>

          <div className='flex items-center self-end justify-end p-2'>
            <button
              className='flex items-center justify-center w-32 p-2 m-2 font-semibold text-white uppercase bg-gray-600'
              type='button'
              onClick={() => handleSubmit()}>
              atualizar
            </button>

            <button
              onClick={() => handleCloseModal(false)}
              type='button'
              className='flex items-center justify-center w-32 p-2 m-2 font-semibold text-white uppercase bg-gray-600'>
              fechar
            </button>
          </div>
        </>
      )}

      {screen === 'warning' && (
        <div className='flex flex-col items-center justify-center'>
          <span className='p-2 m-2 text-xl font-semibold text-red-600 '>
            {message}
          </span>
          <button
            onClick={() => handleCloseModal(false)}
            type='button'
            className='items-center justify-center w-32 p-2 m-2 text-sm font-semibold text-white uppercase bg-gray-600 rounded'>
            fechar
          </button>
        </div>
      )}

      {screen === 'success' && (
        <div className='flex items-center justify-center'>
          <span className='p-2 m-2 text-xl font-semibold text-green-600 '>
            {message}
          </span>

          <button
            onClick={() => closeAndReload()}
            type='button'
            className='items-center justify-center w-32 p-2 m-2 text-sm font-semibold text-white uppercase bg-gray-600 rounded'>
            fechar
          </button>
        </div>
      )}
    </>

  );
}

export default AddVehicle;