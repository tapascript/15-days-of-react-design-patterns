import {useState} from "react";
import { useAuth } from "../hooks/useAuth";

export default function AuthPanel() {
  const { user, login, logout, isAuthenticated } = useAuth();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form.username, form.password);
  };

  return (
    <div className="m-2 p-1 bg-slate-900 rounded">
      <h2 className="text-3xl my-2">🧑‍💻 Authentication Panel</h2>

      {isAuthenticated ? (
        <>
          <p>Welcome, <strong>{user}</strong> 🎉</p>
          <button onClick={logout}>
            Logout
          </button>
        </>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="border rounded-xl p-1 my-3"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="border rounded-xl p-1"
            required
          />
          <button type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
}