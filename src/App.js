import './App.css';
import capybara_dummy from './assets/capybara_dummy.jpg';
import hat1 from './assets/hat1.jpg';
import hat2 from './assets/hat2.jpg';
import hat3 from './assets/hat3.jpg';
import hat4 from './assets/hat4.jpg';

import {useState} from "react";

function App() {
    const [currentCapybaraHat, setCurrentCapybaraHat] = useState(capybara_dummy);
    const allHats = [hat1, hat2, hat3, hat4];

    const nextCapybaraHat = () => {
        // If there is a hat, go to the next one
        setCurrentCapybaraHat(allHats[allHats.indexOf(currentCapybaraHat) + 1]);

        // If there is no hat, go to the first one
        if (currentCapybaraHat === capybara_dummy)
            setCurrentCapybaraHat(allHats[0]);

        // If It's the last hat, go to the dummy one
        if (currentCapybaraHat === allHats[allHats.length - 1])
            setCurrentCapybaraHat(capybara_dummy);
    }

    const previousCapybaraHat = () => {
        // If there is a hat, go to the previous one
        setCurrentCapybaraHat(allHats[allHats.indexOf(currentCapybaraHat) - 1]);

        // If there is no hat, go to the last one
        if (currentCapybaraHat === capybara_dummy)
            setCurrentCapybaraHat(allHats[allHats.length - 1]);

        // If It's the first hat, go to the dummy one
        if (currentCapybaraHat === allHats[0])
            setCurrentCapybaraHat(capybara_dummy);
    }

  return (
    <div className="App">
        <div id="general-container">
            <div id="current-capybara-container">
                <img id="current-capybara" src={currentCapybaraHat.toString()}  alt={capybara_dummy}/>
            </div>
            <div>
                <div id="capybara-changes-interface">
                    <button className="selection-arrow" onClick={previousCapybaraHat}>&lt;</button>
                    <div className="parameter-to-change">Head</div>
                    <button className="selection-arrow" onClick={nextCapybaraHat}>&gt;</button>
                </div>
                {/*<div id="capybara-changes-interface">*/}
                {/*    <button className="selection-arrow">&lt;</button>*/}
                {/*    <div className="parameter-to-change">Torso</div>*/}
                {/*    <button className="selection-arrow">&gt;</button>*/}
                {/*</div>*/}
                {/*<div id="capybara-changes-interface">*/}
                {/*    <button className="selection-arrow">&lt;</button>*/}
                {/*    <div className="parameter-to-change">Foots</div>*/}
                {/*    <button className="selection-arrow">&gt;</button>*/}
                {/*</div>*/}
            </div>
            <button id="submit-capybara"><b>Vestir carpincho</b></button>
        </div>
    </div>
  );
}

export default App;
