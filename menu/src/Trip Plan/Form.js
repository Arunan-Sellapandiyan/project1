import React, { useState } from "react";

export default function Form({ onAddItems }) {
  const [quantity, setQuantity] = useState(1);
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { desc, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    //display add items
    onAddItems(newItem);

    setDesc("");
    setQuantity(1);
  }

  function handleNumChange(e) {
    setQuantity(e.target.value);
  }

  function changeDescription(e) {
    setDesc(e.target.value);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What are the things need for your trip?</h3>
      <select value={quantity} onChange={handleNumChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Items"
        value={desc}
        onChange={changeDescription}
      />
      <button>Add</button>
    </form>
  );
}
