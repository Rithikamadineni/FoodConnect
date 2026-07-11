import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function MyRequests() {

    const [requests, setRequests] = useState([]);

    // Temporary until login/JWT
    //const ngoName = "Helping Hands";
    const user = JSON.parse(localStorage.getItem("user"));
    const ngoName = user.organizationName || user.fullName;

    useEffect(() => {
        loadRequests();
    }, []);

    const loadRequests = async () => {

        try {

            const response = await API.get(`/request/my/${ngoName}`);

            setRequests(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const cancelRequest = async (id) => {

        const confirmCancel = window.confirm("Cancel this request?");

        if (!confirmCancel) return;

        try {

            const response = await API.put(`/request/cancel/${id}`);

            alert(response.data);

            loadRequests();

        } catch (error) {

            alert(error.response?.data?.message || "Cancel Failed");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-success mb-4">
                    📋 My Food Requests
                </h2>

                <div className="row">

                    {requests.length === 0 ? (

                        <div className="text-center">
                            <h5>No Requests Found</h5>
                        </div>

                    ) : (

                        requests.map((request) => (

                            <div className="col-md-4 mb-4" key={request.id}>

                                <div className="card shadow">

                                    <div className="card-body">

                                        <h5>Food ID: {request.foodId}</h5>

                                        <p>
                                            <b>NGO:</b> {request.ngoName}
                                        </p>

                                        <p>
                                            <b>Contact:</b> {request.contactNumber}
                                        </p>

                                        <p>
                                            <b>Status:</b> {request.status}
                                        </p>

                                        <button
                                            className="btn btn-danger w-100"
                                            onClick={() => cancelRequest(request.id)}
                                        >
                                            Cancel Request
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))

                    )}

                </div>

            </div>

        </>
    );
}

export default MyRequests;