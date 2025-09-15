import React from 'react';
import './GameweekSelector.css';

export interface GameweekSelectorProps {
  startGW: number;
  endGW: number;
  onChange: (startGW: number, endGW: number) => void;
}

const GW_MIN = 1;
const GW_MAX = 8;

const GameweekSelector: React.FC<GameweekSelectorProps> = ({ startGW, endGW, onChange }) => {
  const handleStartChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStart = Number(e.target.value);
    if (newStart < endGW) {
      onChange(newStart, endGW);
    }
  };

  const handleEndChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newEnd = Number(e.target.value);
    if (newEnd > startGW) {
      onChange(startGW, newEnd);
    }
  };

  return (
    <div className="gw-selector">
      <label>
        Start GW:
        <select value={startGW} onChange={handleStartChange} className="gw-select">
          {Array.from({ length: GW_MAX }, (_, i) => i + GW_MIN).map(gw => (
            <option key={gw} value={gw} disabled={gw >= endGW}>{gw}</option>
          ))}
        </select>
      </label>
      <label>
        End GW:
        <select value={endGW} onChange={handleEndChange} className="gw-select">
          {Array.from({ length: GW_MAX }, (_, i) => i + GW_MIN).map(gw => (
            <option key={gw} value={gw} disabled={gw <= startGW}>{gw}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default GameweekSelector;
