import {useParams} from 'react-router'
import {useEffect, useState} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'
import {BeatLoader} from 'react-spinners'

const TeamMatches = () => {
  const {id} = useParams()
  const [teamData, setTeamData] = useState(null)

  useEffect(() => {
    const getTeamData = async () => {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()

      const updatedData = {
        teamBannerUrl: data.team_banner_url,
        latestMatchDetails: {
          umpires: data.latest_match_details.umpires,
          result: data.latest_match_details.result,
          competingTeamLogo: data.latest_match_details.competing_team_logo,
          competingTeam: data.latest_match_details.competing_team,
          date: data.latest_match_details.date,
          manOfTheMatch: data.latest_match_details.man_of_the_match,
          firstInnings: data.latest_match_details.first_innings,
          secondInnings: data.latest_match_details.second_innings,
          venue: data.latest_match_details.venue,
        },
        recentMatches: data.recent_matches.map(match => ({
          competingTeam: match.competing_team,
          competingTeamLogo: match.competing_team_logo,
          result: match.result,
          matchStatus: match.match_status,
        })),
      }

      setTeamData(updatedData)
    }

    getTeamData()
  }, [id])

  if (!teamData) return <BeatLoader />

  return (
    <div className="team-matches-container">
      <img
        src={teamData.teamBannerUrl}
        alt="team banner"
        className="team-banner"
      />
      <h2>Latest Matches</h2>
      <LatestMatch matchDetails={teamData.latestMatchDetails} />
      <ul className="recent-matches-list">
        {teamData.recentMatches.map((match, index) => (
          <MatchCard key={index} matchData={match} />
        ))}
      </ul>
    </div>
  )
}

export default TeamMatches
