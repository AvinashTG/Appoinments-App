import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggleIsStarred} = props
  const {id, date, title, isStarred} = appointmentDetails
  const starImageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggleIsStarred(id)
  }

  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="title">{title}</p>
        <button
          className="star-button"
          onClick={onClickStar}
          data-testid="star" // Change testid to data-testid
          type="button"
        >
          <img src={starImageUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date"> Date: {date}</p>
    </li>
  )
}

export default AppointmentItem
