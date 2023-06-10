export const BMIForm = () => {
  return (
    <form>
      <div>
        <label for="height">Height:</label>
        <input
          id="height"
          type="text"
          className="form-control"
          placeholder="Cm"
        ></input>
      </div>

      <div>
        <label for="weight">Weight:</label>
        <input
          id="weight"
          type="text"
          className="form-control"
          placeholder="Kg"
        ></input>
      </div>

      <button className="btn btn-success w-100">Calculate</button>
    </form>
  );
};
