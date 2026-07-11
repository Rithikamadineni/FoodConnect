import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function VolunteerDeliveries() {

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        loadRequests();
    }, []);

    const loadRequests = async () => {
        try {
            const response = await API.get("/request/all");
            setRequests(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const acceptDelivery = async (requestId) => {

        const volunteerName = prompt("Enter Volunteer Name");
        if (!volunteerName) return;

        const volunteerPhone = prompt("Enter Volunteer Phone");
        if (!volunteerPhone) return;

        try {

            const delivery = {
                requestId,
                volunteerName,
                volunteerPhone
            };

            const response = await API.post("/delivery/accept", delivery);

            alert(response.data);

        } catch (error) {

            alert(error.response?.data?.message || "Failed");

        }
    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-success mb-4">
                    📦 Available Delivery Requests
                </h2>

                <div className="row">

                    {requests.map((request) => (

                        <div className="col-md-4 mb-4" key={request.id}>

                            <div className="card shadow">

                                <div className="card-body">

                                    <h5>Food ID: {request.foodId}</h5>

                                    <p><b>NGO:</b> {request.ngoName}</p>

                                    <p><b>Contact:</b> {request.contactNumber}</p>

                                    <p><b>Status:</b> {request.status}</p>

                                    <button
                                        className="btn btn-success w-100"
                                        onClick={() => acceptDelivery(request.id)}
                                    >
                                        Accept Delivery
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

export default VolunteerDeliveries;