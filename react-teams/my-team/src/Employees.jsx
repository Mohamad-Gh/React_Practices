import React, { useState } from "react";
import teamMembers from "./Data";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

function Employees() {
  const [employees, setEmployees] = useState(teamMembers);
  return (
    <main>
      {employees.map((employee) => (
        <div key={employee.id}>
          {employee.gender === "male" ? (
            <img src={maleProfile} />
          ) : employee.gender === "female" ? (
            <img src={femaleProfile} />
          ) : null}
          <p>{employee.fullName}</p>
        </div>
      ))}
    </main>
  );
}

export default Employees;
