import { Link, useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const logout = () => {

        localStorage.removeItem("user");

        alert("Logged out successfully!");

        navigate("/login");

    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success shadow">

            <div className="container">

                <Link className="navbar-brand fw-bold" to="/">
                    🍱 FoodConnect
                </Link>

                <div className="navbar-nav ms-auto align-items-center">

                    <Link className="nav-link" to="/">
                        Home
                    </Link>

                    <Link className="nav-link" to="/donor">
                        Donor
                    </Link>

                    <Link className="nav-link" to="/ngo">
                        NGO
                    </Link>

                    <Link className="nav-link" to="/volunteer">
                        Volunteer
                    </Link>

                    <Link className="nav-link" to="/admin">
                        Admin
                    </Link>

                    {!user ? (
                        <>
                            <Link className="nav-link" to="/login">
                                Login
                            </Link>

                            <Link className="nav-link" to="/register">
                                Register
                            </Link>
                        </>
                    ) : (
                        <>
                            <span className="navbar-text text-white ms-3 me-3">
                                👋 {user.fullName}
                            </span>

                            <button
                                className="btn btn-outline-light btn-sm"
                                onClick={logout}
                            >
                                Logout
                            </button>
                        </>
                    )}

                </div>

            </div>

        </nav>
    );
}

export default Navbar;