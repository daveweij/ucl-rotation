// Utility to parse CSV file and return structured data
export interface TeamDates {
  team: string;
  dates: string[]; // Dates for GW1-GW8
}

export function parseDatesCSV(csvText: string): TeamDates[] {
  const lines = csvText.trim().split(/\r?\n/);
  const teams: TeamDates[] = [];

  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',');
    if (row.length < 2) continue;
    teams.push({
      team: row[0],
      dates: row.slice(1)
    });
  }
  return teams;
}
