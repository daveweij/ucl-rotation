// Returns teams that rotate well with the selected team
import type { TeamDates } from './parseDatesCSV';

export function getRotatingTeams(
  allTeams: TeamDates[],
  selectedTeam: string,
  startGW: number,
  endGW: number
): string[] {
  const selected = allTeams.find(t => t.team === selectedTeam);
  if (!selected) return [];

  // Get dates for selected team in the GW range
  const selectedDates = selected.dates.slice(startGW - 1, endGW);

  return allTeams
    .filter(t => t.team !== selectedTeam)
    .filter(t => {
      const teamDates = t.dates.slice(startGW - 1, endGW);
      // Check if no dates overlap
      return teamDates.every((date, i) => date !== selectedDates[i]);
    })
    .map(t => t.team);
}
