import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      cards: [
        {id: 1, question: "question", answer: "answer"},
        {id: 2, question: "question_2", answer: "answer_2"}
      ],
      currentCard: {}
    }
  }

  componentWillMount(){
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }

getRandomCard(currentCards){
  var card = currentCards[Math.floor(Math.random() * currentCards.length)]
  return(card)
}

render() {
    return (
      <div className="App">
        <Card answer={this.state.currentCard.answer} question= {this.state.currentCard.answer} />
      </div>
    );
  }
 
}



export default App;
 