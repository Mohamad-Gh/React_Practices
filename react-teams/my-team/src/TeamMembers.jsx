import React from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

function TeamMembers({ employees, selectedTeam, handleEmployeeCardClick }) {
  return (
    <>
      {employees.map((employee) => (
        <div>
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
        </div>
      ))}
    </>
  );
}

export default TeamMembers;
