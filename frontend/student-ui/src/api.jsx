// import axios from "axios";
// const api=axios.create({baseURL:import.meta.env.VITE_API_URL||"http://localhost:8080/api"});
// export default api;

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080"
});

export async function getStudents() {
  try {
    const response = await api.get("/api/students");
    return response.data;
  } catch (error) {
    console.log("GET error:", error.response?.data || error.message);
    throw error;
  }
}

export async function addStudent(student) {
  try {
    const response = await api.post("/api/students", student);
    return response.data;
  } catch (error) {
    console.log("POST error:", error.response?.data || error.message);
    throw error;
  }
}

export async function deleteStudent(id) {
  const response = await api.delete("/api/students/" + id);
  return response.data;
}
