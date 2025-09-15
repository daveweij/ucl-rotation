import React from 'react';
import './RotationResults.css';

export interface RotationResultsProps {
  teams: string[];
  selectedTeam: string;
}

const RotationResults: React.FC<RotationResultsProps> = ({ teams, selectedTeam }) => {
  if (!selectedTeam) {
    return <div className="rotation-results">Select a team to see rotation results.</div>;
  }
  if (teams.length === 0) {
    return <div className="rotation-results">No teams rotate well with {selectedTeam} in this range.</div>;
  }
  return (
    <div className="rotation-results">
      <h2>Teams that rotate well with {selectedTeam}:</h2>
      <ul>
        {teams.map(team => (
          <li key={team}>{team}</li>
        ))}
      </ul>
    </div>
  );
};

export default RotationResults;
