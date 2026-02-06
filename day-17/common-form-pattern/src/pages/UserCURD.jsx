import { useState } from "react";
import { Form } from "../components/form";

// Validation function for user form
const validateUser = (values) => {
    const errors = {};

    if (!values.name || values.name.trim() === "") {
        errors.name = "Name is required";
    } else if (values.name.length < 3) {
        errors.name = "Name must be at least 3 characters";
    }

    if (!values.email || values.email.trim() === "") {
        errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Invalid email address";
    }

    if (!values.role) {
        errors.role = "Role is required";
    }

    return errors;
};

export const UserCRUD = () => {
    const [users, setUsers] = useState([
        { id: 1, name: "John Doe", email: "john@example.com", role: "admin" },
        { id: 2, name: "Jane Smith", email: "jane@example.com", role: "user" },
    ]);
    const [editingUser, setEditingUser] = useState(null);
    const [showForm, setShowForm] = useState(false);

    const roleOptions = [
        { value: "admin", label: "Administrator" },
        { value: "user", label: "User" },
        { value: "guest", label: "Guest" },
    ];

    // CREATE
    const handleCreate = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
        const newUser = {
            id: Date.now(),
            ...values,
        };
        setUsers([...users, newUser]);
        setShowForm(false);
        alert("User created successfully!");
    };

    // UPDATE
    const handleUpdate = async (values) => {
        await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate API call
        setUsers(
            users.map((user) =>
                user.id === editingUser.id ? { ...user, ...values } : user,
            ),
        );
        setEditingUser(null);
        setShowForm(false);
        alert("User updated successfully!");
    };

    // DELETE
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            setUsers(users.filter((user) => user.id !== id));
            alert("User deleted successfully!");
        }
    };

    const handleEdit = (user) => {
        setEditingUser(user);
        setShowForm(true);
    };

    const handleCancel = () => {
        setEditingUser(null);
        setShowForm(false);
    };

    const handleAddNew = () => {
        setEditingUser(null);
        setShowForm(true);
    };

    return (
        <div className="flex flex-col">
            <h2 className="bg-slate-900 p-1 text-3xl">User Management (CRUD)</h2>

            {!showForm && (
                <button onClick={handleAddNew} className="bg-pink-500 w-32 p-1 rounded m-3 cursor-pointer">
                    Add New User
                </button>
            )}

            {showForm && (
                <div className="flex flex-col">
                    <h3 className="text-xl">{editingUser ? "Edit User" : "Create New User"}</h3>
                    <Form
                        initialValues={
                            editingUser || { name: "", email: "", role: "" }
                        }
                        onSubmit={editingUser ? handleUpdate : handleCreate}
                        validate={validateUser}
                    >
                        <Form.Field name="name" label="Full Name" required />
                        <Form.Field
                            name="email"
                            label="Email Address"
                            type="email"
                            required
                        />
                        <Form.Select
                            name="role"
                            label="Role"
                            options={roleOptions}
                            required
                        />
                        <Form.Buttons
                            submitText={
                                editingUser ? "Update User" : "Create User"
                            }
                            showReset={!editingUser}
                            onCancel={handleCancel}
                        />
                    </Form>
                </div>
            )}

            <div className="mt-3 overflow-x-auto p-3">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td className="space-x-1">
                                    <button
                                        onClick={() => handleEdit(user)}
                                        className="bg-blue-500 text-white p-1 rounded cursor-pointer"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user.id)}
                                        className="bg-red-500 text-white p-1 rounded cursor-pointer"
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
    );
};
