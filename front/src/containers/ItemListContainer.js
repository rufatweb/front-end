import React from 'react'
import ReactDOM from 'react-dom'
import ItemCard from '../components/ItemCard'
import Display from '../components/Display'
import { Button, Header, Image, Modal, Grid } from 'semantic-ui-react'

class ItemListContainer extends React.Component {

state = {
  items: [],
  currentItem: ''
}

componentDidMount() {
  fetch('http://localhost:3000/api/v1/items')
  .then(res => res.json())
  .then(json => this.setState({items: json.data}))
}
handleDisplay = (item) => {
  this.setState({currentItem: item})
}



  render () {
let filtered = [...this.state.items].filter(item => item.attributes.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
    return (
    <div className="item-contariner">
    <div class="ui four column grid">
    {filtered.map(item => <ItemCard user={this.props.user} newUser={this.props.newUser}handleDisplay={this.handleDisplay} key={item.id} item={item}/> )}
    </div>

    </div>
    )
  }
}

export default ItemListContainer;
