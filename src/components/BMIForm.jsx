import React, { useState } from 'react';
import { verifyInput, calculateBmi } from '../common/script';
import { Result } from './Result';

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
    e.preventDefault();
    clearResult();
    verifyInput(state.height, state.weight) &&
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
          />
        </div>

        <button className="btn btn-success w-100" type="submit">
          Calculate
        </button>
      </form>
      <Result state={state} />
    </>
  );
};
