import {useState, useEffect} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

const apiUrl = 'https://apis.ccbp.in/ipl'

const Home = () => {
  const [teams, setTeams] = useState([])
  const [loader, setloader] = useState(false)

  useEffect(() => {
    const getTeams = async () => {
      const response = await fetch(apiUrl)
      const data = await response.json()
      const formattedData = data.teams.map(team => ({
        id: team.id,
        name: team.name,
        teamImageUrl: team.team_image_url,
      }))
      setTeams(formattedData)
      setloader(true)
    }

    getTeams()
  }, [])
  return (
    <div className="home-container">
      <div className="logo">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
          alt="ipl logo"
        />
        <h1 className="dashboard-title">IPL Dashboard</h1>
      </div>

      <ul className="teams-list">
        {teams.map(team => (
          <TeamCard key={team.id} team={team} />
        ))}
      </ul>
    </div>
  )
}

export default Home
