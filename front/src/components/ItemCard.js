import React from 'react'
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';

class ItemCard extends React.Component {

state = {
  addToBag: ''
}




handleClick = () => {
  this.setState({addToBag: !this.state.addToBag})
  if (this.props.user) {
  this.props.handleCart(this.props.item)
 }
}


  renderButtons = () => {
     if (this.props.IdsInBag.includes(this.props.item.id.toString()) && !this.state.addToBag) {
     return (
       <div>
       <h2>Looks like you already have this item in your cart</h2>
       <Link to="/cart">
       <Button color="orange" animated='vertical'>
       <Button.Content visible>CHECK YOUR CART</Button.Content>
       <Button.Content hidden>
        <Icon name='shop' />
      </Button.Content>
    </Button>
</Link>

       </div>
   )
 } else if (!this.state.addToBag) {
      return (
        <div>
        <Button onClick={this.handleClick} color="orange" animated='vertical'>
        <Button.Content visible>ADD TO CART</Button.Content>
        <Button.Content hidden>
         <Icon name='shop' />
       </Button.Content>
       </Button>
        </div>
      )
    } else if (this.state.addToBag && this.props.user) {
    return (
           <div>

           <Button color="orange" animated='vertical'>
           <Button.Content visible>ADDED TO CART </Button.Content>
           <Button.Content hidden>
            <Icon name='check' />
          </Button.Content>
        </Button>
        <p></p>
           <Link to="/">
           <Button color="orange" animated>
      <Button.Content visible>CONTUNE SHOPPING</Button.Content>
      <Button.Content hidden>
        <Icon name='arrow right' />
      </Button.Content>
    </Button>
    </Link>
    </div>
         )
  } else {
    return <Redirect to="/log_in" />
  }
}

  render () {

    return(
      <div className="card">
   <Modal className="modal" trigger={<Image className="img" size='medium' src={this.props.item.attributes.image}/>}>
    <Modal.Content image>
      <Image wrapped size='medium' size='large' src={this.props.item.attributes.image} />
      <Modal.Description>
        <Header>{this.props.item.attributes.name}</Header>
        <p>price: ${this.props.item.attributes.price/100}0</p>
        <h3>Product Description</h3> <p></p>
        <p className="lorem"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        {this.renderButtons()}
      </Modal.Description>
    </Modal.Content>

    <p></p>
  </Modal>
  <div className="price" >${this.props.item.attributes.price/100}0</div>
      </div>
    )
  }
}

export default ItemCard;
