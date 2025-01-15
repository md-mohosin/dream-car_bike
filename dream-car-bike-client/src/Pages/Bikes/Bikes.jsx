import axios from "axios";
import { useState } from "react";
import Bike from "../Bike/Bike";


const Bikes = () => {

    const [bikes, setBikes] = useState([])

    axios('http://localhost:5000/bike')
        .then(data => {
            setBikes(data.data)
        })
    return (
        <div>
            <h1>Bikes : {bikes.length}</h1>
            <div className="grid grid-cols-4 gap-3">
                {
                    bikes.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                }
            </div>
        </div>
    );
};

export default Bikes;