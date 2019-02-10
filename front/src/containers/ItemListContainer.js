import React from 'react'
import ItemCard from '../components/ItemCard'

class ItemListContainer extends React.Component {

state = {
  items: []
}

componentDidMount() {
  fetch('http://localhost:3000/api/v1/items')
  .then(res => res.json())
  .then(json => this.setState({items: json.data}))
}





  render () {
let IdsInBag = this.props.cart.map(user_item => user_item.item.id.toString())
let filtered = [...this.state.items].filter(item => item.attributes.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    return (
    <div className="item-contariner">
    <div className="ui four column grid">
    {filtered.map(item => <ItemCard IdsInBag={IdsInBag} handleCart={this.props.handleCart} user={this.props.user} handleDisplay={this.handleDisplay} key={item.id} item={item}/> )}
    </div>

    </div>
    )
  }
}

export default ItemListContainer;
