import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function MyDeliveries() {

    const [deliveries, setDeliveries] = useState([]);

    //const volunteerName = "Rahul"; // Temporary
    const user = JSON.parse(localStorage.getItem("user"));
    const volunteerName = user.fullName;
    useEffect(() => {
        loadDeliveries();
    }, []);

  const loadDeliveries = async () => {
    try {
        const response = await API.get(`/delivery/my/${volunteerName}`);

        console.log("Deliveries:", response.data);

        setDeliveries(response.data);

    } catch (error) {
        console.log(error);
    }
};

    const pickup = async (id) => {

        try {

            const response = await API.put(`/delivery/pickup/${id}`);

            alert(response.data);

            loadDeliveries();

        } catch (error) {

            alert("Pickup Failed");

        }

    };

    const deliver = async (id) => {

        try {

            const response = await API.put(`/delivery/deliver/${id}`);

            alert(response.data);

            loadDeliveries();

        } catch (error) {

            alert("Delivery Failed");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-success mb-4">
                    🚚 My Deliveries
                </h2>

                <div className="row">

                    {deliveries.map((delivery) => (

                        <div className="col-md-4 mb-4" key={delivery.id}>

                            <div className="card shadow">

                                <div className="card-body">

                                    <h5>Request ID: {delivery.requestId}</h5>

                                    <p><b>Status:</b> {delivery.status}</p>

                                    <button
                                        className="btn btn-warning w-100 mb-2"
                                        onClick={() => pickup(delivery.id)}
                                    >
                                        Mark Picked Up
                                    </button>

                                    <button
                                        className="btn btn-primary w-100"
                                        onClick={() => deliver(delivery.id)}
                                    >
                                        Mark Delivered
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </>
    );
}

export default MyDeliveries;