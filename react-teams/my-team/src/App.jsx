import "./App.css";
import React, { useState } from "react";
import Employees from "./Employees";
import teamMembers from "./Data";
import Header from "./Header";

function App() {
  const [selectedTeam, setTeam] = useState("TeamB");
  const [employees, setEmployees] = useState(teamMembers);
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
  return (
    <>
      <Header selectedTeam={selectedTeam} employees={employees} />
      <Employees
        selectedTeam={selectedTeam}
        employees={employees}
        handleEmployeeCardClick={handleEmployeeCardClick}
        handleTeamChange={handleTeamChange}
      />
    </>
  );
}

export default App;
