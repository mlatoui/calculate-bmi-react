export const Result = ({ state }) => {
  return state.result && <p id="result">{state.result}</p>;
};
