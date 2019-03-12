import React, { Component } from 'react';
import {Table} from 'tabler-react';
import "tabler-react/dist/Tabler.css";

class OneRow extends Component {

    render(){
      return(
        <Table.Row>
          <Table.Col>{this.props.currency}</Table.Col>
          <Table.Col>{this.props.buy}</Table.Col>
          <Table.Col>{this.props.sell}</Table.Col>
        </Table.Row>
)}

}

export default OneRow;
