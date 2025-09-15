# UCL Fantasy Team Rotation Website - Project Plan

## Overview
This project is a small web application designed to help users find teams that rotate well in the UEFA Champions League (UCL) Fantasy game. A good rotation means that two teams never play on the same date within the same gameweek, allowing users to maximize their fantasy points.

## Features
- **Team Selection Dropdown**: A searchable dropdown menu to select a team. Users can type to filter teams.
- **Gameweek Range Selection**: Select a starting and final gameweek (1-8). The final gameweek must always be higher than the starting gameweek.
- **Rotation Results**: Display teams that rotate well with the selected team, i.e., teams that never play on the same date as the selected team within the chosen gameweek range.
- **Responsive UI**: Clean, modern design using CSS for styling.

## Data Source
- Uses `src/assets/dates.csv` containing teams and their match dates for each gameweek.

## Project Structure
- `src/components/`: React components for dropdown, gameweek selectors, and results display.
- `src/utils/`: Utility functions for CSV parsing and rotation logic.
- `src/assets/`: Contains the `dates.csv` data file.
- `src/App.tsx`: Main application entry point.
- `src/App.css`: Application-wide styles.
- `docs/`: Documentation and planning files.

## Implementation Steps
1. **Setup Project Structure**
   - Create necessary folders and files for components and utilities.
2. **Dropdown Component**
   - Build a searchable dropdown for team selection.
3. **Gameweek Selector Component**
   - Create UI for selecting starting and final gameweeks with validation.
4. **CSV Parsing Utility**
   - Implement a function to parse `dates.csv` and structure the data for use in the app.
5. **Populate Dropdown Menu**
   - Use the parsed team names from the CSV to populate the dropdown menu for team selection.
6. **Rotation Logic**
   - Implement logic to find teams that rotate well with the selected team in the specified gameweek range.
6. **Results Display Component**
   - Show the list of rotating teams to the user.
7. **Styling**
   - Apply CSS for a clean, responsive design.
8. **Testing & Validation**
   - Test the app for correctness and usability.
9. **Prepare for GitHub Pages Deployment**
   - Ensure build output is suitable for static hosting.

## Future Enhancements
- Add more filtering options (e.g., by country or league).
- Display match dates and additional info for each team.
- Mobile-friendly improvements.

---
*Created: September 15, 2025*
