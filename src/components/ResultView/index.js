import './index.css'
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
const ResultView = props => {
  const {result, playerChoice, computerChoice, playAgainBnt} = props
  const btnClick = () => {
    playAgainBnt()
  }
  const yourImg = choicesList.filter(each => each.id === playerChoice)
  const yourImageUrl = yourImg[0].imageUrl
  const opponentImg = choicesList.filter(each => each.id === computerChoice)
  const opponentImageUrl = opponentImg[0].imageUrl
  console.log(opponentImageUrl)
  return (
    <div className="result-container">
      <div className="result-row-container">
        <div>
          <h1>YOU</h1>
          <img alt="your choice" className="result-img" src={yourImageUrl} />
        </div>
        <div>
          <h1>OPPONENT</h1>
          <img
            alt="opponent choice"
            className="result-img"
            src={opponentImageUrl}
          />
        </div>
      </div>
      <p>{result}</p>
      <button className="btn" type="button" onClick={btnClick}>
        PLAY AGAIN
      </button>
    </div>
  )
}

export default ResultView
