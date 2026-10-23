
import { useState } from "react";

function AddEmployee({ onAdded }) {
  const [form, setForm] = useState({
    name: "",
    department: "",
    salary: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Saving...");

    try {
      const res = await fetch(
        "http://localhost:8080/api/employees",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: form.name,
            department: form.department,
            salary: Number(form.salary)
          })
        }
      );

      if (!res.ok) {
        throw new Error("Failed to add: " + res.status);
      }
      const saved = await res.json();
      setMessage("Saved with id " + saved.id);
      setForm({
        name: "",
        department: "",
        salary: ""
      });
      onAdded(saved);
    } catch (err) {
      setMessage(err.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="department"
        placeholder="Department"
        value={form.department}
        onChange={handleChange}
        required
      />

      <input
        name="salary"
        type="number"
        placeholder="Salary"
        value={form.salary}
        onChange={handleChange}
        required
      />

      <button type="submit">Add Employee</button>
      <p>{message}</p>
    </form>
  );
}

export default AddEmployee;
