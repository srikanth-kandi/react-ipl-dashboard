import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.getMatchData()
  }

  getMatchData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const recentMatches = data.recent_matches.map(eachItem => ({
      id: eachItem.id,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      date: eachItem.date,
      manOfTheMatch: eachItem.man_of_the_match,
      matchStatus: eachItem.match_status,
      result: eachItem.result,
      secondInnings: eachItem.second_innings,
      umpires: eachItem.umpires,
      venue: eachItem.venue,
    }))
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = {
      competingTeam: data.latest_match_details.competing_team,
      competingTeamLogo: data.latest_match_details.competing_team_logo,
      date: data.latest_match_details.date,
      firstInnings: data.latest_match_details.first_innings,
      id: data.latest_match_details.id,
      manOfTheMatch: data.latest_match_details.man_of_the_match,
      matchStatus: data.latest_match_details.match_status,
      result: data.latest_match_details.result,
      secondInnings: data.latest_match_details.second_innings,
      umpires: data.latest_match_details.umpires,
      venue: data.latest_match_details.venue,
    }
    this.setState({
      isLoading: false,
      recentMatches,
      teamBannerUrl,
      latestMatchDetails,
      id,
    })
  }

  getGradient = () => {
    const {id} = this.state
    let gradientClassName = ''
    if (id === 'KKR') gradientClassName = 'kkr-gradient'
    else if (id === 'RCB') gradientClassName = 'rcb-gradient'
    else if (id === 'KXP') gradientClassName = 'kxp-gradient'
    else if (id === 'CSK') gradientClassName = 'csk-gradient'
    else if (id === 'RR') gradientClassName = 'rr-gradient'
    else if (id === 'MI') gradientClassName = 'mi-gradient'
    else if (id === 'SH') gradientClassName = 'sh-gradient'
    else if (id === 'DC') gradientClassName = 'dc-gradient'
    return gradientClassName
  }

  render() {
    const {
      isLoading,
      teamBannerUrl,
      latestMatchDetails,
      recentMatches,
    } = this.state
    const gradientClassName = this.getGradient()
    return (
      <div className={gradientClassName}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="team-match-container">
            <img
              src={teamBannerUrl}
              className="team-banner-img"
              alt="team banner"
            />
            <p className="latest-match-heading">Latest Matches</p>
            <LatestMatch latestMatchDetails={latestMatchDetails} />
            <ul className="match-cards-container">
              {recentMatches.map(item => (
                <MatchCard key={item.id} matchData={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
