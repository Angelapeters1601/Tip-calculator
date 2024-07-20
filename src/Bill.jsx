function Bill({ bill, handleChange, handleSubmit }) {
  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <h3>How much was the bill ? </h3>
        <input
          type="text"
          placeholder="$..."
          value={bill}
          onChange={handleChange}
        />
      </form>
    </div>
  );
}

export default Bill;
