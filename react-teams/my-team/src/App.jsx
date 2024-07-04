import "./App.css";
import React, { useState, useEffect } from "react";
import Employees from "./Employees";
import teamMembers from "./Data";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  const [selectedTeam, setTeam] = useState(
    JSON.parse(localStorage.getItem("selectedTeam")) || "TeamB"
  );
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employeeList")) || teamMembers
  );
  const handleEmployeeCardClick = (event) => {
    const transformedEmployee = employees.map((employee) =>
      employee.id === parseInt(event.currentTarget.id)
        ? employee.teamName === selectedTeam
          ? { ...employee, teamName: "" }
          : { ...employee, teamName: selectedTeam }
        : employee
    );
    setEmployees(transformedEmployee);
  };
  function handleTeamChange(event) {
    setTeam(event.target.value);
  }

  useEffect(() => {
    localStorage.setItem("employeeList", JSON.stringify(employees));
  }, [employees]);
  useEffect(() => {
    localStorage.setItem("selectedTeam", JSON.stringify(selectedTeam));
  }, [selectedTeam]);
  return (
    <>
      <Header selectedTeam={selectedTeam} employees={employees} />
      <Employees
        selectedTeam={selectedTeam}
        employees={employees}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamChange={handleTeamChange}
      />
      <Footer />
    </>
  );
}

export default App;
