import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function NgoDashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="text-success mb-4">
          🏢 NGO Dashboard
        </h2>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="card shadow p-4 text-center">
              <h4>🍱 Available Food</h4>

              <Link
                to="/request-food"
                className="btn btn-success mt-3"
              >
                Request Food
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow p-4 text-center">
              <h4>📋 My Requests</h4>

              <Link
                to="/my-requests"
                className="btn btn-primary mt-3"
              >
                View Requests
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default NgoDashboard;