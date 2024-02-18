import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onClick = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <div>
      <h3>Add New Transaction</h3>

      <div className="form-control">
        <label htmlFor="amount">
          Amount <br />
          (Positive: Income, Negative: Expense)
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..."
        />
      </div>
      <form onSubmit={onClick}>
        <div className="form-control">
          <label htmlFor="text">Remarks</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <button onClick={onClick} className="btn">
          Add transaction
        </button>
        <br />
      </form>
    </div>
  );
};

export default AddTransaction;
