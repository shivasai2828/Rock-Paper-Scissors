import {ScoreCardMainContainer, NameTag, ScoreDiv} from './styledComponent'

const ScoreView = props => {
  const {score} = props
  return (
    <ScoreCardMainContainer>
      <div>
        <NameTag>
          ROCK <br />
          PAPER <br />
          SCISSORS
        </NameTag>
      </div>
      <ScoreDiv>
        <p style={{color: '#223a5f'}}>Score</p>
        <p>{score}</p>
      </ScoreDiv>
    </ScoreCardMainContainer>
  )
}

export default ScoreView
