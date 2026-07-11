import { useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddFood() {

    const navigate = useNavigate();

    const [food, setFood] = useState({
        foodName: "",
        category: "",
        quantity: "",
        location: "",
        expiryTime: "",
        status: "AVAILABLE"
    });

    const handleChange = (e) => {
        setFood({
            ...food,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            // Change this later after JWT/login session
            //const donorId = 1;
            const user = JSON.parse(localStorage.getItem("user"));
            const donorId = user.id;
            const response = await API.post(
                `/food/add/${donorId}`,
                food
            );

            alert(response.data);

            navigate("/my-food");

        } catch (error) {

            alert(error.response?.data?.message || "Failed to add food");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5" style={{ maxWidth: "600px" }}>

                <div className="card shadow p-4">

                    <h2 className="text-success mb-4">
                        Add Food
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            placeholder="Food Name"
                            name="foodName"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Category"
                            name="category"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            type="number"
                            placeholder="Quantity"
                            name="quantity"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Location"
                            name="location"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Expiry Time"
                            name="expiryTime"
                            onChange={handleChange}
                            required
                        />

                        <button className="btn btn-success w-100">
                            Add Food
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}

export default AddFood;