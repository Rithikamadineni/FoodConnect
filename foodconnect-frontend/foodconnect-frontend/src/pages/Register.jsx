import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import API from "../services/api";

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        fullName: "",
        email: "",
        password: "",
        phone: "",
        role: "DONOR",
        organizationName: "",
        registrationNumber: "",
        city: "",
        address: ""
    });

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/auth/register", user);

            alert(response.data);

            navigate("/login");

        } catch (error) {

            alert(error.response?.data?.message || "Registration Failed");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5" style={{ maxWidth: "600px" }}>

                <div className="card shadow p-4">

                    <h2 className="text-center text-success mb-4">
                        Register
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            className="form-control mb-3"
                            placeholder="Full Name"
                            name="fullName"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            required
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Phone"
                            name="phone"
                            onChange={handleChange}
                            required
                        />

                        <select
                            className="form-select mb-3"
                            name="role"
                            onChange={handleChange}
                        >
                            <option value="DONOR">Donor</option>
                            <option value="NGO">NGO</option>
                            <option value="VOLUNTEER">Volunteer</option>
                        </select>

                        <input
                            className="form-control mb-3"
                            placeholder="Organization Name"
                            name="organizationName"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="Registration Number"
                            name="registrationNumber"
                            onChange={handleChange}
                        />

                        <input
                            className="form-control mb-3"
                            placeholder="City"
                            name="city"
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            className="form-control mb-3"
                            placeholder="Address"
                            name="address"
                            onChange={handleChange}
                            required
                        />

                        <button className="btn btn-success w-100">
                            Register
                        </button>

                    </form>

                    <p className="text-center mt-3">
                        Already have an account?{" "}
                        <Link to="/login">Login</Link>
                    </p>

                </div>

            </div>
        </>
    );
}

export default Register;