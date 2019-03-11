import React, { Component } from 'react';
import {Table} from 'tabler-react';
import "tabler-react/dist/Tabler.css";
import OneRow from './OneRow'

class MonTableauBitCoin extends Component {

  constructor(){
    super()
    this.state={
      stateData:{}
    }

  }

  componentDidMount(){
    fetch('https://blockchain.info/fr/ticker')
    .then(data => data.json())
    .then(data => {
      this.setState({
        stateData:data
      })
    })
    console.log("Data have been imported ! ")
  }


  render() {

    const dataMapping = Object.entries(this.state.stateData).map(([currency, info]) =>{
        return(
          <OneRow
            currency={currency}
            buy={info.buy}
            sell={info.sell}
          />
      )
  })

    return (
      <Table>
        //Adding a comment
        <Table.Header >
          <Table.ColHeader className="table-text-color">Monnaie</Table.ColHeader>
          <Table.ColHeader className="table-text-color">Achat</Table.ColHeader>
          <Table.ColHeader className="table-teTxt-color">Vente</Table.ColHeader>
        </Table.Header>
        <Table.Body>
          {dataMapping}
      </Table.Body>
</Table>
    );
  }
}

export default MonTableauBitCoin;
