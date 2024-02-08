import React from "react";

export default function List({ item ,onDelete,onCheckbox}) {
 
  
  return (
    <li className="list">
      <input
        type="checkbox"
       
        value={item.packed}
        // onChange={handleCheckBox}
        onChange={()=>onCheckbox(item.id)}
        
      />
      <span style={ item.packed? { textDecoration: "line-through" } : {}}>
        {item.quantity}    {item.desc}
       
        
      </span>
      <button  onClick={()=>onDelete(item.id)}>❌</button>
    </li>
  );
}
