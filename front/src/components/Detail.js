import React from 'react'
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react'

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
         <p>${this.props.user_item.item.price}</p>
      </Modal.Description>
     </Modal.Content>
   </Modal>
   <span>Quantity:{this.props.user_item.quantity}</span>
   <p></p>
   {(this.props.user_item.quantity !== 1)? <span><Button onClick={() => this.props.handlePlus(this.props.user_item)}>+</Button><Button onClick={() => this.props.handlePlus(this.props.user_item, "minus")}>-</Button> </span> :
   <span><Button onClick={() => this.props.handlePlus(this.props.user_item)}>+</Button> <Button onClick={() => this.props.handleDelete(this.props.user_item)}>remove item</Button></span>}

   </div>
 )
}
}

export default Detail;
