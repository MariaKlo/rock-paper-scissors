import { useEffect, useState } from 'react';
import finger from '../src/img/finger.png';
import user from '../src/img/user.png';
import computer from '../src/img/computer.png';

const App = () => {
    //set null if the user don't provide valid value
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    //create an array of choices
    const choices = ['rock', 'paper', 'scissors'];
    
    //take value from user and print it on the screen
    const handleClick = (value) => {
        setUserChoice(value);
        generateComputerChoice();
    }

    //generate computer choice
    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(randomChoice);
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
                <div className="player-wrapper">
                    <img src={user} className="player-img"/>
                    <h1>User choice: {userChoice}</h1>
                </div>
                <div className="player-wrapper">
                    <h1>Computer choice: {computerChoice}</h1>
                    <img src={computer} className="player-img"/>
                </div>
            </div> 
            <h1>Choose an option:</h1>
            <img src={finger} className="option-img"/>
            <div className="button-wrapper">
                {choices.map((choice, index) => 
                <button key={index} onClick={() => handleClick(choice)}>{choice}</button>
                )}
            </div>
            <h1>{result}</h1>
         </div>
    );
}

export default App;