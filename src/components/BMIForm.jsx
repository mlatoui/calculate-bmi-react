import React, { useState } from 'react';

export const BMIForm = () => {
  const [state, setState] = useState({
    height: '',
    weight: '',
    result: '',
  });

  const parsedHeight = parseInt(state.height);
  const parsedWeight = parseInt(state.weight);
  const calculateBmi = () => {
    if (state.height.trim() === '' || state.weight.trim() === '') {
      alert('Please fill all inputs!');
      return false;
    }

    if (isNaN(parsedHeight) || isNaN(parsedWeight)) {
      alert('Height and Weight should be a number');
      return;
    }

    if (parsedHeight <= 0 || parsedWeight <= 0) {
      alert('Height and Weight should be grater than 0');
      return;
    }

    const heightInMeters = parsedHeight / 100;
    const bmiResult = (
      parsedWeight /
      (heightInMeters * heightInMeters)
    ).toFixed(2);

    setState({ ...state, result: bmiResult });
  };

  const clearResult = () => {
    setState({ ...state, result: '' });
  };

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    clearResult();
    calculateBmi();
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
