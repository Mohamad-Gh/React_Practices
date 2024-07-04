import React from "react";

function Header({ employees, selectedTeam }) {
  const teamMemberCount = employees.filter(
    (employee) => employee.teamName === selectedTeam
  ).length;

  return (
    <div>
      <h1>Team Member Allocation</h1>
      <h5>
        {selectedTeam} has <b>{teamMemberCount}</b>{" "}
        {teamMemberCount > 1 ? "Members" : "Member"}
      </h5>
    </div>
  );
}

export default Header;
