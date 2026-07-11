import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import API from "../services/api";

function ManageUsers() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        try {
            const response = await API.get("/admin/users");
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const approveUser = async (id) => {

        try {

            const response = await API.put(`/admin/approve/${id}`);

            alert(response.data);

            loadUsers();

        } catch (error) {

            alert(error.response?.data?.message || "Approval Failed");

        }

    };

    const deleteUser = async (id) => {

        if (!window.confirm("Delete this user?")) return;

        try {

            const response = await API.delete(`/admin/users/${id}`);

            alert(response.data);

            loadUsers();

        } catch (error) {

            alert(error.response?.data?.message || "Delete Failed");

        }

    };

    return (
        <>
            <Navbar />

            <div className="container mt-5">

                <h2 className="text-success mb-4">
                    👥 Manage Users
                </h2>

                <div className="table-responsive">

                    <table className="table table-bordered table-hover">

                        <thead className="table-success">

                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>

                        </thead>

                        <tbody>

                            {users.map((user) => (

                                <tr key={user.id}>

                                    <td>{user.fullName}</td>

                                    <td>{user.email}</td>

                                    <td>{user.role}</td>

                                    <td>{user.status}</td>

                                    <td>

                                        <button
                                            className="btn btn-success btn-sm me-2"
                                            onClick={() => approveUser(user.id)}
                                        >
                                            Approve
                                        </button>

                                        <button
                                            className="btn btn-danger btn-sm"
                                            onClick={() => deleteUser(user.id)}
                                        >
                                            Delete
                                        </button>

                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>
        </>
    );
}

export default ManageUsers;