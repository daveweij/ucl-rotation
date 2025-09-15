import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import './TeamDropdown.css';

export interface TeamDropdownProps {
  teams: string[];
  selectedTeam: string;
  onSelect: (team: string) => void;
}

const TeamDropdown: React.FC<TeamDropdownProps> = ({ teams, selectedTeam, onSelect }) => {
  return (
    <Autocomplete
      options={teams}
      value={selectedTeam}
      onChange={(_, value) => onSelect(value || '')}
      renderInput={(params) => (
        <TextField {...params} label="Select a team" variant="outlined" />
      )}
      sx={{ minWidth: 300 }}
      isOptionEqualToValue={(option, value) => option === value}
    />
  );
};

export default TeamDropdown;
