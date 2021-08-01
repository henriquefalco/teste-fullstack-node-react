import React from 'react';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

const VehicleCard = ({ item, setSelected }) => {
    return (
        <div className='grid grid-cols-2 p-2 my-2 bg-white rounded cursor-pointer' onClick={() => setSelected(item)}>
            <div className='flex flex-col col-span-1'>
                <span className='font-semibold'> {item.marca} </span>
                <span className='text-green-500'> {item.veiculo}</span>
                <span className='text-blue'> {item.ano}</span>
            </div>
            <div className='flex items-center justify-end col-span-1 p-2 m-2'>
                {item.vendido ? <LocalOfferIcon className='text-green-500' /> : <LocalOfferIcon />}

            </div>
        </div>
    );
}

export default VehicleCard;