// import { useState  } from "react";
// import StudentCard from "./StudentCard";
// function StudentList(){
//     const [students, setStudents] = useState([
//     { id: 1, name: "Arun", department: "CSE", marks: 85 },
//     { id: 2, name: "Bala", department: "ECE", marks: 72 },
//     { id: 3, name: "Chitra", department: "CSE", marks: 91 },
//   ]);
//   // add operation
//   const addStudent = () => {
//     const newStudent = { id: Date.now(), name: "Divya", department: "IT", marks: 78 };
//     setStudents([...students, newStudent]);
//   };
//   //delete student
//   const deleteStudent=(id)=>{
//    setStudents(students.filter((s)=>s.id!==id));
//   };

//   //update marks
//  const updateMarks = (id) => {
//   setStudents(students.map((s)=>s.id==id?{...s,marks: 90 } : s));
// };
// return (
//     <div>
//       <button onClick={addStudent}>Add Student</button>

//       {students.map((s) => (
//         <div key={s.id}>
//           <StudentCard name={s.name} department={s.department} marks={s.marks} />
//           <button onClick={() => updateMarks(s.id)}>Set marks to 90</button>
//           <button onClick={() => deleteStudent(s.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StudentList;


// import StudentCard from "./StudentCard";
// function StudentList({ students, onDelete }) {
//   if (students.length === 0) return <p>No students found</p>;
//   return (
//     <div>
//       {students.map((s) => (
//         <div key={s.id}>
//           <StudentCard name={s.name} department={s.department} marks={s.marks} />
//           <button onClick={() => onDelete(s.id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default StudentList;

// import { useEffect, useState } from "react";

// function StudentList() {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   useEffect(() => {  fetch("http://localhost:8080/api/employees")
//       .then((res) => {
//         if (!res.ok) throw new Error("Server error: " + res.status);
//         return res.json();
//       })
//       .then((data) => setStudents(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;
//   return (
//     <ul>
//       {students.map((s) => (
//         <li key={s.id}>
//           {s.name} - {s.department} -{s.salary}
//         </li>
//       ))}
//     </ul>
//   );
// }
// export default StudentList;

// import { useState } from "react";

// function StudentList({ employees, onDelete, onUpdate }) {
//   const [editId, setEditId] = useState(null);
//   const [form, setForm] = useState({ name: "", department: "", salary: "" });

//   if (employees.length === 0) return <p>No employees found</p>;

//   const startEdit = (e) => {
//     setEditId(e.id);
//     setForm({ name: e.name, department: e.department, salary: e.salary });
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   const handleSave = () => {
//     onUpdate(editId, {
//       name: form.name,
//       department: form.department,
//       salary: Number(form.salary),
//     });
//     setEditId(null);
//   };

//   return (
//     <ul>
//       {employees.map((e) => (
//         <li key={e.id}>
//           {editId === e.id ? (
//             <>
//               <input name="name" value={form.name} onChange={handleChange} />
//               <input name="department" value={form.department} onChange={handleChange} />
//               <input name="salary" type="number" value={form.salary} onChange={handleChange} />
//               <button onClick={handleSave}>Save</button>
//               <button onClick={() => setEditId(null)}>Cancel</button>
//             </>
//           ) : (
//             <>
//               {e.name} - {e.department} - {e.salary}{" "}
//               <button onClick={() => startEdit(e)}>Edit</button>
//               <button onClick={() => onDelete(e.id)}>Delete</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }
// export default StudentList;

// import { useState } from "react";

// function StudentList({ employees, onUpdate, onDelete }) {
//   const [editId, setEditId] = useState(null);
//   const [form, setForm] = useState({ name: "", department: "", salary: "" });

//   if (employees.length === 0) return <p>No employees found</p>;

//   const startEdit = (e) => {
//     setEditId(e.id);
//     setForm({ name: e.name, department: e.department, salary: e.salary });
//   };

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSave = () => {
//     onUpdate(editId, {
//       name: form.name,
//       department: form.department,
//       salary: Number(form.salary),
//     });
//     setEditId(null);
//   };

//   return (
//     <ul>
//       {employees.map((e) => (
//         <li key={e.id}>
//           {editId === e.id ? (
//             <>
//               <input name="name" value={form.name} onChange={handleChange} />
//               <input name="department" value={form.department} onChange={handleChange} />
//               <input name="salary" type="number" value={form.salary} onChange={handleChange} />
//               <button onClick={handleSave}>Save</button>
//               <button onClick={() => setEditId(null)}>Cancel</button>
//             </>
//           ) : (
//             <>
//               {e.name} - {e.department} - {e.salary}{" "}
//               <button onClick={() => startEdit(e)}>Edit</button>
//               <button onClick={() => onDelete(e.id)}>Delete</button>
//             </>
//           )}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default StudentList;

// import { useEffect, useState } from "react";
// import api from "./api";

// function StudentList() {
//   const [employees, setEmployees] = useState([]);
//   useEffect(() => {
//     const loadEmployees  = async () => {
//       const res = await api.get("/employees");
//       setEmployees(res.data);
//     };
//     loadStudents();
//   }, []);
//   const handleDelete = async (id) => {
//     await api.delete(`/employees/${id}`);
//     setEmployees(employees.filter((s) => s.id !== id));
//   };
//   return (
//     <ul>
//       {students.map((s) => (
//         <li key={s.id}>
//           {s.name}
//           <button onClick={() => handleDelete(s.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }
// export default StudentList;


// import { useEffect, useState } from "react";
// import api from "./api";

// function StudentList() {
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     const loadStudents = async () => {
//       const res = await api.get("/employees");
//       setEmployees(res.data);
//     };
//     loadStudents();
//   }, []);

//   const handleDelete = async (id) => {
//     await api.delete(`/employees/${id}`);
//     setEmployees(employees.filter((s) => s.id !== id));
//   };

//   return (
//     <ul>
//       {employees.map((s) => (
//         <li key={s.id}>
//           {s.name}
//           <button onClick={() => handleDelete(s.id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default StudentList;


// import { useEffect, useState } from "react";
// import api from "../api";
// import StudentForm from "./StudentForm";
// function StudentList({ employees, onDelete }) {
//   if (employees.length === 0) {
//     return <p>No employees found.</p>;
//   }
//   return (
//     <table border="1" cellPadding="8">
//       <thead>
//         <tr>
//           <th>ID</th><th>Name</th><th>Department</th>
//           <th>Salary</th><th>Action</th>
//         </tr>
//       </thead>
//       <tbody>
//         {employees.map((e) => (
//           <tr key={e.id}>
//             <td>{e.id}</td>
//             <td>{e.name}</td>
//             <td>{e.department}</td>
//             <td>{e.salary}</td>
//             <td><button onClick={() => onDelete(e.id)}>Delete</button></td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }
// export default StudentList;

import { useState, useEffect } from "react";
import axios from "axios";

function StudentList() {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/api/employees")
            .then(res => {
                setEmployees(res.data);
            })
            .catch(err => {
                console.log(err);
                setError("Failed to load employees");
            });
    }, []);

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            <h2>Employee List</h2>
            <ul>
                {employees.map(s => (
                    <li key={s.id}>{s.name}</li>
                ))}
            </ul>
        </div>
    );
}
export default StudentList;
