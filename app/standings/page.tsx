import config from "config";

// Define type for standings data
interface Standing {
  teamId: number;
  teamName: string;
  teamCity: string;
  conference: string;
  division: string;
  wins: number;
  losses: number;
  winPct: number;
  currentStreak: string;
}

export default async function Page() {
  const data = await fetch(`${config.backendServer.homeUrl}/standings/`)
  const standings: Standing[] = await data.json()
  return (
    <div>
      <h1>2024 - 2025 Season</h1>
      <ul>
        {standings.map((Standing) => (
          <li key={Standing.teamId}>{Standing.teamName} ({Standing.teamCity}) {Standing.conference} {Standing.wins} {Standing.losses} {Standing.winPct} {Standing.currentStreak}</li>
        ))}
      </ul>
    </div>
  )
}
