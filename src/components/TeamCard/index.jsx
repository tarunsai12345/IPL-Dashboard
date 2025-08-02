import {Link} from 'react-router'
import './index.css'

const TeamCard = ({team}) => {
  const {id, name, teamImageUrl} = team

  return (
    <li className="team-card">
      <Link to={`/team-matches/${id}`} className="team-link">
        <div className="card-content">
          <img src={teamImageUrl} alt={name} className="team-logo" />
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
