import './index.css'

const MatchCard = props => {
  const {matchData} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = matchData
  const getWinStatus = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <div className="match-card-container">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-logo"
      />
      <h1 className="match-card-heading">{competingTeam}</h1>
      <p className="match-card-result">{result}</p>
      <p className={getWinStatus}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
