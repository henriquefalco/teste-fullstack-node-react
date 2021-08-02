import React from 'react';
import EditIcon from '@material-ui/icons/Edit';

const Details = ({ editModal, vehicle }) => {
    console.log(vehicle)
    return (
        <div className='p-3 m-2 bg-white rounded'>
            <div>
                <span className='text-xl font-semibold text-green-500 '>
                    {vehicle.veiculo}
                </span>
            </div>

            <div className='grid grid-cols-2 py-5'>
                <div className='flex flex-col '>
                    <span className='font-semibold'>
                        Marca
                    </span>
                    <span className='text-gray-400'>
                        {vehicle.marca}
                    </span>
                </div>
                <div className='flex flex-col'>
                    <span className='font-semibold'>
                        Ano
                    </span>
                    <span className='text-gray-400'>
                        {vehicle.ano}
                    </span>
                </div>
            </div>

            <div className='py-5'>
                <span>
                    {vehicle.descricao}
                </span>
            </div>

            <hr />

            <div>
                <button
                    className='flex items-center w-32 p-2 m-2 font-semibold text-white uppercase bg-gray-600'
                    type='button'
                    onClick={() => editModal(true)}
                >
                    <EditIcon className='m-1' />
                    <span className='m-1'>editar</span>
                </button>
            </div>

        </div>
    );
}

export default Details;