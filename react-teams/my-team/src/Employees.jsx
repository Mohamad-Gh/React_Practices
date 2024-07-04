import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";
import Team from "./Team";
function Employees({
  selectedTeam,
  employees,
  handleEmployeeCardClick,
  handleTeamChange,
}) {
  return (
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-6">
          <Team
            selectedTeam={selectedTeam}
            handleTeamChange={handleTeamChange}
          />
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className="card-collection">
            {employees.map((employee) => (
              <div
                key={employee.id}
                id={employee.id}
                className={
                  employee.teamName === selectedTeam
                    ? "card m-2 standout"
                    : "card m-2"
                }
                style={{ cursor: "pointer" }}
                onClick={handleEmployeeCardClick}
              >
                <img
                  className="card-img-top"
                  src={
                    employee.gender === "male"
                      ? maleProfile
                      : employee.gender === "female"
                      ? femaleProfile
                      : null
                  }
                />
                <div className="card-body">
                  <h5 className="card-title">Full Name: {employee.fullName}</h5>
                  <p className="card-text">
                    <b>Designation :</b> {employee.designation}
                  </p>
                  <p>{employee.teamName}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employees;
