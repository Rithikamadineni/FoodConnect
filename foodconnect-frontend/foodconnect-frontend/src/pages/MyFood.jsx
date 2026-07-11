import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function MyFood() {

    const [foods, setFoods] = useState([]);
    const navigate = useNavigate();

    //const donorId = 1; // Temporary until login session/JWT
    const user = JSON.parse(localStorage.getItem("user"));
    const donorId = user.id;
    useEffect(() => {
        loadFood();
    }, []);

    const loadFood = async () => {
    try {
        const response = await API.get(`/food/my/${donorId}`);

        console.log("API Response:", response.data);

        setFoods(response.data);
    } catch (error) {
        console.log(error);
    }
};

    const deleteFood = async (id) => {

        const confirmDelete = window.confirm("Are you sure you want to delete this food listing?");

        if (!confirmDelete) return;

        try {

            await API.delete(`/food/delete/${id}`);

            alert("Food Deleted Successfully");

            loadFood();

        } catch (error) {

            alert(error.response?.data?.message || "Delete Failed");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-success mb-4">
                    🍱 My Food Listings
                </h2>

                <div className="row">

                    {foods.length === 0 ? (
                        <div className="text-center">
                            <h5>No food listings found.</h5>
                        </div>
                    ) : (

                        foods.map((food) => (

                            <div className="col-md-4 mb-4" key={food.id}>

                                <div className="card shadow h-100">

                                    <div className="card-body">

                                        <h4 className="text-success">
                                            {food.foodName}
                                        </h4>

                                        <hr />

                                        <p><b>Category:</b> {food.category}</p>

                                        <p><b>Quantity:</b> {food.quantity}</p>

                                        <p><b>Location:</b> {food.location}</p>

                                        <p><b>Expiry:</b> {food.expiryTime}</p>

                                        <p><b>Status:</b> {food.status}</p>

                                        <button
                                            className="btn btn-warning w-100 mb-2"
                                            onClick={() => navigate(`/edit-food/${food.id}`)}
                                        >
                                            ✏️ Edit
                                        </button>

                                        <button
                                            className="btn btn-danger w-100"
                                            onClick={() => deleteFood(food.id)}
                                        >
                                            🗑 Delete
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

export default MyFood;