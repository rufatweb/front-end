import React from 'react'
import ReactDOM from 'react-dom'
import ItemCard from '../components/ItemCard'
import { Grid } from 'semantic-ui-react'
import Display from '../components/Display'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

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

    return (
    <div className="item-contariner">
    <Grid.Column >
    {this.state.items.map(item => <ItemCard handleDisplay={this.handleDisplay} key={item.id} item={item}/> )}
    </Grid.Column >

    </div>
    )
  }
}
export default ItemListContainer;
