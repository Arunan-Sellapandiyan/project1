import React, { useState } from "react";
import Header from "./Header";
import Form from "./Form";
import Display from "./Display";
import Footer from "./footer";
import "./index.css";

export default function Route() {
  const [items, setItems] = useState([]);
  //add
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  //delete
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  //checkbox
  function handleCheckBox(id){
    setItems((items)=>items.map((item)=>item.id ===id? {...item,packed :!item.packed}:item))

  }
  function Reset(){
   const confirmed= window.alert("Dlete all item")
    if(confirmed)setItems([]);
  }

  return (
    <div>
      <Header />
      <Form onAddItems={handleAddItems} />
      <Display items={items} onDelete={handleDeleteItem} onCheckbox={handleCheckBox} Reset={Reset}/>
      <Footer items={items}  />
    </div>
  );
}
