import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <div className="container text-center mt-5">

        <h1 className="display-3 fw-bold text-success">
          🍱 FoodConnect
        </h1>

        <p className="lead mt-3">
          Connecting Surplus Food with NGOs and Volunteers
          to reduce food waste and fight hunger.
        </p>

        <div className="mt-4">

          <Link
            to="/register"
            className="btn btn-success btn-lg me-3"
          >
            Register
          </Link>

          <Link
            to="/login"
            className="btn btn-outline-success btn-lg"
          >
            Login
          </Link>

        </div>

      </div>

      <div className="container mt-5">

        <div className="row">

          <div className="col-md-4">
            <div className="card shadow p-3 text-center">
              <h3>❤️ Donors</h3>
              <p>Donate surplus food easily.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3 text-center">
              <h3>🏢 NGOs</h3>
              <p>Request food for communities.</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3 text-center">
              <h3>🚚 Volunteers</h3>
              <p>Deliver food safely and quickly.</p>
            </div>
          </div>

        </div>

      </div>

      <Footer />
    </>
  );
}

export default Home;