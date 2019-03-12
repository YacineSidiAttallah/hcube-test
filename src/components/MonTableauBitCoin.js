import React, { Component } from 'react';
import {Card, Table, Button} from 'tabler-react';
import "tabler-react/dist/Tabler.css";
import OneRow from './OneRow'

/*Classe prinicpale pour l'import des data et leur affichage*/
class MonTableauBitCoin extends Component {

  constructor(){
    super()
    this.state={
      stateData:{}
    }

  }

  /* Import de l'API */
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

  /* Mapping des données et affichage de chaque élément dans un composant OneRow */
  /* Affichage des dix premiers éléments de l'objet json */
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
            {/* Affichange des data dans des composant OneRow */}
                {dataMapping}
            </Table.Body>
        </Table>
        <Button color="danger" onClick={this.props.signOut} >Sign Out !</Button>
</Card.Body>
  </Card>
    );
  }
}

export default MonTableauBitCoin;
