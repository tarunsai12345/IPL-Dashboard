import './index.css'

const LatestMatch = ({matchDetails}) => {
  const {
    competingTeam,
    competingTeamLogo,
    date,
    venue,
    result,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = matchDetails

  return (
    <div className="latest-match-card">
      <div className="match-main-details">
        <div>
          <p className="team-name">{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="match-logo"
        />
      </div>
      <hr />
      <div className="additional-details">
        <p>
          <strong>First Innings:</strong> {firstInnings}
        </p>
        <p>
          <strong>Second Innings:</strong> {secondInnings}
        </p>
        <p>
          <strong>Man of the Match:</strong> {manOfTheMatch}
        </p>
        <p>
          <strong>Umpires:</strong> {umpires}
        </p>
      </div>
    </div>
  )
}

export default LatestMatch
