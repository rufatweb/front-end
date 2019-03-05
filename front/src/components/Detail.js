import React from 'react'
import { Button, Header, Modal, Image } from 'semantic-ui-react'

class Detail extends React.Component {


render() {


    return (
      <div>
      <p></p>
    <Modal trigger={<Image className="img" size='small' src={this.props.user_item.item.image} />}>
     <Modal.Header>{this.props.user_item.item.name}</Modal.Header>
     <Modal.Content image>
       <Image wrapped size='medium' src={this.props.user_item.item.image} />
       <Modal.Description>
         <Header>{this.props.user_item.item.name}</Header>

      </Modal.Description>
     </Modal.Content>
   </Modal>
   <p></p>
   <p>each: ${this.props.user_item.item.price/100}0</p>
   <span className="quantity" >quantity: {this.props.user_item.quantity}</span>
   <p></p>
   {(this.props.user_item.quantity !== 1)? <span><Button onClick={() => this.props.handlePlus(this.props.user_item)}>+</Button><Button onClick={() => this.props.handlePlus(this.props.user_item, "minus")}>-</Button> </span> :
   <span><Button onClick={() => this.props.handlePlus(this.props.user_item)}>+</Button> <Button onClick={() => this.props.handleDelete(this.props.user_item)}>remove</Button></span>}

   </div>
 )
}
}

export default Detail;
