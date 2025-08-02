import './index.css'
import {Link} from 'react-router'

const NotFound = () => {
  return (
    <>
      <Link to="*">
        <div className="total">
          <h1 className="text">Page Not Found</h1>
        </div>
      </Link>
    </>
  )
}

export default NotFound
