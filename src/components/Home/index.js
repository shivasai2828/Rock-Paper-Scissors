import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import 'reactjs-popup/dist/index.css'
import ScoreView from '../ScoreView'
import ButtonsRoute from '../ButtonsRoute'
import ResultView from '../ResultView'
const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]
import {
  BgcontainerHome,
  ResponsiveContainer,
  UnorderListTag,
  CustomButton,
} from './styledComponent'

class Home extends Component {
  state = {
    isGameRunning: true,
    score: '0',
    playerChoice: '',
    computerChoice: '',
    result: '',
  }

  getResult = (playerChoice, computerChoice) => {
    if (playerChoice === 'ROCK') {
      switch (computerChoice) {
        case 'PAPER':
          this.setState(preve => ({score: preve.score - 1}))
          return 'YOU LOSE'
        case 'SCISSORS':
          this.setState(preve => ({score: preve.score + 1}))
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    } else if (playerChoice === 'PAPER') {
      switch (computerChoice) {
        case 'ROCK':
          this.setState(preve => ({score: preve.score + 1}))
          return 'YOU WON'

        case 'SCISSORS':
          this.setState(preve => ({score: preve.score - 1}))
          return 'YOU LOSE'
        default:
          return 'IT IS DRAW'
      }
    } else {
      switch (computerChoice) {
        case 'ROCK':
          this.setState(preve => ({score: preve.score - 1}))
          return 'YOU LOSE'
        case 'PAPER':
          this.setState(preve => ({score: preve.score + 1}))
          return 'YOU WON'
        default:
          return 'IT IS DRAW'
      }
    }
  }
  onclickUserReaction = playerChoice => {
    const computerChoice =
      choicesList[Math.floor(Math.random() * choicesList.length)]

    this.setState({
      playerChoice,
      computerChoice: computerChoice.id,
      isGameRunning: false,
      result: this.getResult(playerChoice, computerChoice.id),
    })
  }
  playAgainBnt = () => {
    this.setState({isGameRunning: true})
  }
  render() {
    const {result, isGameRunning, score, playerChoice, computerChoice} =
      this.state
    console.log(result)
    console.log(isGameRunning)
    console.log(playerChoice)
    console.log(computerChoice)
    return (
      <BgcontainerHome>
        <ResponsiveContainer>
          <ScoreView score={score} />
          {isGameRunning ? (
            <UnorderListTag>
              {choicesList.map(eachButton => (
                <ButtonsRoute
                  key={eachButton.id}
                  eachButton={eachButton}
                  onclickUserReaction={this.onclickUserReaction}
                />
              ))}
            </UnorderListTag>
          ) : (
            <ResultView
              result={result}
              playerChoice={playerChoice}
              computerChoice={computerChoice}
              playAgainBnt={this.playAgainBnt}
            />
          )}

          <Popup
            trigger={<CustomButton className="button"> RULES </CustomButton>}
            modal
            nested
          >
            {close => (
              <div className="modal">
                <button className="close" onClick={close}>
                  <RiCloseLine />
                </button>

                <div className="content">
                  <img
                    style={{width: '100%'}}
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </div>
            )}
          </Popup>
        </ResponsiveContainer>
      </BgcontainerHome>
    )
  }
}
export default Home
