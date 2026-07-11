import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function AdminDashboard() {
    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <div className="text-center mb-5">
                    <h2 className="text-success fw-bold">
                        👨‍💼 Admin Dashboard
                    </h2>
                    <p className="text-muted">
                        Manage users, approvals, and monitor the FoodConnect platform.
                    </p>
                </div>

                <div className="row">

                    <div className="col-md-6 mb-4">
                        <div className="card shadow border-0 text-center p-4">
                            <div style={{ fontSize: "50px" }}>👥</div>
                            <h4 className="mt-3">Manage Users</h4>
                            <p className="text-muted">
                                View, approve, and delete registered users.
                            </p>

                            <Link
                                to="/manage-users"
                                className="btn btn-success"
                            >
                                View Users
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card shadow border-0 text-center p-4">
                            <div style={{ fontSize: "50px" }}>📊</div>
                            <h4 className="mt-3">System Overview</h4>
                            <p className="text-muted">
                                Monitor users, food listings, and requests.
                            </p>

                            <button
                                className="btn btn-outline-success"
                                disabled
                            >
                                Coming Soon
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default AdminDashboard;