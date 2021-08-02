import React, { useEffect, useState } from 'react';
import VehicleCard from './VehicleCard';

const VehicleList = ({ vehicleData, setSelected }) => {
    const [vehicles, setVehicles] = useState(undefined)

    const generateList = () => {
        const cards = []

        if (vehicleData) {
            vehicleData.map((item, index) => {
                cards.push(<VehicleCard key={item.id} item={item} setSelected={setSelected} />)
            })
        }
        return cards
    }

    useEffect(() => {
        const cards = generateList()
        setVehicles(cards)
    }, [vehicleData])

    return (
        <div >
            {vehicles}
        </div>
    );
}

export default VehicleList;