import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

    constructor () {
      super();
      this.state = {
        card: ''
      }
    }

    handleClick = (e) => {
      // console.log(e.target.id)
        if(e.target.id === 'profile') {
        this.setState({card: <Profile/>})
      } else if(e.target.id === 'photo') {
          this.setState({card: <Photos/>})
      } else if(e.target.id === 'cocktail') {
          this.setState({card: <Cocktails/>})
      } else if(e.target.id === 'pokemon') {
          this.setState({card: <Pokemon/>})
        }
    }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = this.state.card

    return (
      <div>
        <MenuBar handleClick={this.handleClick} />
        {detailsToDisplay}
      </div>
    )
  }

}

export default MainBox
