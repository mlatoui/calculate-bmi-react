import React, { useState } from 'react';
import { verifyInput, calculateBmi } from '../common/script';

export const BMIForm = () => {
  const [state, setState] = useState({
    height: '',
    weight: '',
    result: '',
  });

  const clearResult = () => {
    setState({ ...state, result: '' });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    clearResult();
    verifyInput(state.height, state.weight);
    setState({
      ...state,
      result: calculateBmi(parseInt(state.height), parseInt(state.weight)),
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="height">Height:</label>
          <input
            id="height"
            type="text"
            className="form-control"
            placeholder="Cm"
            value={state.height}
            onChange={(e) => setState({ ...state, height: e.target.value })}
            onKeyDown={clearResult}
          />
        </div>

        <div>
          <label htmlFor="weight">Weight:</label>
          <input
            id="weight"
            type="text"
            className="form-control"
            placeholder="Kg"
            value={state.weight}
            onChange={(e) => setState({ ...state, weight: e.target.value })}
            onKeyDown={clearResult}
          />
        </div>

        <button className="btn btn-success w-100" type="submit">
          Calculate
        </button>
      </form>
      {state.result && <p id="result">{state.result}</p>}
    </>
  );
};
