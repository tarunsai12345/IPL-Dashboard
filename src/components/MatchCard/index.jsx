import './index.css'

const MatchCard = ({matchData}) => {
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchData

  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className="match-status">{matchStatus}</p>
    </li>
  )
}

export default MatchCard
