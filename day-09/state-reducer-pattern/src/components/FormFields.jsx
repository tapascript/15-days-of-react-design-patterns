
import { useFormContext } from "../hooks/useFormContext";

export default function FormFields() {
  const { state, dispatch } = useFormContext();

  const handleChange = (e) => {
    dispatch({
      type: "CHANGE_FIELD",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  return (
    <div className="flex flex-col space-y-3">
      <input
        name="name"
        value={state.values.name}
        onChange={handleChange}
        placeholder="Enter your name"
        className="border p-2 rounded"
      />
      <input
        name="email"
        value={state.values.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="border p-2 rounded"
      />

      {Object.entries(state.errors).map(([field, msg]) => (
        <p key={field} className="text-red-600 text-sm">
          {msg}
        </p>
      ))}
    </div>
  );
}