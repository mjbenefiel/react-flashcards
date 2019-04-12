import React, { Component } from "react";
import "./App.css";
import Card from "./Card/Card";
import DrawButton from "./DrawButton/DrawButton";

class App extends Component {
  constructor(props) {
    super(props);

    this.updateCard = this.updateCard.bind(this);

    this.state = {
      cards: [
        { id: 1, question: "question", answer: "answer" },
        { id: 2, question: "question_2", answer: "answer_2" }
      ],
      currentCard: {}
    };
  }

  componentWillMount() {
    const currentCards = this.state.cards;

    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    });
  }

  getRandomCard(currentCards) {
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return card;
  }

  updateCard() {
    console.log("new card");
  }
  
  render() {
    return (
      <div className="App">
        <div className="cardRow">
          <Card
            question={this.state.currentCard.question}
            answer={this.state.currentCard.answer}
          />
        </div>

        <div className="buttonRow">
          <DrawButton drawCard={this.updateCard} />
        </div>
      </div>
    );
  }
}

export default App;
