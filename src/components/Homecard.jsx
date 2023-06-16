import { Link } from 'react-router-dom'

function HomeCard({ id, title, cover }) {
  // console.log('homecard', id, title, cover)
  return (
    <li key={id} className="card">
      <Link key={`${id}`} to={`/work-sheet/${id}`}>
        <div className="cardTitle">
          <h3>{title}</h3>
        </div>
        <div className="cardGradient"></div>
        <div className="cardPhoto">
          <img src={cover} alt={title} />
        </div>
      </Link>
    </li>
  )
}

export default HomeCard
