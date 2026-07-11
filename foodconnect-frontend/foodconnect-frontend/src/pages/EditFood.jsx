import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function EditFood() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [food, setFood] = useState({
        foodName: "",
        category: "",
        quantity: "",
        location: "",
        expiryTime: "",
        status: ""
    });

    useEffect(() => {
        loadFood();
    }, []);

    const loadFood = async () => {
        try {
            const response = await API.get("/food/all");

            const selectedFood = response.data.find(f => f.id === Number(id));

            if (selectedFood) {
                setFood(selectedFood);
            }

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        setFood({
            ...food,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await API.put(`/food/update/${id}`, food);

            alert("Food Updated Successfully");

            navigate("/my-food");

        } catch (error) {

            alert("Update Failed");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5" style={{ maxWidth: "600px" }}>

                <div className="card shadow p-4">

                    <h2 className="text-success mb-4">
                        Edit Food
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            name="foodName"
                            value={food.foodName}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="category"
                            value={food.category}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="quantity"
                            type="number"
                            value={food.quantity}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="location"
                            value={food.location}
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            name="expiryTime"
                            value={food.expiryTime}
                            onChange={handleChange}
                        />

                        <button className="btn btn-success w-100">
                            Update Food
                        </button>

                    </form>

                </div>

            </div>
        </>
    );
}

export default EditFood;