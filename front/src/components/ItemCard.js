import React from 'react'
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';

class ItemCard extends React.Component {

state = {
  addToBag: ''
}

handleClick = () => {
  this.setState({addToBag: !this.state.addToBag})
  this.props.handleCart(this.props.item)
}

renderButtons = () => {
  if (!this.state.addToBag) {
    return <Button color="orange" onClick={this.handleClick}>ADD TO BAG</Button>
  } else if (this.state.addToBag && this.props.user){
    return (
      <div>
          <Button>ADDED TO BAG <Icon color="green" disabled name='check' /> </Button><p></p>
           <Link to="/"><Button color="orange">CONTUNE SHOPPING</Button></Link>
           </div>
         )
  } else {
    return <Redirect to="/log_in" />
  }

}
  render () {

    return(
      <div className="card">
   <Image className="img" size='medium' src={this.props.item.attributes.image} onClick={() => this.props.handleDisplay(this.props.item)}/>
   <p></p>
   <Modal trigger={<Button>See more</Button>}>
    <Modal.Header>{this.props.item.attributes.name}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' size='large' src={this.props.item.attributes.image} />
      <Modal.Description>
        <Header>{this.props.item.attributes.name}</Header>
        <p>${this.props.item.attributes.price}</p>
       {this.renderButtons()}


      </Modal.Description>
    </Modal.Content>
  </Modal>


      </div>
    )
  }
}

export default ItemCard;
