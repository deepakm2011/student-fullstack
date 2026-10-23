// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// function App() {
//   return (
//     <div>
//       <h1>Hello React</h1>
//       <p>My first React application</p>
//     </div>
//   );
// }

// export default App;
// Rule 1: Return only one root element.
// // Wrong: two siblings
// return (
// <h1>Title</h1>
// <p>Text</p>
// );
// // Correct: wrap in a div or a Fragment
// return (
// <>
// <h1>Title</h1>
// <p>Text</p>
// </>
// );

// rule 2 use class name instead of class & html for instead of for
// rule 3 
// <img>
// </img>
// <br></br>
// ruel 4  Attribute arecamelCase(onClick),(onChange),(tableIndex)
// rule 5
// {
//   to put javascript inside jsx
// }
// function App() {
// const name = "Arun";
// const marks = 85;
// return (
// <div>
// <h1>Hello, {name}</h1>
// <p>Marks: {marks}</p>
// <p>Double marks: {marks * 2}</p>
// <p>Result: {marks >= 40 ? "Pass" : "Fail"}</p>
// </div>
// );
// }

// rule 6:

// inline style is an object not a string<h1 style={{ color: "blue", fontSize: "24px" }}>Styled</h1>

// rule 7
// cmts inside jsx{/*cmt*/}

// HTML JSX
// class="box"   className="box"
// for="name"   htmlFor="name"
// onclick="fn()"    onClick={fn}
// style="color:red"    style={{ color: "red" }}
// <img src="a.png">     <img src="a.png" />
// <!-- comment -->     {/* comment */}

//components & promts 
//compontent :it returns jsx

// import Welcome from "./components/Welcome";
// function app(){
//   return (
//     <div>
//     <Welcome/>
//     <Welcome/>
//     <Welcome/>
//     </div>
//   );
// }
// export default app;
// import StudentCard from "./components/StudentCard";
// function App() {
// return (
// <div>
// <StudentCard name="Arun" department="CSE" marks={85} />
// <StudentCard name="Bala" department="ECE" marks={72} />
// </div>
// );
// }
// export default App;
// default promts & children
// import Card from "./components/card";

// function App() {
//   return (
//     <div>
//       <Card title="Notice">
//         <p>Exam on Monday</p>
//       </Card>

//       <Card>
//         <p>This card has no title, so the default is used</p>
//       </Card>
//     </div>
//   );
// }

// export default App;

// import StudentCard from "./components/StudentCard";
// function App() {
//   const loading = false;
//   const students = [
//     { id: 1, name: "Arun", department: "CSE", marks: 85 },
//     { id: 2, name: "Bala", department: "ECE", marks: 72 },
//     { id: 3, name: "Chitra", department: "CSE", marks: 91 },
//   ];
//   if (loading) return <p>Loading...</p>;
//   return (
//     <div>
//       <h1>Students</h1>
//       {/* 2. && operator */}
//       {students.length === 0 && <p>No students found</p>}
//       {/* map() with key */}
//       {students.map((s) => (
//         <StudentCard
//           key={s.id}
//           name={s.name}
//           department={s.department}
//           marks={s.marks}
//         />
//       ))}
//     </div>
//   );
// }
// export default App;

// import BrokenCounter from "./components/BrokenCounter";
// import Counter from "./components/Counter";
// import TrippleClick from "./components/TrippleClick";
// import StudentList from "./components/StudentList";

// function App() {
//   return (
//     <div>
//       <h2>1. Normal variable (broken)</h2>
//       <BrokenCounter />

//       <h2>2. useState Counter</h2>
//       <Counter />

//       <h2>3. Trick question</h2>
//       <TrippleClick />

//       <h2>4. Students with state</h2>
//       <StudentList />
//     </div>
//   );
// }

// export default App;
// import { useState } from 'react';
// import NameForm from "./components/NameForm";
// import MultiFieldForm from "./components/MultiFieldForm";
// import StudentForm from "./components/StudentForm";
// import StudentList from "./components/StudentList";
// import Sample from './components/Sample'; 

// function App() {
//   // State lives here (lifted up)
//   const [students, setStudents] = useState([
//     { id: 1, name: "Arun", department: "CSE", marks: 85 },
//     { id: 2, name: "Bala", department: "ECE", marks: 72 },
//     { id: 3, name: "Chitra", department: "CSE", marks: 91 },
//   ]);

//   const addStudent = (student) => {
//     setStudents([...students, student]);
//   };

//   const deleteStudent = (id) => {
//     setStudents(students.filter((s) => s.id !== id));
//   };

//   return (
//     <div>
//       <h2>1. Controlled input</h2>
//       <NameForm />

//       <h2>2. One state object, many fields</h2>
//       <MultiFieldForm />

//       <h2>3. Lifting state up</h2>
//       <StudentForm onAdd={addStudent} />
//       <StudentList students={students} onDelete={deleteStudent} />
//     </div>
//   );
// }

// export default App;

// import Sample from './components/Sample';
// function App(){
// return(
//   <div>
//     <h2>Hi Welcome</h2>
//   <Sample/>
//   </div>
// );
// }
// export default App;

// import BadEffect from './components/BadEffect';
// import Sample from './components/Sample';
// function App(){
// return(
//   <div>
//     <h2>BadEffects</h2>
//   <BadEffect/>
//   <h2>hi wel</h2>
//   <Sample/>
//   </div>
// );
// }
// export default App;

// import StudentList from './components/StudentList';
// function App(){
// return(
//   <div>
//     <h2>Hi Welcome</h2>
//   <StudentList/>
//   </div>
// );
// }
// export default App;
// import { useEffect, useState } from "react";
// import AddEmployee from "./components/AddEmployee";
// import StudentList from "./components/StudentList";

// const API = "http://localhost:8080/api/employees";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     fetch(API)
//       .then((res) => {
//         if (!res.ok) throw new Error("Server error: " + res.status);
//         return res.json();
//       })
//       .then((data) => setEmployees(data))
//       .catch((err) => setError(err.message))
//       .finally(() => setLoading(false));
//   }, []);

//   const handleAdded = (newEmployee) => {
//     setEmployees([...employees, newEmployee]);
//   };

//   const handleUpdate = async (id, data) => {
//     try {
//       const res = await fetch(API + "/" + id, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(data),
//       });
//       if (!res.ok) throw new Error("Update failed: " + res.status);
//       const updated = await res.json();
//       setEmployees(employees.map((e) => (e.id === id ? updated : e)));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       const res = await fetch(API + "/" + id, {
//         method: "DELETE",
//       });
//       if (!res.ok) throw new Error("Delete failed: " + res.status);
//       setEmployees(employees.filter((e) => e.id !== id));
//     } catch (err) {
//       alert(err.message);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p style={{ color: "red" }}>{error}</p>;

//   return (
//     <div>
//       <h1>Hi Welcome</h1>

//       <h2>Add employee</h2>
//       <AddEmployee onAdded={handleAdded} />

//       <h2>All employees</h2>
//       <StudentList 
//         employees={employees} 
//         onUpdate={handleUpdate} 
//         onDelete={handleDelete} 
//       />
//     </div>
//   );
// }

// export default App;


// get using axios

// import axios from "axios";
// import { useEffect } from "react";
// // get 
// function App(){
//   useEffect(()=>{
//     const getData=async()=>{
// const a=await axios.get("http://localhost:8080/api/employees");
//   console.log(a.data);
//   };
//   getData();
// },[]);
// return <h1>Welcome to axios</h1>;}
  
//   export default App;


//post method
// import axios from "axios";
// import { useEffect } from "react";
// function App(){
//   useEffect(()=>{
//     const postData=async()=>{
// const a=await axios.post("http://localhost:8080/api/employees",{
//   name:"Arul",
//   department:"CSE",
//   salary:56789,
// });
//   console.log(a.data);
//   };
//   postData();
// },[]);
// return <h1>Welcome to axios</h1>;}
  
//   export default App;

//put method
// import axios from "axios";
// import { useEffect } from "react";
// function App(){
//   useEffect(()=>{
//     const putData=async()=>{
//       const v={  name:"Pandan",
//   department:"CSE",
//   salary:56789};
// const a=await axios.put("http://localhost:8080/api/employees/8",v);
//   console.log(a.data);
//   };
//   putData();
// },[]);
// return <h1>Welcome to axios</h1>;}
  
//   export default App;


//delete method
  // import axios from "axios";
// import { useEffect } from "react";
// function App(){
//   useEffect(()=>{
//     const deleteData=async()=>{
//       try{
// const a=await axios.delete("http://localhost:8080/api/employees/8");
//   console.log(a.data);}
//   catch(error){
//     console.log("error",error)
//   }
//   };
// deleteData();
// },[]);
// return <h1>Welcome to axios</h1>;}
  
  // export default App;


  // import StudentList from "./components/StudentList";
  // import api from "./api";
  //  import { useEffect, useState } from "react";
  // function App(){
  // const [employees, setEmployees] = useState([]);

  // useEffect(() => {
  //   api.get("/employees").then((res) => setEmployees(res.data));
  // }, []);

  // const handleDelete = async (id) => {
  //   await api.delete(`/employees/${id}`);
  //   setEmployees(employees.filter((e) => e.id !== id));
  // };

  //   return (
  //     <div>
  //       <h1>Hello Hi</h1>
  //       <StudentList employees={employees} onDelete={handleDelete} />
  //     </div>
  //   )
  // }

  // export default App;


//   import { useEffect, useState } from "react";
// import api from "./api";
// import EmployeeForm from "./components/StudentForm";
// import EmployeeList from "./components/StudentList";

// function App() {
//   const [employees, setEmployees] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   useEffect(() => {
//     loadEmployees();
//   }, []);
//   const loadEmployees = async () => {
//     try {
//       const res = await api.get("/employees");
//       setEmployees(res.data);
//       setError("");
//     } catch (err) {
//       setError("Cannot load employees. Is the backend running?");
//     } finally {
//       setLoading(false);
//     }
//   };
//   const addEmployee = async (employee) => {
//     try {
//       const res = await api.post("/employees", employee);
//       setEmployees([...employees, res.data]);
//       return null;
//     } catch (err) {
//       return err.response?.data || { error: "Could not add employee" };
//     }
//   };
//   const deleteEmployee = async (id) => {
//     try {
//       await api.delete(`/employees/${id}`);
//       setEmployees(employees.filter((e) => e.id !== id));
//     } catch (err) {
//       alert("Delete failed");
//     }
//   };
//  return (
//     <div style={{ padding: "20px" }}>
//       <h1>Employee Management</h1>
//       <EmployeeForm onAdd={addEmployee} />
//       <h2>Employees</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!loading && !error && (
//         <EmployeeList employees={employees} onDelete={deleteEmployee} />
//       )}
//     </div>
//   );
// }
// export default App;
// function App(){   1st
// fetch("http://localhost:8080/api/employees/99")
//   .then(res => {
//     if (!res.ok) {
//       return res.json().then(errData => { throw new Error(errData.error || res.statusText); });
//     }
//     return res.json();
//   })
  
//   .then(data => console.log(data.name))
//   .catch(err => console.log("Error: " + err.message));}
//   export default App;



// function App() {
//     async function addEmployee() {
//         try {
//             const res = await fetch(
//                 "http://localhost:8080/api/employees",
//                 {
//                     method: "POST",
//                     headers: {
//                         "Content-Type": "application/json"
//                     },
//                     body: JSON.stringify({
//                         name: "Arun",
//                         department: "CSE",
//                         salary:56789
//                     })
//                 }
//             );
//             const data = await res.json();
//             if (!res.ok) {
//                 console.log("Status:", res.status);
//                 console.log("Error details:", data);
//                 return;
//             }
//             console.log("Employee saved:", data);
//         } catch (err) {
//             console.log("Request failed:", err.message);
//         }
//     }
//     return (
//         <div>
//             <h2>Employee App</h2>
//             <button onClick={addEmployee}>
//                 Add Employee
//             </button>
//         </div>
//     );
// }

// export default App;


// import StudentList from "./components/StudentList";
// function App() {
//     return (
//         <div>
//             <StudentList />
//         </div>
//     );
// }
// export default App;


// import axios from "axios";
// import { useState, useEffect } from "react";

// function App() {
//     async function loadEmployees() {
//         try {
//             const res = await axios.get(
//                 "http://localhost:8080/api/employees"
//             );

//             setEmployees(res.data);
//         } catch (err) {
//             console.log(
//                 err.response ? err.response.status : err.message
//             );
//         }
//     }
// }
// export default App;

// function App(){
// console.log("A");
// fetch("http://localhost:8080/api/employees").then(() => console.log("B"));
// setTimeout(() => console.log("C"), 0);
// Promise.resolve().then(() => console.log("D"));
// console.log("E");}
// export default App;

// function App(){
// async function f() {
//     console.log("1");
//     await null;
//     console.log("2");
// }

// console.log("3");
// f();
// console.log("4");}
// export default App;



// import { useEffect } from "react";
// import axios from "axios";

// function App() {
//     useEffect(() => {
//         async function getStudent() {
//             try {
//                 await axios.get("http://localhost:8080/api/students/99");
//                 console.log("OK");
//             } catch (err) {
//                 console.log(err.response.status);
//                 console.log(err.response.data.error);
//             }

//             console.log("Done");
//         }

//         getStudent();
//     }, []); 
// }

// export default App;


// import { useEffect } from "react";

// function App() {
//     useEffect(() => {
//         async function getStudent() {
//             try {
//                 const res = await fetch(
//                     "http://localhost:8080/api/employees/99"
//                 );

//                 console.log(res.ok);
//                 console.log(res.status);

//                 const data = await res.json();
//                 console.log(data.error);
//             } catch (err) {
//                 console.log("Error: " + err.message);
//             }
//         }

//         getStudent();
//     }, [])
// }

// export default App;


// import { useState } from "react";

// function App() {
//     const [count, setCount] = useState(0);

//     function add() {
//         setCount(count + 1);
//         setCount(count + 1);
//         setCount(c => c + 1);

//         console.log(count);
//     }

//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={add}>Add</button>
//         </div>
//     );
// }

// export default App;

// function App(){
// const s = { name: "Arun", marks: 85, address: undefined, tags: ["a", "b"] };
// console.log(JSON.stringify(s));
// console.log(JSON.parse('{"x":1,"y":[2,3]}').y.length);
// console.log(typeof JSON.parse("42"));}
// export default App;


// import { useEffect } from "react";
// import { getStudents,addStudent, deleteStudent} from "./api.jsx";

// function App() {
//     useEffect(() => {
//        async function test() {
//   try {
//     const result = await deleteStudent(99);
//     console.log(result);
//   } catch (error) {
//     console.log("Delete failed:", error.response?.data || error.message);
//   }
// }

//         test();
//     }, []);

//     return <h2>Check Console</h2>;
// }


// export default App;

// import { useEffect } from "react";
// import { getStudent } from "./fetchApi.js";

// function App() {
//   useEffect(() => {
//     async function testFetch() {
//       try {
//         const student = await getStudent(99);
//         console.log("Student:", student);
//       } catch (error) {
//         console.log("Fetch error:", error.message);
//       }
//     }

//     testFetch();
//   }, []);

// }

// export default App;


// import { useEffect } from "react";
// import axios from "axios";

// function App() {
//   useEffect(() => {
//     async function loadStudents() {
//       try {
//         const response = await axios.get(
//           "http://localhost:8080/api/students"
//         );

//         console.log(response.data);
//       } catch (error) {
//         console.log("Error:", error.message);
//       }
//     }

//     loadStudents();
//   }, []);

// }

// export default App;


// import { useEffect } from "react";
// import axios from "axios";

// function App() {
//   useEffect(() => {
//     async function loadStudents() {
//       try {
//         const response = await axios.get("/api/students");
//         console.log(response.data);
//       } catch (error) {
//         console.log("Error:", error.message);
//       }
//     }

//     loadStudents();
//   }, []);

// }


// export default App;

import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const API = "http://localhost:8080/api/students";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    marks: ""
  });

  // Load students and search after 300 ms
  useEffect(() => {
    let url = API;

    const timer = setTimeout(() => {
      if (search.trim() !== "") {
        url = API + "/search?name=" + encodeURIComponent(search);
      }

      setLoading(true);
      setError("");

      axios
        .get(url)
        .then((response) => {
          setStudents(response.data);
        })
        .catch(() => {
          setError("Server is not reachable. Please start Spring Boot.");
        })
        .finally(() => {
          setLoading(false);
        });
    }, search.trim() === "" ? 0 : 300);

    // Cancel the old timer when the search changes
    return () => clearTimeout(timer);
  }, [search]);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value
    });
  }

  // Add a student
  async function addStudent(event) {
    event.preventDefault();
    setFieldErrors({});
    setError("");

    const student = {
      name: form.name,
      email: form.email,
      department: form.department,
      marks: Number(form.marks)
    };

    try {
      const response = await axios.post(API, student);

      // Show the new student without refreshing the page
      setStudents((previous) => [...previous, response.data]);

      setForm({
        name: "",
        email: "",
        department: "",
        marks: ""
      });
    } catch (err) {
      if (err.response && err.response.status === 400) {
        // Backend sends field-wise validation errors
        setFieldErrors(err.response.data);
      } else {
        setError("Unable to add student. Please check the server.");
      }
    }
  }

  // Delete a student
  async function deleteStudent(id) {
    const confirmed = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await axios.delete(API + "/" + id);

      // Remove deleted student from the screen
      setStudents((previous) =>
        previous.filter((student) => student.id !== id)
      );
    } catch (err) {
      if (err.response && err.response.status === 404) {
        setError("Student not found.");
      } else {
        setError("Unable to delete student.");
      }
    }
  }

  return (
    <div className="container">
      <h1>Student Management</h1>

      {error && <p className="error">{error}</p>}

      <h2>Add Student</h2>

      <form onSubmit={addStudent}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />
        {fieldErrors.name && (
          <p className="error">{fieldErrors.name}</p>
        )}

        <input
          name="email"
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {fieldErrors.email && (
          <p className="error">{fieldErrors.email}</p>
        )}

        <input
          name="department"
          placeholder="Department"
          value={form.department}
          onChange={handleChange}
        />
        {fieldErrors.department && (
          <p className="error">{fieldErrors.department}</p>
        )}

        <input
          name="marks"
          type="number"
          placeholder="Marks"
          value={form.marks}
          onChange={handleChange}
        />
        {fieldErrors.marks && (
          <p className="error">{fieldErrors.marks}</p>
        )}

        <button type="submit">Add Student</button>
      </form>

      <h2>Search Students</h2>

      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <h2>Student List</h2>
{!loading && !error && (
  <p>Total students found: {students.length}</p>
)}
      {loading ? (
        <p>Loading...</p>
      ) : error ? null : students.length === 0 ? (
        <p>No students found</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.department}</td>
                <td>{student.marks}</td>
                <td>
                  <button
                    className="delete"
                    onClick={() => deleteStudent(student.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
