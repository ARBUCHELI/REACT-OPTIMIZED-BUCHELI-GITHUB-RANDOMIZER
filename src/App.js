import React, { useState } from 'react';
import { GraphPoint } from './GraphPoint';
import './styles.css';

export const App = () => {
  const [showExplainer, setShowExplainer] = useState(false);

  return (
    <>
      <div className='container'>
        <h1 style={{textAlign: "center", paddingTop: "1em", fontFamily: "monospace", fontWeight: "bold", fontSize: "3em", color: "#bd5734 "}}>BUCHELI GITHUB RANDOMIZER</h1>
        <div className='e3-container' style={{width: "50%", margin: "auto", paddingTop: "2%"}}>
          <div className='e3-header'>
            <div>
              <h2>GitHub randomizer</h2>
              <p>Create a randomized GitHub contribution graph</p>
            </div>
            <button
              className='e3-button'
              onClick={() => setShowExplainer(!showExplainer)}
            >
              {showExplainer ? 'Hide' : 'Show'} Explainers
            </button>
          </div>
          {showExplainer && (
            <p className='e3-explainer'>
              The git contribution graph below is randomized. Only 20% of the
              contributions are green.
            </p>
          )}
          <div className='e3-contribution-graph'>
            {[...Array(10000)].map((_, index) => (
              <GraphPoint key={index} />
            ))}
          </div>
        </div>
      </div>
      <footer style={{textAlign: "center", paddingTop: "2em", fontFamily: "monospace", fontWeight: "bold", fontSize: "2em", color: "#bd5734 "}}>Bucheli Web © 2023</footer>
    </>
  );
};

export default App;
