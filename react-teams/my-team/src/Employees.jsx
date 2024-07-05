import React from "react";

import Team from "./Team";
import TeamMembers from "./TeamMembers";
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
            <TeamMembers
              employees={employees}
              selectedTeam={selectedTeam}
              handleEmployeeCardClick={handleEmployeeCardClick}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employees;
