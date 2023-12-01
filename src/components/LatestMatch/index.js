import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchDetails
  return (
    <div className="latest-match-bg-container">
      <div className="latest-match-sm-container">
        <div className="sm-upper-container">
          <div className="sm-upper-details-container">
            <h1 className="sm-upper-details-container-heading">
              {competingTeam}
            </h1>
            <p className="sm-latest-match-date">{date}</p>
            <p className="sm-latest-match-venue">{venue}</p>
            <p className="sm-latest-match-result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="sm-latest-match-logo"
          />
        </div>
        <hr className="sm-lower-container-hr" />
        <div className="sm-lower-container">
          <p className="sm-lower-container-first-innings">
            First Innings - {firstInnings}
          </p>
          <p className="sm-lower-container-second-innings">
            Second Innings - {secondInnings}
          </p>
          <p className="sm-lower-container-man-of-the-match">
            Man Of The Match - {manOfTheMatch}
          </p>
          <p className="sm-lower-container-umpires">Umpires - {umpires}</p>
        </div>
      </div>
      {/* <div className="latest-match-lg-container"></div> */}
    </div>
  )
}

export default LatestMatch
