function Tip({ tip, handleTip, friendTip, handleFriendTip }) {
  return (
    <>
      <div className="tip">
        <h3>How did you like the service ? </h3>
        <select value={tip} onChange={handleTip}>
          <option value="">Select an option</option>
          <option value="5">Good 😊(5%)</option>
          <option value="10">It was Great 👍(10%)</option>
          <option value="15">Really Amazing 👏(15%)</option>
          <option value="20">Extraordinary 🙌(20%)</option>
        </select>
      </div>
      <div className="tip">
        <h3>How did your friend like the service ? </h3>
        <select value={friendTip} onChange={handleFriendTip}>
          <option>Select an option</option>
          <option value="5">Good 😊(5%)</option>
          <option value="10">It was Great 👍(10%)</option>
          <option value="15">Really Amazing 👏(15%)</option>
          <option value="20">Extraordinary 🙌(20%)</option>
        </select>
      </div>
    </>
  );
}

export default Tip;
