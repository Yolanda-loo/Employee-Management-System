// client/src/App.jsx
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [employees, setEmployees] = useState([]);

  // Fetch data when component loads
  useEffect(() => {
    axios.get("http://localhost:5000/employees")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Employee Directory</h1>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} style={{ marginBottom: "10px", padding: "10px", border: "1px solid #ddd" }}>
            <strong>{emp.name}</strong> - {emp.role}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;