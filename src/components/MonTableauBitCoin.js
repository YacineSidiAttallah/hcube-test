import React, { Component } from 'react';
import {Card, Table} from 'tabler-react';
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
    /*
    const dataMapping = Object.entries(this.state.stateData).map(([currency, info]) =>{
        return(
          <OneRow
            currency={currency["0"]}
            buy={info.buy}
            sell={info.sell}
          />
      )
  })
  */
  const dataMapping = Object.entries(this.state.stateData)
  .map((item, index, array) => {
    if(index<10){
      return(
        <OneRow
          currency={item[0]}
          buy={item[1].buy}
          sell={item[1].sell}
        />
    )}
  })

    return (
      <Card>
        <Card.Header>
          <Card.Title>Cours du bitcoin en différentes monnaies</Card.Title>
        </Card.Header>
        <Card.Body>
          <Table>
            <Table.Header >
                <Table.ColHeader>Monnaie</Table.ColHeader>
                <Table.ColHeader>Achat</Table.ColHeader>
                <Table.ColHeader>Vente</Table.ColHeader>
            </Table.Header>
            <Table.Body>
                {dataMapping}
            </Table.Body>
        </Table>
</Card.Body>
  </Card>
    );
  }
}

export default MonTableauBitCoin;
