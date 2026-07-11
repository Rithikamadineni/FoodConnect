import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../services/api";
import Navbar from "../components/Navbar";

function Login() {

    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const response = await API.post("/auth/login", loginData);

            // Store logged-in user
            localStorage.setItem("user", JSON.stringify(response.data));

            alert("Login Successful!");

            const role = response.data.role;

            if (role === "DONOR") {
                navigate("/donor");
            }
            else if (role === "NGO") {
                navigate("/ngo");
            }
            else if (role === "VOLUNTEER") {
                navigate("/volunteer");
            }
            else if (role === "ADMIN") {
                navigate("/admin");
            }
            else {
                navigate("/");
            }

        } catch (error) {

            alert(error.response?.data?.message || "Login Failed");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5" style={{ maxWidth: "500px" }}>

                <div className="card shadow p-4">

                    <h2 className="text-center text-success mb-4">
                        Login
                    </h2>

                    <form onSubmit={handleSubmit}>

                        <input
                            type="email"
                            name="email"
                            className="form-control mb-3"
                            placeholder="Enter Email"
                            value={loginData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            className="form-control mb-3"
                            placeholder="Enter Password"
                            value={loginData.password}
                            onChange={handleChange}
                            required
                        />

                        <button
                            type="submit"
                            className="btn btn-success w-100"
                        >
                            Login
                        </button>

                    </form>

                    <p className="text-center mt-3">
                        Don't have an account?{" "}
                        <Link to="/register">
                            Register
                        </Link>
                    </p>

                </div>

            </div>
        </>
    );
}

export default Login;