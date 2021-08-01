import React from 'react';

const AddVehicle = ({ handleCloseModal }) => {
    return (
        <div>
            <span className='text-3xl font-semibold '>
                Novo Veículo
            </span>

            <div className='grid grid-cols-2 py-3 space-x-3'>
                <div className='flex flex-col'>
                    Veículo
                    <input />
                </div>
                <div className='flex flex-col'>
                    Veículo
                    <input />
                </div>
            </div>
            <div className='grid grid-cols-2 py-3 space-x-3'>
                <div className='flex flex-col'>
                    Ano
                    <input />
                </div>
                <div className='flex flex-col'>
                    Vendido
                    checkbox
                </div>
            </div>

            <div className='flex flex-col'>
                descrição
                <textarea id="details" name="details"
                    rows="5" />
            </div>

            <div className='flex items-center justify-end py-2'>
                <button
                    type='button'
                    className='flex items-center justify-center w-32 p-2 m-2 font-semibold text-white uppercase bg-gray-600'>
                    add
                </button>
                <button
                    onClick={() =>  handleCloseModal(false)}
                    type='button'
                    className='flex items-center justify-center w-32 p-2 m-2 font-semibold text-white uppercase bg-gray-600'>
                    fechar
                </button>
            </div>
        </div>
    );
}

export default AddVehicle;