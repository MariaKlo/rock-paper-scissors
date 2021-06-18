import { useEffect, useState } from 'react';
import win from './img/win.png';
import lose from './img/lose.png';
import draw from './img/draw.png';
import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';
const App = () => {
    //set null if the user don't provide valid value
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [gameImage, setGameImages] = useState(null);
    //create an array of choices
    const choices = ['rock', 'paper', 'scissors'];
    //create an array of images
    const gameImages = [rock, paper, scissors];
    const resultImages = [win, lose, draw];
    //take value from user and print it on the screen
    const handleClick = (value) => {
        setUserChoice(value);
        generateComputerChoice();
        generateGameImages();
    }

    //generate computer choice
    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
    }

    //generate result pictures
    const generateResultImages = () => {

    }

    //generate game pictures
    const generateGameImages = (value) => {
        if (value === 'rock') {
            return gameImages[0];
        } else if (value === 'paper') {
            return gameImages[1];
        } else if (value === 'scissors') {
            return gameImages[2];
        } else {
            return false;
        }
        setGameImages(value);
    }

    //check the result when computer&user choice changes
    useEffect(() => {
        switch(userChoice + computerChoice) {
            case 'scissorspaper':
            case 'rockscissors':
            case 'paperrock':
                setResult('YOU WIN!')
                break;
            case 'paperscissors':
            case 'scissorsrock':
            case 'rockpaper':
                setResult('YOU LOSE!')
                break;
            case 'rockrock':
            case 'paperpaper':
            case 'scissorsscissors':
                setResult('ITS A DRAW!')
                break;
        }
    }, [computerChoice, userChoice])

    return (
        //the output on the screen
        <div>
            <div className="header-wrapper">
                <h1>User choice: {userChoice}{gameImage}</h1>
                <img src={scissors} alt="scissors" className="user-img"/>
                <h1>Computer choice: {computerChoice}</h1>
                <img src={scissors} alt="scissors" className="computer-img"/>
            </div> 
            <h1>Choose an option:</h1>
            <div className="button-wrapper">
                {choices.map((choice, index) => 
                <button key={index} onClick={() => handleClick(choice)}>{choice}</button>
                )}
            </div>
            <h1>{result}</h1>
            <img src={win} alt="winner" className="result-img"/>
         </div>
    );
}

export default App;