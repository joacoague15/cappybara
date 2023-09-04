import './App.css';
import penguin_dummy from './assets/penguin_dummy.png';

import head1_eyes2 from './assets/head1_eyes2.png';
import head2_eyes1 from './assets/head2_eyes1.png';
import head2_eyes2 from './assets/head2_eyes2.png';

import { useState } from "react";


function App() {
    const [currentPenguinHead, setCurrentPenguinHead] = useState(1);
    const [currentPenguinEyes, setCurrentPenguinEyes] = useState(1);

    const PENGUIN_OPTIONS = [
        { id: '1', src: penguin_dummy, head: 1, eyes: 1 },
        { id: '2', src: head1_eyes2, head: 1, eyes: 2 },
        { id: '3', src: head2_eyes1, head: 2, eyes: 1 },
        { id: '3', src: head2_eyes2, head: 2, eyes: 2 },
    ];

    const nextPenguinHead = () => {
        setCurrentPenguinHead(currentPenguinHead + 1);
    }

    const previousPenguinHead = () => {
        setCurrentPenguinHead(currentPenguinHead - 1);
    }

    const nextPenguinEyes = () => {
        setCurrentPenguinEyes(currentPenguinEyes + 1);
    }

    const previousPenguinEyes = () => {
        setCurrentPenguinEyes(currentPenguinEyes - 1);
    }

    const getPenguinImage = (head, eyes) => {
        return PENGUIN_OPTIONS.find(option => option.head === head && option.eyes === eyes).src;
    }

  return (
    <div className="App">
        <div id="general-container">
            <div id="current-capybara-container">
                <img src={getPenguinImage(currentPenguinHead, currentPenguinEyes)}  alt={penguin_dummy}/>
            </div>
            <div>
                <div id="capybara-changes-interface">
                    <button className="selection-arrow" onClick={previousPenguinHead}>&lt;</button>
                    <div className="parameter-to-change">Head</div>
                    <button className="selection-arrow" onClick={nextPenguinHead}>&gt;</button>
                </div>
                <div id="capybara-changes-interface">
                    <button className="selection-arrow" onClick={previousPenguinEyes}>&lt;</button>
                    <div className="parameter-to-change">Eyes</div>
                    <button className="selection-arrow" onClick={nextPenguinEyes}>&gt;</button>
                </div>
                {/*<div id="capybara-changes-interface">*/}
                {/*    <button className="selection-arrow">&lt;</button>*/}
                {/*    <div className="parameter-to-change">Foots</div>*/}
                {/*    <button className="selection-arrow">&gt;</button>*/}
                {/*</div>*/}
            </div>
            <button id="submit-capybara"><b>Dress penguain</b></button>
        </div>
    </div>
  );
}

export default App;
