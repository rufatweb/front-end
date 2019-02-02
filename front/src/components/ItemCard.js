import React from 'react'
import ReactDOM from 'react-dom'
import { Image } from 'semantic-ui-react'
import { Button, Header, Modal } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class ItemCard extends React.Component {

state = {
  addToBag: ''
}
handleClick = () => {
  this.setState({addToBag: !this.state.addToBag})
}
  render () {

    return(
      <div className="card">
   <Image size='medium' src={this.props.item.attributes.image} onClick={() => this.props.handleDisplay(this.props.item)}/>
   <p></p>
   <Modal trigger={<Button>See more</Button>}>
    <Modal.Header>{this.props.item.attributes.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' size='large' src={this.props.item.attributes.image} />
      <Modal.Description>
        <Header>{this.props.item.attributes.name}</Header>
        <p>${this.props.item.attributes.price}</p>
        {(!this.state.addToBag)? <Button color="orange" onClick={this.handleClick}>ADD TO BAG</Button> : <Button>ADDED TO BAG <Icon color="green" disabled name='check' /> </Button>}<p></p>
        {(this.state.addToBag) ? <Link to="/"><Button color="orange">CONTUNE SHOPPING</Button></Link>: null}
      </Modal.Description>
    </Modal.Content>
  </Modal>


      </div>
    )
  }
}

export default ItemCard;
