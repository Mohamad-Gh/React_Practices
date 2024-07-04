import React from "react";

function Team({ selectedTeam, handleTeamChange }) {
  return (
    <select
      className="form-select form-select-lg"
      value={selectedTeam}
      onChange={handleTeamChange}
    >
      <option value={"TeamA"}>TeamA</option>
      <option value={"TeamB"}>TeamB</option>
      <option value={"TeamC"}>TeamC</option>
      <option value={"TeamD"}>TeamD</option>
    </select>
  );
}

export default Team;
