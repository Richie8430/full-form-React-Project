import React from "react";

function Display({ income, expense }) {
  return (
    <div className="display">
      <h2 className="head">YOUR BALANCE</h2>
      <h1>${(income + expense).toFixed(2)}</h1>
      <div className="main">
        <div className="income">
          <h2 className="head">INCOME</h2>
          <h2 className="number1">$ {income.toFixed(2)}</h2>
        </div>
        <hr className="hr1" />
        <div className="expense">
          <h2 className="head">EXPENSE</h2>
          <h2 className="number2">$ {expense.toFixed(2)}</h2>
        </div>
      </div>
    </div>
  );
}

export default Display;
