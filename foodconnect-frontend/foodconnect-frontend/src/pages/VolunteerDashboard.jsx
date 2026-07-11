import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function VolunteerDashboard() {
    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-success mb-4">
                    🚚 Volunteer Dashboard
                </h2>

                <div className="row">

                    <div className="col-md-6 mb-4">
                        <div className="card shadow p-4 text-center">

                            <h4>📦 Accept Delivery</h4>

                            <Link
                                to="/volunteer-deliveries"
                                className="btn btn-success mt-3"
                            >
                                View Requests
                            </Link>

                        </div>
                    </div>

                    <div className="col-md-6 mb-4">
                        <div className="card shadow p-4 text-center">

                            <h4>🚚 My Deliveries</h4>

                            <Link
                                to="/my-deliveries"
                                className="btn btn-primary mt-3"
                            >
                                Manage Deliveries
                            </Link>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}

export default VolunteerDashboard;