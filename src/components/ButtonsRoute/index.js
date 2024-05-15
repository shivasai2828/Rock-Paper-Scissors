import {ListItemsTag, ImageElement, ImageButton} from './styledComponent'

const ButtonsRoute = props => {
  const {eachButton, onclickUserReaction} = props
  const {imageUrl, id} = eachButton
  const OnclickUserReactionBtn = event => {
    onclickUserReaction(id)
    console.log(`${id.toLowerCase()}Button`)
  }
  return (
    <ListItemsTag>
      <ImageButton
        data-testid={`${id.toLowerCase()}Button`}
        type="button"
        onClick={OnclickUserReactionBtn}
      >
        <ImageElement src={imageUrl} alt={id} />
      </ImageButton>
    </ListItemsTag>
  )
}

export default ButtonsRoute
