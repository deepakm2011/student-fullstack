import { useState } from "react";
const c={name:"",department:"",salary:""};

function StudentForm({ onAdd }) {
  const [form, setForm] = useState(c);
  const [errors,setErrors]=useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
  e.preventDefault();

  const m = {
    ...form,
    salary: Number(form.salary)
  };

  const result = await onAdd(m);

  if (result) {
    setErrors(result);
  } else {
    setErrors({});
    setForm(c);
  }
};
  //  const m = {
  //     ...form,
  //     salary: Number(form.salary)
  //   };

  //    await onAdd(m);
  //   setErrors({});
  //   setForm(c);};
  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="department" placeholder="Department" value={form.department} onChange={handleChange} required />
      <input name="salary" type="number" placeholder="salary" value={form.salary} onChange={handleChange} required />
      <button type="submit">Add Student</button>{
        Object.entries(errors).map(([Field,message])=>(
          <p key={Field} style={{color:"red"}}>{message}</p>
        ))
      }
    </form>
  );
}
export default StudentForm;