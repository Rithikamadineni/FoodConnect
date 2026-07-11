import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function RequestFood() {

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        loadFood();
    }, []);

    const loadFood = async () => {
        try {
            const response = await API.get("/food/all");
            setFoods(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const requestFood = async (foodId) => {


        const user = JSON.parse(localStorage.getItem("user"));

        const ngoName = user.organizationName || user?.fullName;
        const contactNumber = user.phone;


        const request = {
            foodId,
            ngoName,
            contactNumber,
            status: "PENDING"
        };

        try {

            const response = await API.post("/request/add", request);

            alert(response.data);

        } catch (error) {

            alert(error.response?.data?.message || "Request Failed");

        }
    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-success mb-4">
                    🍱 Available Food
                </h2>

                <div className="row">

                    {foods.map((food) => (

                        <div className="col-md-4 mb-4" key={food.id}>

                            <div className="card shadow h-100">

                                <div className="card-body">

                                    <h4>{food.foodName}</h4>

                                    <p><b>Category:</b> {food.category}</p>

                                    <p><b>Quantity:</b> {food.quantity}</p>

                                    <p><b>Location:</b> {food.location}</p>

                                    <p><b>Expiry:</b> {food.expiryTime}</p>

                                    <button
                                        className="btn btn-success w-100"
                                        onClick={() => requestFood(food.id)}
                                    >
                                        Request Food
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

export default RequestFood;