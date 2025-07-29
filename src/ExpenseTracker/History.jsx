import React from "react";
import dustbin from "./dustbin.png";

function History({ items, handleDelete }) {
  return (
    <div className="history">
      <h2>History</h2>
      <hr />
      <ul>
        {items.length > 0 ? (
          items.map((it, index) => {
            return (
              <li key={index} className={it.money > 0 ? "plus" : "minus"}>
                <div className="left">
                  <img
                    src={dustbin}
                    className="delete"
                    onClick={() => handleDelete(index)}
                  />
                  <p>{it.nam}</p>
                </div>
                <div>
                  <p>$ {Math.abs(it.money)}</p>
                  <span />
                </div>
              </li>
            );
          })
        ) : (
          <li className="else">No Transactions available</li>
        )}
      </ul>
    </div>
  );
}

export default History;
