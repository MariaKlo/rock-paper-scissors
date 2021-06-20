import { useEffect, useState } from 'react';
// import win from './img/win.png';
// import lose from './img/lose.png';
// import draw from './img/draw.png';
// import rock from './img/rock.png';
// import paper from './img/paper.png';
// import scissors from './img/scissors.png';
const App = () => {
    //set null if the user don't provide valid value
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    // const [gameImage, setGameImages] = useState(null);
    //create an array of choices
    const choices = ['rock', 'paper', 'scissors'];
    //create an array of images
    // const gameImages = [rock, paper, scissors];
    // const resultImages = [win, lose, draw];
    
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

    //CREATE STATIC IMAGES IN JSX LIKE ONE RESULT AND ONE GAME

    //create counter function
    // const counterForUser = (count) => {
        // useEffect(() => {
        //     switch(userChoice) {
        //         case 'scissorspaper':
        //         case 'rockscissors':
        //         case 'paperrock':
        //             setResult(count++)
        //             break;
        //         case 'paperscissors':
        //         case 'scissorsrock':
        //         case 'rockpaper':
        //             setResult(count--)
        //             break;
        //         case 'rockrock':
        //         case 'paperpaper':
        //         case 'scissorsscissors':
        //             setResult(count)
        //             break;
        //     }
        // }, [userChoice])
    // }

    //generate result pictures
    // const generateResultImages = () => {

    // }

    //generate game pictures
    // const generateGameImages = (value) => {
        //I need to change pic by the value of input. Check it out later
    
//         switch(value) {
//         case 'rock':
//             value = rock; break;
//         case 'paper':
//             value = paper; break;
//         case 'scissors':
//             value = scissors; break;
        
//     }
//     setGameImages(value);
// }

    

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
            <div className="counter-wrapper">
                <p>You: </p>
                <p>Computer: </p>
            </div>
            <div className="header-wrapper">
                <h1>User choice: {userChoice}</h1>
                <h1>Computer choice: {computerChoice}</h1>
            </div> 
            <h1>Choose an option:</h1>
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