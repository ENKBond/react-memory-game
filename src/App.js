import React, { Component } from 'react';
import './App.css';
import Title from "./components/Title";
import ImageCard from "./components/ImageCard";
import Counter from "./components/Counter";
import images from "./images.json";

class App extends Component {
  
  state = {
    images,
    message: "",
    score: 0
  };

  shuffle = data =>{
    for(let i=data.length-1; i>0; i--){
        const j= Math.floor(Math.random() * (i+1))
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
    }
    return data;
 }

 resetData = data => {
     const resetData = data.map(item => ({ ...item, clicked: false, message: "" }));
     return this.shuffle(resetData);
   };
 
 handleCorrectGuess = newData => {
     const score  = this.state.score;
     const newScore = score + 1;
 
     this.setState({
       images: this.shuffle(newData),
       score: newScore,
       message: "Good job!"
     });
   };
 
   handleIncorrectGuess = data => {
     this.setState({
       images: this.resetData(data),
       score: 0,
       message: "Nope! Try again"
     });
   };
 


 handleClick = (id) =>{
     let guessedCorrectly = false;
     const newImages = this.state.images.map(item => {
         const newItem = { ...item };
         if (newItem.id === id) {
             if (!newItem.clicked) {
               newItem.clicked = true;
               guessedCorrectly = true;
             }
           }
           return newItem;
     });
     guessedCorrectly? this.handleCorrectGuess(newImages): this.handleIncorrectGuess(newImages);

 }
    
    
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Title/>
            </div>
          </div>
          <div className = "row">
            <div className="col-8">
            {this.state.images.map(item => (
              <ImageCard 
                id={item.id}
                name={item.name}
                image={item.image}
                clicked={item.clicked}
                handleClick={this.handleClick}
              />
              ))}
            </div>
            <div className="col-4">
              <Counter 
                score={this.state.score}
                message={this.state.message}
                />
            </div>
          </div>
        </div>
    );
  }
  
}





export default App;
