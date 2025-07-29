import React from "react";

function Inputs({ nam, handleNameChange, money, setMoney, handleSubmit }) {
  return (
    <div className="transaction">
      <h2>Add new Transaction</h2>
      <hr />
      <form>
        <p>text</p>
        <input
          type="text"
          placeholder="please enter the text"
          value={nam}
          onChange={handleNameChange}
        />
        <p>amount</p>
        <p>(negative=Expense, positive=income)</p>
        <input
          type="number"
          placeholder="please enter Amount"
          value={money}
          onChange={(e) => setMoney(e.target.value)}
        />
        <button className="submit" onClick={handleSubmit}>
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default Inputs;
