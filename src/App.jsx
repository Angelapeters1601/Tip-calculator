import React, { useState } from "react";
import "./App.css";
import Bill from "./Bill";
import Tip from "./Tip";
import Reset from "./Reset";
import Output from "./Output";

function App() {
  const [bill, setBill] = useState("");
  const [submittedBill, setSubmittedBill] = useState("");
  const [tip, setTip] = useState("");
  const [friendTip, setFriendTip] = useState("");

  const handleChange = (e) => {
    setBill(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    if (!bill) return;
    e.preventDefault();
    setSubmittedBill(bill);
    // setBill("");
  };

  const handleTip = (e) => {
    setTip(Number(e.target.value));
  };

  const handleFriendTip = (e) => {
    setFriendTip(Number(e.target.value));
  };

  const handleReset = () => {
    setBill("");
    setSubmittedBill("");
    setTip("");
    setFriendTip("");
  };

  const yourTip = (tip * submittedBill) / 100;
  const yourFriendTip = (friendTip * submittedBill) / 100;

  const averageTip = (yourTip + yourFriendTip) / 2;
  const total = submittedBill + averageTip;

  return (
    <>
      <h1>Tip calculator 😉🧮</h1>
      <Bill
        bill={bill}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <Tip
        tip={tip}
        handleTip={handleTip}
        friendTip={friendTip}
        handleFriendTip={handleFriendTip}
      />
      <Output bill={submittedBill} total={total} averageTip={averageTip} />
      <Reset handleReset={handleReset} bill={bill} />
    </>
  );
}

export default App;
