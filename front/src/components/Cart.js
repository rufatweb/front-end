import React from 'react'
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react'

class Cart extends React.Component {




render() {

  let listItems = this.props.cart.map(item => {
    return (
      <div>
      <p></p>
    <Modal trigger={<Image className="img" size='small' key={item.id} src={item.image} />}>
     <Modal.Header>{item.name}</Modal.Header>
     <Modal.Content image>
       <Image wrapped size='medium' src={item.image} />
       <Modal.Description>
         <Header>{item.name}</Header>
         <p>${item.price}</p>
        <Button color="orange">BUY</Button>
      </Modal.Description>
     </Modal.Content>
   </Modal>
   <span>quantity: 1 </span>
   <Button>-</Button><Button>+</Button>
   </div>
 )
  })

  return(
<div className="cart">
<div className="ui four column grid">
{listItems}
</div>
</div>
)
}




}

export default Cart;
