

import './App.css';
import { useEffect, useState } from 'react';
import GameweekSelector from './components/GameweekSelector';
import TeamDropdown from './components/TeamDropdown';

import { parseDatesCSV } from './utils/parseDatesCSV';
import type { TeamDates } from './utils/parseDatesCSV';
import { getRotatingTeams } from './utils/rotationLogic';
import RotationResults from './components/RotationResults';
import datesCSV from './assets/dates.csv?raw';


function App() {
  const [startGW, setStartGW] = useState(1);
  const [endGW, setEndGW] = useState(7);
  const [teams, setTeams] = useState<string[]>([]);
  const [selectedTeam, setSelectedTeam] = useState('');
  const [allTeamData, setAllTeamData] = useState<TeamDates[]>([]);

  useEffect(() => {
    const parsed: TeamDates[] = parseDatesCSV(datesCSV);
    setTeams(parsed.map(t => t.team));
    setAllTeamData(parsed);
  }, []);

  const handleGWChange = (start: number, end: number) => {
    setStartGW(start);
    setEndGW(end);
  };

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
  };

  const rotatingTeams = selectedTeam
    ? getRotatingTeams(allTeamData, selectedTeam, startGW, endGW)
    : [];

  return (
    <>
      <h1>UCL Fantasy Team Rotation</h1>
      <div className="card">
        <TeamDropdown
          teams={teams}
          selectedTeam={selectedTeam}
          onSelect={handleTeamSelect}
        />
        <GameweekSelector
          startGW={startGW}
          endGW={endGW}
          onChange={handleGWChange}
        />
        <RotationResults
          teams={rotatingTeams}
          selectedTeam={selectedTeam}
        />
      </div>
    </>
  );
}

export default App;
