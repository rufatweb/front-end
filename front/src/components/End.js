import React from 'react'
import { Button, Header, Modal, Icon, Image } from 'semantic-ui-react'

import { Link } from 'react-router-dom';

class End extends React.Component {




  render() {

      return (
        <div className="end">
     <h1>Thanks, {this.props.user.name} for shopping. Your order will be delivered within 14 days</h1>
     </div>
   )
    }
  }

  export default End;
