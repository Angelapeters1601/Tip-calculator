function Output({ bill, total, averageTip }) {
  return (
    <div className="output">
      {bill && (
        <h2>
          You pay ${total} (${bill} + ${averageTip.toFixed(2)} tip)
        </h2>
      )}
    </div>
  );
}

export default Output;
