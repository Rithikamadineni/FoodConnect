import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

function DonorDashboard() {
  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <h2 className="text-success mb-4">
          ❤️ Donor Dashboard
        </h2>

        <div className="row">

          <div className="col-md-6 mb-4">
            <div className="card shadow text-center p-4">
              <h4>Add Food</h4>

              <Link
                className="btn btn-success mt-3"
                to="/add-food"
              >
                Add Food
              </Link>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow text-center p-4">
              <h4>My Food Listings</h4>

              <Link
                className="btn btn-primary mt-3"
                to="/my-food"
              >
                View Food
              </Link>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default DonorDashboard;