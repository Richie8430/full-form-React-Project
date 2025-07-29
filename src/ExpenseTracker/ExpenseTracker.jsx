import React, { useEffect, useState } from "react";
import History from "./History";
import Display from "./Display";
import Inputs from "./Inputs";

const LOCAL_STORAGE_ITEMS_KEY = "expenseTracker.items";

function ExpenseTracker() {
  const [items, setItems] = useState(() => {
    try {
      const storedItems = localStorage.getItem(LOCAL_STORAGE_ITEMS_KEY);
      return storedItems ? JSON.parse(storedItems) : [];
    } catch (error) {
      alert.error("Error loading items from localStorage:", error);
      return [];
    }
  });
  const [nam, setNam] = useState("");
  const [money, setMoney] = useState("");
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_ITEMS_KEY, JSON.stringify(items));
    } catch (error) {
      "Error saving items to the localStorage:", error;
    }
  }, [items]);

  useEffect(() => {
    let newIncome = 0;
    let newExpense = 0;

    items.forEach((it) => {
      if (it.money >= 0) {
        newIncome += it.money;
      } else {
        newExpense += it.money;
      }

      setExpense(newExpense);
      setIncome(newIncome);
    });
  });

  function addTask(item) {
    const id = crypto.randomUUID();
    setItems([...items, { ...item, id }]);
  }

  function handleDelete(index) {
    setItems(items.filter((_, i) => i !== index));
  }
  function handleSubmit(e) {
    e.preventDefault();
    const amount = Number(money);
    if (nam.trim() === "" || isNaN(amount)) {
      alert("Please fill the empty rooms!");
      return;
    }

    addTask({ nam: nam, money: amount });
    setNam("");
    setMoney("");
  }
  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.length > 0) {
      setNam(value.charAt(0).toUpperCase() + value.slice(1));
    } else {
      setNam(""); // Ensures the state is cleared when the input is empty
    }
  };

  return (
    <div className="tracker">
      <h1 className="header">Expense Tracker</h1>
      <Display income={income} expense={expense} />
      <History items={items} handleDelete={handleDelete} />
      <Inputs
        nam={nam}
        money={money}
        handleNameChange={handleNameChange}
        setMoney={setMoney}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}

export default ExpenseTracker;
