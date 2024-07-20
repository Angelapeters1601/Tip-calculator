function Reset({ handleReset, bill }) {
  return <div>{bill && <button onClick={handleReset}>Reset</button>}</div>;
}

export default Reset;
