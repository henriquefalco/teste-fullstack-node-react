import React, { useEffect, useState } from 'react';
import VehicleCard from './VehicleCard';

const VehicleList = ({ vehicleData, setSelected }) => {
    const [vehicles, setVehicles] = useState(undefined)

    useEffect(() => {
        generateList()
    }, [vehicleData])

    const generateList = () => {
        const cards = []
        vehicleData.map((item, index) => {
            cards.push(<VehicleCard key={item.id} item={item} setSelected={setSelected}/>)
        })
        setVehicles(cards)
    }

    return (
        <div >
            {vehicles}
        </div>
    );
}

export default VehicleList;